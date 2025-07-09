import { useState, useEffect } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import './style.css'


export default function ImageSlider({url, limit=5, page=1}) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  
  async function fetchImage(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch(e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }
  
  useEffect(()=> {
    if (url !=="") {
      fetchImage(url)
    }
  }, [url]);
  
  if (loading) {
    return <div>Loading data... please wait</div>
  }
  
  if (errMsg !== null) {
    return <div>`Error: ${errMsg}`</div>
  }
  
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1)
  }
  
  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0: currentSlide + 1)
  }
  
  
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
      {
        image && image.length ? image.map((imageItem, index)=> (
        <img 
        key={imageItem.id}
        alt={imageItem.download_url}
        src={imageItem.download_url}
        className={
          currentSlide === index ? "current-image" : "current-image hide-current-image"
        }
        />
        )) : null
      }
      <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
      <span className='circle-indicator'>
        {
          image && image.length ? image.map((_, index)=> (
          <button 
          key={index}
          className={
          currentSlide === index ?'current-indicator' : 'current-indicator inactive-indicator'
          }
          onClick={()=> setCurrentSlide(index)}
          ></button>
          )) : null
        }
      </span>
    </div>
    )
}