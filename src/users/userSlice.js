import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUsersToLocal } from "../local/local";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },

  reducers: {


    setUser: (state, action) => {
      state.users.push(action.payload);
      setUsersToLocal(state.users);

    },

    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setUsersToLocal(state.users);
    }


  }


});


export const { setUser, removeUser } = userSlice.actions;









