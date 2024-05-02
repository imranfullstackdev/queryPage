// store.js
import { configureStore } from '@reduxjs/toolkit';
import formSlice from './formSlice'; // Import the formSlice directly

const store = configureStore({
  reducer: {
    form: formSlice
  }
});

export default store;
