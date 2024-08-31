
import './ProductCard.css';
import { Link } from 'react-router-dom';

export default function ProductsCard({ title, price, image, idProd }) {
  return (
    <>
      <article className="carta">
        <h4>{title}</h4>
        <img src={image} alt={title} class="imagen"/>
        <p>{price}</p>
        <button>
          <Link to={`/item/${idProd}`}>Ver detalles</Link>
        </button>
      </article>
    </>
  );
}