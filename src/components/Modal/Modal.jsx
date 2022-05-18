import React from 'react';
import "./Modal.css";
import { productsArr } from '../Main/Products/Products';
import ModalItem from './ModalItem/ModalItem';

function Modal(props) {
  return (
    <div className="modal-box">
      {props.modal ? <div className="modal-shadow" onClick={props.modalCloseHandler}></div> : null}
      <div className="modal-info" style={{
        display : props.modal ? "block" : "none"
      }}>
        <ul className="modal-list">
          {productsArr.map((item, index) => {
            if(props.data[item.type] > 0){
              return <ModalItem 
                key={"a"+index} 
                data={item} 
                total={props.data[item.type]}
                addHandler={() => props.addHandler(item.type)}
                removeHandler={() => props.removeHandler(item.type)}
              />
            }
          })}
        </ul>
        <div className="modal-total-box d-flex justify-content-between align-items-center">
          <p className="modal-amount">
            Total Amount
          </p>
          <span className="modal-total">
            ${
              Math.abs(props.totalPrice.toFixed(2))
            }
          </span>
        </div>
        <div className="modal-closeBtns">
          <button className="modal-end-btns close-btn" onClick={props.purchaseCancel}>
            Close
          </button>
          <button className="modal-end-btns order-btn">
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
