import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StickyNavbar from './components/StickyNavbar';

import { ThemeProvider } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className="App">
        <StickyNavbar />
        <ItemListContainer title="Bienvenid@ a Dribble Sportswear">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </ItemListContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;
