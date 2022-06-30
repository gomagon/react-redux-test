import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loadStatusSlice from './loadStatusSlice';
import inputTextSlice from './inputTextSlice';
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    loadStatus: loadStatusSlice,
    inputText: inputTextSlice,
    users: usersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
