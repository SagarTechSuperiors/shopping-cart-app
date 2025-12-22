import { createSlice } from "@reduxjs/toolkit";

const storedUser =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
  isAuthenticated: false,
  user: storedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const userData = {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      state.user = {
        username: userData.username,
        email: userData.email,
      };
    },

    login: (state, action) => {
      const storedUser = JSON.parse(
        localStorage.getItem("user")
      );

      if (
        storedUser &&
        storedUser.email === action.payload.email &&
        storedUser.password === action.payload.password
      ) {
        state.isAuthenticated = true;
        state.user = {
          username: storedUser.username,
          email: storedUser.email,
        };
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
