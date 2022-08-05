import NavBar from './components/Navbar/Navbar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Productos Destacados"/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
