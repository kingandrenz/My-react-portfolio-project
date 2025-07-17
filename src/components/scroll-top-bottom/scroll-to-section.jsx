import { useRef } from 'react';

export default function ScrollToSection() {
  const ref = useRef(null);

  const data = [
    {
      label: "first card",
      style: {
        width: '100%',
        height: '600px',
        background: 'red',
      },
    },
    {
      label: "second card",
      style: {
        width: '100%',
        height: '600px',
        background: 'pink',
      },
    },
    {
      label: "third card",
      style: {
        width: '100%',
        height: '600px',
        background: 'blue',
      },
    },
    {
      label: "fourth card",
      style: {
        width: '100%',
        height: '600px',
        background: 'green',
      },
    },
    {
      label: "fifth card",
      style: {
        width: '100%',
        height: '600px',
        background: 'orange',
      },
    },
  ];

  function handleScrollToSection() {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click to scroll</button>
      {data.map((item, index) => (
        <div
          key={index}
          ref={index === 3 ? ref : null}
          style={item.style}
        >
          <h1>{item.label}</h1>
        </div>
      ))}
    </div>
  );
}
