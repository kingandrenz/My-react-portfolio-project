import { useState } from 'react';
import Modal from './modal';
import './style.css';

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  
  function handleToggleModalPopup(){
    setShowModalPopup(!showModalPopup);
  }
  
  function onClose(){
    setShowModalPopup(false);
  }
  
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open modal popup</button>
      
      {
        showModalPopup && <Modal id={"custom-id"} header={<h1>customize header</h1>} body={<div>customize body</div>} footer={<h2>customize footer </h2>} onClose={onClose} />
      }
      
    </div>)
  
}