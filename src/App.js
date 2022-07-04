import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ThemeProvider } from 'react-bootstrap';
import { StickyNavbar, ItemListContainer, ItemDetailContainer } from "./components";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className="App">
        <StickyNavbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer title="Nuestros productos" />}></Route>
          <Route exact path="/category/:categoryId" element={<ItemListContainer title="Nuestros productos" />}></Route>
          <Route exact path="/item/:productId" element={<ItemDetailContainer />}></Route>
          
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
