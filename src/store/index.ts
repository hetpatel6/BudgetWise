import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './budgetSlice';
import transactionReducer from './transactionSlice';

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    transaction: transactionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;