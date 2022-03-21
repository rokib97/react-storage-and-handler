const numbers = [10, 20, 30, 100];
/* const sumReducer = (previousValue, currentValue) =>
  previousValue + currentValue; */
const total = numbers.reduce((pre, curr) => pre + curr, 0);
console.log(total);

const items = [
  {
    _id: "62374be5ff28c746e77ecaff",
    price: 82,
    eyeColor: "green",
    name: "Porter Bray",
  },
  {
    _id: "62374be5b3e87400d3fc52dc",
    price: 375,
    eyeColor: "brown",
    name: "Tracie Mcknight",
  },
  {
    _id: "62374be5f317f7014345cc61",
    price: 117,
    eyeColor: "brown",
    name: "Christi Cook",
  },
  {
    _id: "62374be5226eb5a39dcd732d",
    price: 326,
    eyeColor: "blue",
    name: "Cox Vasquez",
  },
  {
    _id: "62374be560ab437bc3fa3fb8",
    price: 92,
    eyeColor: "brown",
    name: "Millicent Mcdonald",
  },
  {
    _id: "62374be55723701f587020b2",
    price: 326,
    eyeColor: "blue",
    name: "Beach Hoffman",
  },
];

const itemTotal = items.reduce((pre, curr) => pre + curr.price, 0);
console.log(itemTotal);
