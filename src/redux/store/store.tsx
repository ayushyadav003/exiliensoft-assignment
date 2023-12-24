import { configureStore } from '@reduxjs/toolkit'
import profileSlice from '../features/profileSlice'

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>

// Export the store
export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
})

export type AppDispatch = typeof store.dispatch
