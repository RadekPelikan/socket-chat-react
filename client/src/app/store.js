import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../services/user/userSlice";
import roomsReducer from "../services/rooms/roomsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
