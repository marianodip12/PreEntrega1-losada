import './App.css';
import CartWidget from './componentes/CartComponent/CartWidget';
import ItemListContainer from './componentes/ProductComponent/ProductComponent';
import ItemDetailContainer from './componentes/ProductviewComponent/ProductviewComponent';
import NavBar from './componentes/NavigationComponent/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './componentes/CartComponent/CartContext'; 
import OrderComplete from './componentes/OrderComplete/OrderComplete';


function App() {
  return (
    <>
      <CartProvider> {}
        <BrowserRouter>
          <h1>Compra Gamer Store</h1>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartWidget />} />
            <Route path="/item/:prodId" element={<ItemDetailContainer />} />
            <Route path="/HomeWidget" element={<OrderComplete />} />
          
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
