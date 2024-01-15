import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  pastries: {},
};

export const requestPastries = createAsyncThunk("get/pastries", async () => {
  const response = await axios("http://localhost:3001/game/pastries");
  const pastries = response.data;
  return pastries;
});

const pastriesSlice = createSlice({
    name: "pastries",
    initialState,
    reducers: {
      addPastriesScore: (state, action) => {
        //
      },
    },
    extraReducers: (builder) => {
      builder.addCase(requestPastries.pending, (state, action) => {
          //
        });
      builder.addCase(requestPastries.fulfilled, (state, action) => {
        state.pastries = action.payload;
      });
    },
  });

  export const {
    addPastriesScore,
  } = pastriesSlice.actions;

  export default pastriesSlice.reducer;