import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../app/hooks'

import { decrement, increment } from '../features/counter/counterSlice'

export function Counter() {
  // Аргумент `state` уже корректно типизирован как `RootState`
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // логика отрисовки...
}