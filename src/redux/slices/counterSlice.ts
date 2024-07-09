// PASO 3 - Crear un slice (podemos crear tantos como necesitemos)

import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  counter: number;
  name: string;
};

const initialState: CounterState = {
  counter: 0,
  name: "brisa",
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    incrementByAmount: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    changeName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// PASO 3.1: Exportar las acciones del slice
export const { increment, changeName, incrementByAmount } =
  counterSlice.actions;

// PASO 3.2: Exportar el reducer del slice
export default counterSlice.reducer;
