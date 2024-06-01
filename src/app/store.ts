import { configureStore } from '@reduxjs/toolkit';
import CustomerDataReducers from '../slices/CustomerDataSlice';

// Store definition
export const store = configureStore({
    reducer: {
        customerData: CustomerDataReducers
    }
});

// This is going to be the state of the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
