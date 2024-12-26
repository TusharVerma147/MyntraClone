import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface BagItem {
  id: string;
  quantity: number;
  product: any; 
}

interface BagState {
  items: BagItem[];
}

const initialState: BagState = {
  items: [],
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    addToBag(state, action: PayloadAction<any>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id: action.payload.id, quantity: 1, product: action.payload });
      }
    },
    removeFromBag(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },


    updateQuantity(state, action: PayloadAction<{ id: string; quantity: number }>) {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
 
  },
});

export const { addToBag, removeFromBag, increaseQuantity, decreaseQuantity, updateQuantity, clearCart } = bagSlice.actions;
export const bagReducer = bagSlice.reducer;



