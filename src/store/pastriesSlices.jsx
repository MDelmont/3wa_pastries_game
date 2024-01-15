import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastries: {},
};


const pastriesSlice = createSlice({
    name: "pastries",
    initialState,
    reducers: {
      addPastriesScore: (state, action) => {
        //a dev
      },
    },
  });



  export const {
    addPastriesScore,
  } = pastriesSlice.actions;
  export default pastriesSlice.reducer;