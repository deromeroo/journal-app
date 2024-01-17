import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking', // checking, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.email = payload.email
      state.uid = payload.uid
      state.displayName = payload.displayName
      state.photoURL = payload.photoURL
      state.errorMessage = null
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated'
      state.email = null
      state.uid = null
      state.displayName = null
      state.photoURL = null
      state.errorMessage = payload
    },
    checkingCredentials: (state) => {
      state.status = 'checking'
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions
