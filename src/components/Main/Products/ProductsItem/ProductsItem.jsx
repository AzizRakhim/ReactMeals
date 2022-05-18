import React from 'react';
import ProductsBtn from './ProductsBtn/ProductsBtn';
import "./ProductsItem.css";

function ProductsItem(props) {
  return (
    <li className='products__item d-flex justify-content-between'>
      <div className='products__info'>
        <h3 className='products__title'>
          {props.data.name}
        </h3>
        <p className="products__text">
          {props.data.desc}
        </p>
        <span className="products__price">
          ${props.data.price}
        </span>
      </div>
      <ProductsBtn 
        addHandler={props.addHandler} 
        submitHandler={props.submitHandler}
      />
    </li>
  )
}

export default ProductsItem
