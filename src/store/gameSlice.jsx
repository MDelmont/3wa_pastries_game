import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pastriesWon: {},
  remainingAttempts: 3,
};

/**
 * Patisserie gagnées
 */
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

/**
 * reset game pastries
 */
export const resetGame = createAsyncThunk("reset/pastrie", async () => {
  try {
    const response = await axios.get(`http://localhost:3001/game/reset`);
    if (response.data.succes) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
});

/**
 * création du slice game
 */
const gameSlice = createSlice({
  name: "pastriesWon",
  initialState,
  reducers: {
    updateRemainingAttempts: (state, actions) => {
      state.remainingAttempts = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(requestPastriesWon.fulfilled, (state, action) => {
      state.pastriesWon = action.payload;
    });
    builder.addCase(resetGame.fulfilled, (state, actions) => {
      if (actions.payload) {
        state.pastriesWon = {};
      }
    });
  },
});

export const { updateRemainingAttempts } = gameSlice.actions;

export default gameSlice.reducer;
