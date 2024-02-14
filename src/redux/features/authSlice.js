// user authentication redux slice

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: {
    id: "",
    name: "",
    email: "",
    profilePic: "",
  },
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log("AM I ADDING??", action.payload);
      state.isLogged = true;
      state.user = action.payload;
    },
  },
});

// You can use the logout action below to simply log the user out
export const { userLogin } = authSlice.actions;
export default authSlice.reducer;
