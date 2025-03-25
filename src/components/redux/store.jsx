import { configureStore } from "@reduxjs/toolkit";
import CategoryMenuSlice from "./slice/CategoryMenuSlice";

export const Store = configureStore({
  reducer: {
    menu: CategoryMenuSlice,
  },
});
export default Store;
