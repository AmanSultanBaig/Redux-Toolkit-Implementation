import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
  },
});

export default userSlice;
