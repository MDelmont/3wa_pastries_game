import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pastries: {},
};

export const requestPastries = createAsyncThunk("get/pastries", async () => {
  const response = await axios("http://localhost:3001/game/pastries");
  const pastries = response.data;
  return pastries;
});

const addPastryQuantity = () => {};

const pastriesSlice = createSlice({
  name: "pastries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestPastries.pending, (state, action) => {
      //
    });
    builder.addCase(requestPastries.fulfilled, (state, action) => {
      state.pastries = action.payload;
    });
    builder.addCase(addNewPastrie.pending, (state, action) => {
      //
    });
    builder.addCase(addNewPastrie.fulfilled, (state, action) => {
      if(action.payload !== false){
        //
      }
    });
  },
});

export const addNewPastrie = createAsyncThunk("post/pastrie", async (postData) => {
  try{
    const response = await axios.post("http://localhost:3001/api/pastrie/", {name : postData.pastryName, quantity : postData.pastryQuantity,}, { withCredentials: true });
    if(response.status == 200){
      return {
        pastrie : response.data,
        image : postData.selectedImage
      }
    }
  }catch (error){
    console.log(error);
    return false;
  }
  
})

export default pastriesSlice.reducer;
