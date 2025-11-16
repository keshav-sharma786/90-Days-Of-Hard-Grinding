import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Vanialla(older) Redux => DON'T MUTATE STATE, returning was mandatory.
    // const newState = [...state];
    // newState.items.push(action.payLoad);
    // return newState;

    // Redux Toolkit
    // We HAVE to mutate the state
    // mutating the state
    // returning is not mandatory
    // Redux Toolkit uses immer behind the scenes
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; // state = []
    },
  },
});

// console.log(cartSlice);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
