//&There is basically a library called as uuid which helps us to generate the unique id's.

//~crypto.randomUUID() === this can also be used to generate the unique id.

//&Now I will basically import this data into my App.jsx
export default [
  {
    id: crypto.randomUUID(),
    title: "Milk",
    category: "Grocery",
    amount: 40,
  },

  {
    id: crypto.randomUUID(),
    title: "Shirt",
    category: "Clothes",
    amount: 600,
  },

  {
    id: crypto.randomUUID(),
    title: "Vegetables",
    category: "Grocery",
    amount: 100,
  },

  {
    id: crypto.randomUUID(),
    title: "Electricity Bill",
    category: "Bills",
    amount: 40,
  },
];
