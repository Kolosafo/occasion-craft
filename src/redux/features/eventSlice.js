// user authentication redux slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    loadEvents: (state, action) => {
      state.events = action.payload;
    },
    removeEvents: (state) => {
      state.events = [];
    },
    addEvent: (state, action) => {
      state.events = [...state.events, action.payload];
    },
  },
});

// You can use the logout action below to simply log the user out
export const { loadEvents, removeEvents, addEvent } = eventSlice.actions;
export default eventSlice.reducer;
