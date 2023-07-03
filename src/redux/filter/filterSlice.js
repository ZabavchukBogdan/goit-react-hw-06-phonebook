import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;