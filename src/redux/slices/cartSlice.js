import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],          
  totalItems: 0,
  totalPrice: 0,     
};

const calculateTotals = (state) => {
  let itemsCount = 0;
  let priceTotal = 0;

  state.items.forEach((item) => {
    itemsCount += item.quantity;
    priceTotal += item.quantity * item.price;
  });

  state.totalItems = itemsCount;
  state.totalPrice = priceTotal; 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
        });
      }

      calculateTotals(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
      calculateTotals(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      calculateTotals(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      calculateTotals(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
