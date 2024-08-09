import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
  onBoardingState: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.userDetails = action.payload;
    },
    updateOnBoardingState: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateUser, updateOnBoardingState} = userSlice.actions;

export default userSlice.reducer;
