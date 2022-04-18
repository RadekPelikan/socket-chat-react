import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  userName: "",
  fullid: "",
  room: ""
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, {payload}) => {
      state.userName = payload;
      state.fullid = `${payload}#${state.id}`
    },
    setRoom: (state, {payload: {socket, room}}) => {
      state.room = room;
    },
    setID: (state, {payload: {socket, id}}) => {
      state.id = id;
    },
  },
});

export const { setUserName, setRoom, setID } = slice.actions;

export default slice.reducer;
