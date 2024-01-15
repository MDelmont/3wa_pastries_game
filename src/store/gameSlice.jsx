import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pastriesWon: {},
};

export const requestPastriesWon = createAsyncThunk(
  "get/pastriesWon",
  async (id) => {
    try {
      const response = await axios(
        `http://localhost:3001/game/win-pastries/${id}`
      );
      const pastries = response.data;
      return pastries;
    } catch (error) {
      console.log("error");
    }
  }
);

const gameSlice = createSlice({
  name: "pastriesWon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestPastriesWon.pending, (state, action) => {
      //
    });
    builder.addCase(requestPastriesWon.fulfilled, (state, action) => {
      state.pastriesWon = action.payload;
    });
  },
});

// export const { addPastriesScore } = pastriesSlice.actions;

export default gameSlice.reducer;
