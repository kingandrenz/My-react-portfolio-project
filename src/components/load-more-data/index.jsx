import { useState, useEffect} from 'react';
import './style.css';

export default function LoadMoreImage() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);
  const [err, setErr] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  
  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`);
      
      const result = await response.json();
      
      if (result && result.products && result.products.length) {
        setProduct((prevData) => [...prevData, ...result.products]);

        setLoading(false);
      }
    } catch(err) {
      setErr(err.message);
      setLoading(false);
    }
  }
  
  useEffect(()=> {
    fetchProduct();
  }, [count]);
  
  useEffect(()=> {
    if (product && product.length === 100) {
      setDisableButton(true);
    }
  }, [product]);
  
  if (loading) {
  return (
    <div>
      Please wait! Data loading...
    </div>
  );
}

  
  if (err !==null) {
    return (
      <div>`Error: ${err}`</div>
      );
  }
  
  return (
    <div className="new-container">
      <div className='product-container'>
        {
          product && product.length ? product.map((item) => <div className="product" key={item.id}>
            <img 
            src={item.thumbnail}
            alt={item.title}
            />
            <p>{item.title}</p>
          </div>
          ) : null
        }
      </div>
      <div className="btn-container">
        <button disabled={disableButton} onClick={()=> setCount(count + 1)}>Load more products</button>
        {
          disableButton && (
          <p>Max products reached!</p>
          )
        }
      </div>
    </div>
    )
}