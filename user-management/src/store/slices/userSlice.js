import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: [],
  reducers: {
    createNewUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
  },
});

export const { createNewUser } = userSlice.actions;
export default userSlice;
