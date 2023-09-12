import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import type { UserLogInRequest, UserResponse, UserSignUpRequest } from '../../../types/types'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

type PersistState = {
  token: string
}
type Response = {
  user: UserResponse
  token: string
}
type Token = {
  set: (token: string|null) => void
   unset:()=>void
}
const token:Token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (user:UserSignUpRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/register', user);
      console.log(response);
      return response.data as Response
    } catch (error) {
      return console.log(rejectWithValue('Ooops'));
    }
  }
);

export const logInUser = createAsyncThunk(
  'user/logInUser',
  async (user:UserLogInRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/login`, user);
      token.set(response.data.token);
      return response.data as Response;
    } catch (error) {
      return console.log(rejectWithValue('Ooops'));
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState() as PersistState;
   const persistedToken = state.token
   

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
    try {
      token.set(persistedToken);
      const response = await axios.get(`/users/current`);
      return response.data as Response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/users/logout`);
      token.unset();
      return response.data as Response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ira.gricnko@gmail.com
