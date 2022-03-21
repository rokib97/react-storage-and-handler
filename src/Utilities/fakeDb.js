// use local storage to manage(add) cart data
const addToDb = (_id) => {
  // get the shopping cart
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  //   add quantity
  const quantity = shoppingCart[_id];
  if (quantity) {
    shoppingCart[_id] = quantity + 1;
  } else {
    shoppingCart[_id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

// use local storage to manage(remove) cart data
const removeFromDb = (_id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (_id in shoppingCart) {
      delete shoppingCart[_id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

// remove the whole local storage database
const deleteShoopingCart = () => {
  localStorage.removeItem("shopping-cart");
};
export { addToDb, removeFromDb, deleteShoopingCart };
