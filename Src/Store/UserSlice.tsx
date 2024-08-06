import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateUser} = userSlice.actions;

export default userSlice.reducer;
