import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Radek",
  room: ""
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
});

export const { setUserName, setRoom } = slice.actions;

export default slice.reducer;
