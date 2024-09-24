import { configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import { useReducer } from 'react'

export const store = configureStore({
  reducer: {
    user:useReducer,
  },
});