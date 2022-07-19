
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import { collection, getDocs, getDoc, doc, getFirestore } from 'firebase/firestore';


function ItemListContainer() {

  const params = useParams()
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const getItems = () => {
    setIsLoading(true);
    setItems([]);
    setTitle("");

    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const categoryRef = doc(db, "categorias", String(params.categoryId));

    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot.docs.length > 0) {
        // obtiene items
        let itemsArr = snapshot.docs.map((doc) => doc.data());
        let category = params.categoryId;

        if (category === undefined) {
          // guarda todo el listado de productos
          setItems(itemsArr);
        } else {
          // filtra productos de acuerdo al categoryId, buscando dentro del array de categorías de cada producto
          setItems(itemsArr.filter(i => i.categorias.includes(parseInt(params.categoryId))));
        }

        getDoc(categoryRef).then((snapshot) => {
          if (snapshot.exists()) {
            // obtiene categorías
            const results = [snapshot.data()];
            setTitle(results[0].nombre);
          } else {
            //console.log("la categoría no existe");
            setTitle("Nuestros productos")
            setIsLoading(false);
          }
        })
        setIsLoading(false);
      } else {
        setTitle("No se han encontrado productos")
        setIsLoading(false);
      }
    })
  }

  useEffect(() => {
    getItems();
  }, [params.categoryId]);


  return (
    <Container fluid className='pt-4 pb-4'>
      {isLoading ? <Skeleton height={35} width={200} className="mb-4" /> : <h2 className='mb-4'>{title}</h2>}
      <ItemList items={items} isLoading={isLoading} />
    </Container>
  );
}

export default ItemListContainer;