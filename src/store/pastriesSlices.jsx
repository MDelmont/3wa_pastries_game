import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pastries: {},
  needUpdate: false,
};

/**
 * requetes les patisseries
 */
export const requestPastries = createAsyncThunk("get/pastries", async () => {
  const response = await axios("http://localhost:3001/game/pastries");
  const pastries = response.data;
  return pastries;
});

/**
 * modification des patisseries
 */
export const addPastryQuantity = createAsyncThunk(
  "put/pastrie",
  async (putData) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/pastrie/${putData.id}`,
        { quantity: putData.newPastryQuantity },
        { withCredentials: true }
      );
      if (response.status == 200) {
        return {
          pastrie: response.data,
        };
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

/**
 * ajoute des patisseries
 */
export const addNewPastrie = createAsyncThunk(
  "post/pastrie",
  async (postData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/pastrie/",
        { name: postData.pastryName, quantity: postData.pastryQuantity },
        { withCredentials: true }
      );
      if (response.status == 200) {
        return {
          pastrie: response.data,
          image: postData.selectedImage,
        };
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

/**
 * suppression des patisseries
 */
export const deletePastrie = createAsyncThunk("delete/pastrie", async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/api/pastrie/${id}`,
      { withCredentials: true }
    );
    if (response.status == 200) {
      return {
        response: response.data,
      };
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
});

/**
 * création du Slices
 */
const pastriesSlice = createSlice({
  name: "pastries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestPastries.fulfilled, (state, action) => {
      state.pastries = action.payload;
    });
    builder.addCase(addNewPastrie.fulfilled, (state, action) => {
      if (action.payload !== false) {
        state.needUpdate = !state.needUpdate;
      }
    });
    builder.addCase(addPastryQuantity.fulfilled, (state, action) => {
      if (action.payload !== false) {
        state.needUpdate = !state.needUpdate;
      }
    });
    builder.addCase(deletePastrie.fulfilled, (state, action) => {
      if (action.payload !== false) {
        state.pastries = action.payload.response;
      }
    });
  },
});



export default pastriesSlice.reducer;
