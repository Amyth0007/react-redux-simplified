import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const customSlice = createSlice({
  initialState,
  name: 'kahipn name',
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload ;
      console.log("logout called");
    },
    decrement: (state) => {
        state.count = state.count -1;
        console.log("logout called");
    },
  },
});

export const { increment, decrement } = customSlice.actions;
export default customSlice.reducer;
