import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ThemeProvider } from 'react-bootstrap';
import { StickyNavbar, ItemListContainer, ItemDetailContainer, Cart } from "./components";
import { Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';

function App() {

  return (

    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <CartContextProvider>
        <div className="App">
          <StickyNavbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer title="Nuestros productos" />}></Route>
            <Route exact path="/category/:categoryId" element={<ItemListContainer title="Nuestros productos" />}></Route>
            <Route exact path="/item/:productId" element={<ItemDetailContainer />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </div>
      </CartContextProvider>
    </ThemeProvider>

  );
}

export default App;
