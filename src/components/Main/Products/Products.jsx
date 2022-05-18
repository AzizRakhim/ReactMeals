import React from 'react';
import "./Products.css";
import ProductsItem from './ProductsItem/ProductsItem';

let productsArr = [
  {
    name : "Sushi",
    desc : "Finest fish and veggies",
    price : 22.99,
    type : "sushi"
  },
  {
    name : "Schnitzel",
    desc : "A german specialty!",
    price : 16.50,
    type : "schnitzel"
  },
  {
    name : "Barbecue Burger",
    desc : "American, raw, meaty",
    price : 12.99,
    type : "burger"
  },
  {
    name : "Green Bowl",
    desc : "Healthy...and green...",
    price : 18.99,
    type : "bowl"
  }
];

function Products(props) {
  return (
    <section className="products">
      <ul className="products__list">
        {productsArr.map((item, index) => (
          <ProductsItem 
            key={index} 
            data={item}
            addHandler={() => props.addHandler(item.type)}
            submitHandler={props.submitHandler}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products;
export {productsArr};
