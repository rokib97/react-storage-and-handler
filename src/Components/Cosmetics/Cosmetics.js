import React, { useEffect, useState } from "react";
import { totalPrice } from "../../Utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setcosmetics] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setcosmetics(data));
  }, []);

  const total = totalPrice(cosmetics);
  return (
    <div>
      <h1>Welcome to my cosmetics store</h1>
      <p>Total Price: {total}</p>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic._id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
