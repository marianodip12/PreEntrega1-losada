import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock.js';
import { useCart } from '../CartComponent/CartContext';
export default function SingleProd() {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchedProduct = getProduct(prodId);
    setProduct(fetchedProduct);
  }, [prodId]);

  return (
    <article style={{ border: '1px solid green', padding: 10 }}>
      <h4>{product.id} - {product.title}</h4>
      <img src={product.image} alt={product.title} />
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </article>
  );
}
