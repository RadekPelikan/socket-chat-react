import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "../services/socket/socketSlice";
import userReducer from "../services/user/userSlice";
import roomsReducer from "../services/rooms/roomsSlice"

export const store = configureStore({
  reducer: {
    socket: socketReducer,
    user: userReducer,
    rooms: roomsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
