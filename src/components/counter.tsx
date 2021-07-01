import { useSelector, useDispatch } from "react-redux";

import { IState } from "../store/initial-state";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../actions/counter";

const useCounter = () => {
  const count = useSelector((state: IState) => state.count);
  const dispatch = useDispatch();
  const increment = () => dispatch(incrementCounter());
  const decrement = () => dispatch(decrementCounter());
  const reset = () => dispatch(resetCounter());
  return { count, increment, decrement, reset };
};

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
