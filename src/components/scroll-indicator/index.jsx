import { useState, useEffect } from 'react';
import './style.css';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data?.products?.length) {
        setData(data.products);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setErr(e.message);
    }
  }

  function handleScrollPercentage() {
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', handleScrollPercentage);
    };
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (err) return <p>Error: {err}</p>;

  return (
    <div>
      <div className='top-container'>
        <h1>Custom Scroll</h1>
        <div className='percentage-tracking-container'>
          <div className='current-progress-bar' style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      {
        data.length > 0 && data.map(item => (
          <p key={item.id}>{item.title}</p>
        ))
      }
    </div>
  );
}
