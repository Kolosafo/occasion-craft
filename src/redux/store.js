// BASE REDUX
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import { useSelector } from "react-redux";
import eventSlice from "./features/eventSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    event: eventSlice,
  },
});

export const useAppSelector = useSelector;
