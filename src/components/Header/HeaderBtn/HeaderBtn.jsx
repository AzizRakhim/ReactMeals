import React from 'react';
import "./HeaderBtn.css";


function HeaderBtn(props) {
  return (
    <div className='header__btn-box' style={{
      animation : props.animate ? "buttonIncrease 0.2s linear" : null
    }}>
      <button className='header__btn' onClick={props.modalHandler}>
        <i class='bx bxs-cart-alt'></i>
        <span className="header__cart">
          your cart
        </span>
        <span className="header__num">
          {props.cartNum}
        </span>
      </button>
    </div>
  )
}

export default HeaderBtn
