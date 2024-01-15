import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import pastriesSlice from "./pastriesSlices";
import gameSlice from "./gameSlice";

const store = configureStore({
  reducer: {
    pastriesSliceReducer: pastriesSlice,
    gameSliceReducer: gameSlice,
  },
});

export const GetProviderStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
