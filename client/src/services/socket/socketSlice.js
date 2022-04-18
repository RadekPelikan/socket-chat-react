import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null
}

export const slice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socket = action.payload;
    },
  },
});

export const { setSocket } = slice.actions;

export default slice.reducer;
