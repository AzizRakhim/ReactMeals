import React from 'react';
import "./Header.css";
import Container from '../../containers/Container'
import HeaderBtn from './HeaderBtn/HeaderBtn'

function Header(props) {
  return (
    <header className='header site-header'>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='header__logo-box'>
            <a className='header__link' href="/">
              ReactMeals
            </a>
          </div>
          <HeaderBtn 
            cartNum={props.cartNum} 
            modalHandler={props.modalHandler}
          />
        </div>
      </Container>
    </header>
  )
}

export default Header
