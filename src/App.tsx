import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";

// PASO 7: Importar las acciones del slice que necesitemos
import {
  changeName,
  increment,
  incrementByAmount,
} from "./redux/slices/counterSlice";

function App() {
  // PASO 9: Importar useDispatch y obtener la funcion dispatch de el
  const dispatch = useDispatch();

  // PASO 6: Obtener los datos del state
  const { name, counter } = useSelector(
    (state: RootState) => state.counterSlice
  );

  console.log(name);
  return (
    <>
      name: {name} counter: {counter}
      <button
        onClick={() => {
          // PASO 10: Dispatchar las acciones necesarias
          dispatch(increment());
        }}
      >
        Increment by 1
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          dispatch(changeName("gerard"));
        }}
      >
        change name to gerard
      </button>
    </>
  );
}

export default App;
