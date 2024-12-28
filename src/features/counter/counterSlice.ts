import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Определяем тип части состояния(среза/slice)
interface CounterState {
  value: number
}

// Определение начального состояния, используя тип
const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

// Сгенерированные Создатели Действий/ action creators
export const { increment, decrement } = counterSlice.actions

// Весь остальной код может использовать тип `RootState`
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer