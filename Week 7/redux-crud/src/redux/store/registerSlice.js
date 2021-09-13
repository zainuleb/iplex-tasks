import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const registerAdapter = createEntityAdapter();
export const registerSelectors = registerAdapter.getSelectors(
  (state) => state.register
);

const registerSlice = createSlice({
  name: 'register',
  initialState: registerAdapter.getInitialState(),
  reducers: { registerAdd: registerAdapter.addOne },
});

export const { registerAdd } = registerSlice.actions;

export default registerSlice.reducer;
