import './navbar.css';
import { Link } from 'react-router-dom';

// Los botones crean el formato de navegación con enlaces a las categorías
export default function NavBar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        marginBottom: 30,
        
      }}
    >
      <button>
        <Link to="/">Inicio</Link>
      </button>
      <button>
        <Link to="/category/motherboard">Motherboards</Link>
      </button>
      <button>
        <Link to="/category/ram">Memorias RAM</Link>
      </button>
      <button>
        <Link to="/category/procesador">Procesadores</Link>
      </button>
      <button>
        <Link to="/cart"> <img src="/cart.png" alt="Carrito de compras" /> </Link>
      </button>
    </nav>
  );
}