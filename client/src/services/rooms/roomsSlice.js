import { createSlice } from "@reduxjs/toolkit";
import { generateID } from "../generateID";

const initialState = { rooms: [] };

export const slice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    addRoom: (state, action) => {
      const room = {
        id: generateID(state.rooms),
        name: action.payload?.name || "",
        desc: action.payload?.desc || "",
        users: [],
      };
      state.rooms.push(room);
    },
    removeRoom: (state, action) => {
      action.payload = action.payload ?? state.rooms.length - 1;
      state.rooms.splice(action.payload, 1);
    },
    addUser: (state, action) => {
      const { id, userName } = action.payload;
      state.rooms.filter((item) => item.id === id)[0].users.push(userName);
    },
    removeUser: (state, action) => {
      const { id, userName } = action.payload;
      const roomIndex = state.rooms.findIndex((item) => item.id == id);
      const users = state.rooms[roomIndex].users;
      users.splice(users.indexOf(userName), 1);
    },
  },
});

export const { addRoom, removeRoom, addUser, removeUser } = slice.actions;

export default slice.reducer;
