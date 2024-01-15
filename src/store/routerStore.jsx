import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import pastriesSlice from "./pastriesSlices";


const store = configureStore({
  reducer: {
    pastriesSlicereducer : pastriesSlice
  
  },
});

export const GetProviderStore = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
