'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = { posts: [] };

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<Post[]>) {
      state.posts = action.payload;
    },
    removeAllPosts(state) {
      state.posts = [];
    },
  },
});

export const postsReducer = postsSlice.reducer;
