import NavBar from './components/Navbar/Navbar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <ItemListContainer greeting="Productos de Unicornios"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
