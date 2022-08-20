import NavBar from './components/Navbar/Navbar'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';
import Home from './pages/Home'
import Category from './pages/Category';
import ItemDetail from './pages/ItemDetail';
import CartPage from './pages/CartPage';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/category/:category" element={<Category/>}/>
            <Route path="/item/:id" element={<ItemDetail/>}/>
            <Route path="/cart" element={<CartPage/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
