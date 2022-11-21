import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GLOBAL_FEATURE_KEY = 'global';

export interface Entity {
  id: string;
  name: string;
}

const initialState = {
  selectedAccount: { id: '', name: '' },
};

const { actions, reducer } = createSlice({
  name: GLOBAL_FEATURE_KEY,
  initialState,
  reducers: {
    setEntity(state, action: PayloadAction<Entity>) {
      state.selectedAccount = action.payload;
    },
    // ...
  },
});

export const { setEntity } = actions;

export default reducer;
