import './App.css';
import NavBar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import CheckOutPage from './components/CheckOutPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <CheckOutPage/>
      <Product/>
      <Products/>
    </div>
  );
}

export default App;
