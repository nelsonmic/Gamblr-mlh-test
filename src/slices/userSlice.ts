import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from 'types/structs';

interface UserState{
  user: User | null
}
const initialState: UserState= {
  user: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if(state.user){
        state.user = {...state.user, ...action.payload}
      }
    },
    clearUser: (state) => {
      state.user = null
    }
  }
});

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;