import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { UserData } from '../../utils/interface';
import { server } from '../../utils/server';

export interface UserState {
  userData: UserData | null;
  isAuthenticated: boolean;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  userData: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

export const fetchUserData = createAsyncThunk('user/fetchData', async () => {
  try {
    const response = await axios.get(`${server}/user/info`, { withCredentials: true, });
    return response.data;
  } catch (error: any) {
    throw error.response.data.message;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.userData = action.payload.result;
      state.error = null;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.userData = null;
      state.error = action.error.message || 'Failed to fetch data';
    });
  },
});

export default userSlice.reducer;
