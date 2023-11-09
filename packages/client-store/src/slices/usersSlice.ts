import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoadStates } from '@shared/types';

interface User {
  name: string;
  email: string;
  image?: string;
}

interface InitialState {
  users: User[];
  status: LoadStates;
}

const initialState: InitialState = {
  users: [],
  status: LoadStates.NOT_LOADED,
};

const integrationSlice = createSlice({
  name: 'integration',
  initialState,
  reducers: {
    createUser: (state, _action: PayloadAction<User>) => {
      state.status = LoadStates.LOADING;
    },
  },
});

export const { createUser } = integrationSlice.actions;

export default integrationSlice.reducer;
