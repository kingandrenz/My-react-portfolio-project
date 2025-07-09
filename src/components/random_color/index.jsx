import React, { useState, useEffect } from 'react';


export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');
  
  function randomUtility(length){
    return Math.floor(Math.random() * length);
  }
  
  function handleRandomHexColor(){
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomUtility(hex.length)];
    }
    setColor(hexColor);
  }
  
  
 function handleRandomRgbColor(){
    let r = randomUtility(255);
    let g = randomUtility(255);
    let b = randomUtility(255);
    setColor(`rgb(${r},${g},${b})`);
  }
  
  useEffect(()=> {
    if (typeOfColor === "hex") {
      handleRandomHexColor();
    } else {
      handleRandomRgbColor();
    }
  }, [typeOfColor]);
  
  return (
    <div style={{ width: '100vw',
    height: '100vh',
    background: color,
    }}>
      <button onClick={()=> setTypeOfColor('hex')}>Create HEX color</button>
      <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
      <button onClick={typeOfColor === "hex" ? handleRandomHexColor : handleRandomRgbColor}>Generate random color</button>
      
      <div style={{display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      marginTop: "40px",
      fontSize: "60px",
      flexDirection: 'column',
      gap: "20px",
      }}>
        <h3>
          {
            typeOfColor === "rgb" ? "RGB color" : "HEX color"
          }
        </h3>
        <h1>{color}</h1>
      </div>
    </div>
    );
}