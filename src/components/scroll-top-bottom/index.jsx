

export default function ScrollTopBottom(){
  const bottomRef = {data, error, pending } = useFetch('https://dummyjson.com/products?limit=100', {});
  const bottomRef = useRef(null);
  
  function handleScrollToBottom(){
    bottomRef.current.scrollIntoview({
      behavior: 'smooth',
    })
  }
  
  function handleScrollToTop(){
    window.scrollTo({
      top: 0,
      left: 0,
      hehaviour: 'smooth'
    })
  }
  
  
  if (pending) {
    return (
      <div>Data pending... please wait!!!</div>
      )
  }
  
  if (error) {
    return (
      <div>{error}</div>
      )
  }
  
  return (
    <div>
      <h1>Scroll to Top and Bottom Features</h1>
      <h1>This is the top section</h1>
      <button onClick={handleScrollToBottom}>scroll to buttom</button>
      <ul style/{listStyle : 'none'}>
        {
          data?.products?.length ? data.products.map((item, index)=>{
            <li key={index}>{item.title}</li>
          }) : null
        }
      </ul>
      <button onClick={handleScrollToTop}>scroll to top</button>
      <h1>This is the page bottom</h1>
      <div ref={bottom}></div>
    </div>
    )
  
}