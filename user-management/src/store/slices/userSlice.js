import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    createNewUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    editUserInfo(state, action) {
      state.splice(action.payload.index, 1, action.payload.data);
    },
  },
});

export const { createNewUser, removeUser, editUserInfo } = userSlice.actions;
export default userSlice;
