import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type loadStatusType = {
  loadStatus: number, //0:未開始、1:完了、2:DL中
  startTime: number,
  endTime: number,
  dlTime: number
}

const loadStatusInit:loadStatusType = {
  loadStatus: 0,
  startTime: 0,
  endTime: 0,
  dlTime: 0
}

export const loadStatusSlice = createSlice({
  name: 'loadStatus',
  initialState: loadStatusInit,
  reducers: {
    setStart: (state) => {
      state.loadStatus = 2;
      state.startTime = performance.now();
    },
    setEnd: (state) => {
      state.loadStatus = 1;
      state.endTime = performance.now();
      state.dlTime = state.endTime - state.startTime;
    },
  },
});

export const getloadStatus = (state: RootState) => state.loadStatus;
export const { setStart, setEnd } = loadStatusSlice.actions;
export default loadStatusSlice.reducer;
