import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  email: "",
  password: "",
  auth: false,
};

export const loginWebSite = createAsyncThunk(
  "login/loginWebSite",
  async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

export const logoutWebSite = createAsyncThunk(
  "login/logoutWebSite",
  async () => {
    const response = await axios("http://localhost:3001/login", {
      withCredentials: true,
    });

    return response.status;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      console.log(action);
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      console.log(action.payload);
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWebSite.pending, (state, action) => {
      //
    });
    builder.addCase(loginWebSite.fulfilled, (state, action) => {
      console.log(action);
      if (action.payload) {
        state.auth = true;
      } else {
        state.auth = false;
      }
    });

    builder.addCase(logoutWebSite.pending, (state, action) => {
      //
    });
    builder.addCase(logoutWebSite.fulfilled, (state, action) => {
      console.log(action.payload);
      state.auth = false;
    });
  },
});

export const { updateEmail, updatePassword } = loginSlice.actions;

export default loginSlice.reducer;
