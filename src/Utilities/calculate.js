const add = (first, second) => {
  return first + second;
};
const sub = (first, second) => {
  return first - second;
};
const multiply = (first, second) => {
  return first * second;
};
export const div = (first, second) => {
  return first * second;
};

const getTotalPrice = (products) => {
  const total = products.reduce((pre, curr) => pre + curr.price, 0);
  return total;
};

export default sub;
export { add, multiply, getTotalPrice as totalPrice };
