import { configureStore } from '@reduxjs/toolkit';
import { bagReducer } from '../slice/bagSlice';
import { wishlistReducer } from '../slice/wishListSlice';


const store = configureStore({
  reducer: {
    bag: bagReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
