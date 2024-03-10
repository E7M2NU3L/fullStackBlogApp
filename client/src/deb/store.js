import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

// createa a store
const store = configureStore({
    reducer: {
        auth: authSlice,
    }    
});

// exporting
export default store;