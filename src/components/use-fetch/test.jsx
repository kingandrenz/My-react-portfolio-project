import useFetch from './index'; 

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch('https://dummyjson.com/products', {});

  return (
    <div>
      <h1>useFetch Hook</h1>

      {pending && <h3>Pending... please wait</h3>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data?.products?.length > 0 &&
        data.products.map((item) => (
          <p key={item.key}>{item.title}</p>
        ))}
    </div>
  );
}
