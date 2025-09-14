import { createSlice } from "@reduxjs/toolkit";
import { setUsersToLocal } from "../local/local";





export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: []
  },

  reducers: {


    setUser: (state, action) => {
      state.users.push(action.payload);
      setUsersToLocal(state.users);

    }







  }


});


export const { setUser } = userSlice.actions;









