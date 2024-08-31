import { useEffect, useState } from 'react';
import { useParams, } from 'react-router-dom';
import { getProducts } from '../../../asyncMock.js';  


import ProductsCard from './ProductCard.jsx';
import './ProductComponent.css';

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);//revisar products por que sale error
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { category } = useParams(); 
 

  useEffect(() => {
    getProducts.then((data) => {
      setProducts(data);
      if (category) {
        setFilteredProducts(data.filter((product) => product.category === category));
      } else {
        setFilteredProducts(data);
      }
    });
  }, [category]);



  return (
    <>
      <h2>{category ? `Catálogo de ${category}` : 'Todos los Productos'}</h2>
      <section className="contenedorProds">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => (
            <ProductsCard
              key={prod.id}
              title={prod.title}
              price={prod.price}
              image={prod.image}
              idProd={prod.id}
              
            />
          ))
        ) : (
          <p>No hay productos en esta categoria.</p>
        )}
      </section>
    </>
  );
}
