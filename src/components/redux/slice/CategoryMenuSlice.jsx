import {createSlice} from "@reduxjs/toolkit"

const CategoryMenuSlice = createSlice({
    name: "menu",
    initialState: {
      value: "All",
    },
    reducers: {
      setCategory: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  export const { setCategory } = CategoryMenuSlice.actions;
  export default CategoryMenuSlice.reducer;