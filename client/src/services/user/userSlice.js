import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  userName: "",
  room: ""
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, {payload: {socket, userName}}) => {
      socket?.emit("user-change-name", { userName, id: state.id });
      state.userName = userName;
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
