import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getGreetingsURL = 'http://localhost:3000/api/v1/greets';

const initialState = {
  loading: false,
  greets: [],
  error: '',
};

export const fetchGreets = createAsyncThunk('greet/fetchGreets', async () => {
  const { data } = await (axios.get(getGreetingsURL));
  return data;
});

/* eslint-disable no-param-reassign */

const greetSlice = createSlice({
  name: 'greet',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreets.pending, (state) => {
      state.loading = true;
    })
      .addCase(fetchGreets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.greets = action.payload;
      })
      .addCase(fetchGreets.rejected, (state) => {
        state.loading = false;
        state.error = '';
      });
  },
});

/* eslint-disable no-param-reassign */

export default greetSlice.reducer;

// export const { bookRocket, unreserveRocket } = rocketSlice.actions;
