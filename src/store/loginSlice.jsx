import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  auth: true,
};

export const loginWebSite = createAsyncThunk(
  "login/loginWebSite",
  async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log("error");
    }
  }
);

export const logoutWebSite = createAsyncThunk(
  "login/logoutWebSite",
  async () => {
    const response = await axios("http://localhost:3001/logout");

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
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginWebSite.pending, (state, action) => {
      //
    });
    builder.addCase(loginWebSite.fulfilled, (state, action) => {
      state.auth = true;
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
