import React, { Component } from "react";
import './App.css';
import Header from "./components/Header/Header";
import backgroundImg from "./assets/images/meals.jpg";
import Info from "./components/Main/Info/Info";
import Products from "./components/Main/Products/Products";
import Modal from "./components/Modal/Modal";

let PRODUCTS_PRICE = {
  sushi : 22.99,
  schnitzel : 16.50,
  burger : 12.99,
  bowl : 18.99
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      products : {
        sushi : 0,
        schnitzel : 0,
        burger : 0,
        bowl : 0
      },
      total : 0,
      modal : false,
      totalPrice : 0
    }
  }

  updateNumState = (products) => {
    let sum = Object.keys(products).map((item, index) => {
      return products[item];
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({
      total : sum
    })
  }

  addHandler = (type) => {
    let oldCount = this.state.products[type];
    let updateCount = oldCount + 1;
    let updateProducts = {...this.state.products}
    updateProducts[type] = updateCount;

    const priceAddition = PRODUCTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      products : updateProducts,
      totalPrice : newPrice
    });
    this.updateNumState(updateProducts);
  }

  removeHandler = (type) => {
    let oldCount = this.state.products[type];
    let updateCount = oldCount - 1;
    let updateProducts = {...this.state.products}
    updateProducts[type] = updateCount;

    const priceAddition = PRODUCTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;

    this.setState({
      products : updateProducts,
      totalPrice : newPrice
    });
    this.updateNumState(updateProducts);
  }

  submitHandler = (e) => {
    e.preventDefault();
  }

  modalHandler = () => {
    this.setState({
      modal : true
    });
  }

  modalCloseHandler = () => {
    this.setState({
      modal : false
    })
  }

  purchaseCancel = () => {
    this.setState({
      modal : false
    })
  }

  render() {
    return (
      <>
        <Header 
          cartNum={this.state.total}
          modalHandler={this.modalHandler}
        />
        <div className="background-img">
          <img className="background-real-img" src={backgroundImg} alt="meals" />
        </div>
        <main className="site-main">
          <Info />
          <Products 
            addHandler={this.addHandler}
            submitHandler={this.submitHandler}
          />
        </main>
        <Modal
          addHandler={this.addHandler}
          removeHandler={this.removeHandler}
          purchaseCancel={this.purchaseCancel}
          data={this.state.products}
          modal={this.state.modal}
          totalPrice={this.state.totalPrice}
          modalCloseHandler={this.modalCloseHandler}
        />
      </>
    );
  }
}

export default App;
