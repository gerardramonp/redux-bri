// PASO 1: Crear el store (estado global)

import { configureStore } from "@reduxjs/toolkit";

// PASO 4: Importamos el reducer del slice que hemos creado
import counterSliceReducer from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    // PASO 5: Añadimos el reducer del slice al store global (recomendado que coincida con el name del slice)
    counterSlice: counterSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
