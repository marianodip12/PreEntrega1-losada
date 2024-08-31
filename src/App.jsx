import './App.css';
import CartWidget from './componentes/CartComponent/CartWidget';

import ItemListContainer from './componentes/ProductComponent/ProductComponent';
import ItemDetailContainer from './componentes/ProductviewComponent/ProductviewComponent';
import NavBar from './componentes/NavigationComponent/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Configuración de rutas y componentes
function App() {
  return (
    <>
      <BrowserRouter> 
        <h1>Compra Gamer Store</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/item/:prodId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;