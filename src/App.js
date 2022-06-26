import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StickyNavbar from './components/StickyNavbar';
import { ThemeProvider } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';


function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className="App">
        <StickyNavbar />
        <ItemListContainer title="Calzado"/>
      </div>
    </ThemeProvider>
  );
}

export default App;
