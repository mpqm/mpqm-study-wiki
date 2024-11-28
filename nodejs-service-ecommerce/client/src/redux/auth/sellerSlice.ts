import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SellerData, UserData } from '../../utils/interface';
import { server } from '../../utils/server';

export interface SellerState {
    sellerData: SellerData | null;
    isAuthenticated: boolean;
    error: string | null;
    loading: boolean;
  }
  
  const initialState: SellerState = {
    sellerData: null,
    error: null,
    loading: false,
    isAuthenticated: false,
  };
  
  export const fetchSellerData = createAsyncThunk('seller/fetchData', async () => {
    try {
      const response = await axios.get(`${server}/seller/info`, { withCredentials: true, });
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  });
  
  const sellerSlice = createSlice({
    name: 'seller',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchSellerData.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchSellerData.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.sellerData = action.payload.result;
        state.error = null;
      });
      builder.addCase(fetchSellerData.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.sellerData = null;
        state.error = action.error.message || 'Failed to fetch data';
      });
    },
  });
  
  export default sellerSlice.reducer;
  