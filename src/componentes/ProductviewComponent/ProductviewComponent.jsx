import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../../asyncMock.js';

export default function SingleProd() {
  const [product, setProduct] = useState({});
  const { prodId } = useParams();

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);

  return (
    <>
      <article style={{ border: '1px solid green', padding: 10 }}>
        <h4>
          {product.id} - {product.title}
        </h4>
        <img src={product.image} alt={product.title} />
        <p>{product.price}</p>
        <p>{product.description}</p>
        <p>{product.category}</p>
      </article>
    </>
  );
}