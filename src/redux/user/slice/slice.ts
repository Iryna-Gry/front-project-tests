import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  signUpUser,
  logInUser,
  fetchUser,
  logOutUser,
} from '../operations/operations';
import { UserResponse } from 'src/types/types';
import type { RootState } from 'src/redux/store'

export type UserSliceState = {
  user: {
    firstName: string
    lastName: string
    email: string
  },
  error: {message: string},
  token: string | null,
  isLoggedIn: boolean,
  isRefreshing: boolean,
}
const initialState:UserSliceState = {
  user: {
    firstName: '',
    lastName: '',
    email: '',
  },
  error: {message: ''},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.fulfilled.toString()](state:UserSliceState, action: PayloadAction<UserResponse>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled.toString()](state:UserSliceState, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled.toString()](state:UserSliceState) {
      state.user = { firstName: '', lastName: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchUser.pending.toString()](state:UserSliceState) {
      state.isRefreshing = true;
    },
    [fetchUser.fulfilled.toString()](state:UserSliceState, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchUser.rejected.toString()](state) {
      state.isRefreshing = false;
    },
  },
});

export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUser = (state: RootState) => state.user;
export const selectIsRefreshing = (state: RootState) => state.user.isRefreshing;
