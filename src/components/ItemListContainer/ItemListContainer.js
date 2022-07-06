
import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { Container } from 'react-bootstrap';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function ItemListContainer() {

  const params = useParams()
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setItems([]);
    setTimeout(() => {
      fetch("https://api.npoint.io/b41f44aae25fe3b72f3b")
        .then((resp) => resp.json())
        .then((data) => { 
          // chequea si categoryId está definido o no
          if (params.categoryId === undefined ) {
            // guarda todo el listado de productos
            setItems(data.items);
            setTitle("Nuestros productos");
          } else {
            // filtra productos de acuerdo al categoryId, buscando dentro del array de categorías de cada producto
            setItems(data.items.filter(i => i.categorias.includes(parseInt(params.categoryId))));
            setTitle(data.categorias[params.categoryId].nombre)
          }
          setIsLoading(false);
        });
    }, 2000);
  }, [params.categoryId]);



  return (
    <Container fluid className='pt-4 pb-4'>
      {isLoading ? <Skeleton height={35} width={200} className="mb-4"/> : <h2 className='mb-4'>{title}</h2>}
      <ItemList items={items} isLoading={isLoading} />
    </Container>
  );
}

export default ItemListContainer;