import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { name, query, image } = action.payload;
      const newData = { name, query, image };
      state.push(newData); // Push the new form data to the state array
    },
    clearFormData: (state) => {
      // Clear the form data when needed
      state.splice(0, state.length);
    }
  }
});

export const { setFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;
