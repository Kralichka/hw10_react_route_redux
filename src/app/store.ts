import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {}
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {}
export type AppDispatch = typeof store.dispatch

