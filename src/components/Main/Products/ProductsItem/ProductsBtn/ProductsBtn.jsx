import React from 'react';
import "./ProductsBtn.css";

function ProductsBtn(props) {
  return (
    <div className='products__add-box'>
      <form className='products__form' onSubmit={props.submitHandler}>
        <div className='products__input-box'>
          <label htmlFor="products__label" className='products__label'>
            Amount
          </label>
          <input id='products__label' type="number" className='products__input' value={1} min={1} />
        </div>
        <button className='products__btn' onClick={props.addHandler}>
          + Add
        </button>
      </form>
    </div>
  )
}

export default ProductsBtn
