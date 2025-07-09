import React, { useState } from 'react';
import Data from './Data';
import './style.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMtSelection, setEnableMtSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
  
  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const findIdIndex = cpyMultiple.indexOf(id);
    
    if (findIdIndex === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(findIdIndex, 1);
    }
    setMultiple(cpyMultiple);
  }

  function handleSingleSelection(id) {
    setSelected(selected === id ? null :
    id);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMtSelection(!enableMtSelection)}>
        Enable multi selection
      </button>

      <div className="accordion">
        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                enableMtSelection ?
                ()=> handleMultiSelection(dataItem.id) :
                () => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              
              {
                enableMtSelection ? multiple.indexOf(dataItem.id) !== -1 && (<div className="content">
                  <p>{dataItem.answer}</p>
                </div>) : selected === dataItem.id && (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
                )
              
                
              }

              {/*selected === dataItem.id && (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
              )*/}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
