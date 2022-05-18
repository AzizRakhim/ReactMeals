import React from 'react';
import "../Modal.css";

function ModalItem(props) {
  return (
    <li className="modal-item d-flex justify-content-between align-items-center">
      <div className="modal-desc">
        <h3 className="modal-title">
          {props.data.name}
        </h3>
        <div className="modal-price-box d-flex align-items-center justify-content-between">
          <span className="modal-price">
            ${props.data.price}
          </span>
          <span className="modal-count">
            x {props.total}
          </span>
        </div>
      </div>
      <div className="modal-btns d-flex">
        <button className="modal-calculate-btn modal-plus" onClick={props.removeHandler}>
          -
        </button>
        <button className="modal-calculate-btn modal-minus" onClick={props.addHandler}>
          +
        </button>
      </div>
    </li>
  )
}

export default ModalItem
