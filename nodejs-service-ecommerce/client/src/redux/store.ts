import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/userSlice';
import sellerReducer from './auth/sellerSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
