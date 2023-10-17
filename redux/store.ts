'use client';

import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './slices/postsSlice';

const store = configureStore({
  reducer: {
    postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
