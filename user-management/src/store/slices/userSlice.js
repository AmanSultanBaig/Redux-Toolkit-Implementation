import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser() {},
    removeUser() {},
  },
});

export default userSlice;
