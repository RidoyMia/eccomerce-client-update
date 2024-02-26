"use client"
import { configureStore } from '@reduxjs/toolkit'
import { UserApi } from '../Api/UserApi'
const UserStore = configureStore({
  reducer: {
    [UserApi.reducerPath] : UserApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
})

export default UserStore;