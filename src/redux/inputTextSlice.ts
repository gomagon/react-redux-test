import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const inputTextSlice = createSlice({
  name: 'inputText',
  initialState: {
    value: "",
  },
  reducers: {
    setInputText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const getInputText = (state: RootState) => state.inputText.value;
export const { setInputText } = inputTextSlice.actions;
export default inputTextSlice.reducer;
