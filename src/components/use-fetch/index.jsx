import { useState, useEffect } from 'react';

export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const res = await fetch(url, { ...options });

      if (!res.ok) {
        throw new Error(res.statusText || 'Failed to fetch data');
      }

      const result = await res.json();
      setData(result);
      setErr(null);
    } catch (error) {
      setErr(error.message || 'Unknown error');
      console.error('Fetch error:', error);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error: err, pending };
}
