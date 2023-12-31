import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    duration: null,
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.duration = action.payload.duration
      state.total += action.payload.price * action.payload.quantity;
    },
    removeCart: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item.targetId === action.payload.id),
        1
      );
      state.total -= action.payload.price * action.payload.quantity;
      state.quantity -= 1;
    },
    updateCart: (state, action) => {
      state.products[
        state.products.findIndex((item) => item.targetId === action.payload.targetId)
      ] = action.payload;
      state.total += action.payload.price * action.payload.tempQuantity;
    },
    emptyCart: (state) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    }
  },
});

export const { addProduct, emptyCart, removeCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
