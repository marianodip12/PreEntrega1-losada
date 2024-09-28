import { useCart } from './CartContext.jsx'; 
import { Link } from 'react-router-dom'; 

export default function CartWidget() {
  const { cartItems, removeFromCart } = useCart(); 

  const total = cartItems.reduce((acc, item) => acc + Number(item.price), 0); 

  return (
    <>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <>
          <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt={item.title} width="100" />
                  </td>
                  <td>{item.title}</td> 
                  <td>{item.description}</td> 
                  <td>{item.category}</td> 
                  <td>{"$" + item.price}</td> 
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      <img 
                        src="data:image/png;base64,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" 
                        alt="Eliminar" 
                        width="20" 
                      />
                    </button> 
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" style={{ textAlign: 'right' }}><strong>Total:</strong></td>
                <td><strong>{"$" + total}</strong></td>
                <td></td> 
              </tr>
            </tbody>
          </table>

          
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/">
              <button style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>
                Seguir comprando
              </button>
            </Link>
            <Link to="/HomeWidget">
              <button style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
                Comprar
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </>
  );
}

