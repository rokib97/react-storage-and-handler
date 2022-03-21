import React from "react";
import { addToDb, removeFromDb } from "../../Utilities/fakeDb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, _id } = props.cosmetic;

  const addToCart = (_id) => {
    addToDb(_id);
  };
  const removeFromCart = (_id) => {
    removeFromDb(_id);
  };
  // for wrapper calling with parameter id
  /* const addToCartWithParam = () => {
    addToCart(_id);
  }; */
  return (
    <div className="product">
      <h2>Buy this: {name}</h2>
      <p>Only For : ${price}</p>
      <p>ID : {_id}</p>
      {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
      {/* shortcut to call event handler with parameter  */}
      <button onClick={() => addToCart(_id)}>Add to Cart</button>
      <button onClick={() => removeFromCart(_id)}>Remove From Cart</button>
    </div>
  );
};

export default Cosmetic;
