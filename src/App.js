import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import StickyNavbar from './components/StickyNavbar';
import { ThemeProvider } from 'react-bootstrap';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div className="App">
        <StickyNavbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
