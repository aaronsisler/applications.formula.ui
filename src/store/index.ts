import { useMemo } from "react";
import {
  createStore,
  applyMiddleware,
  Store,
  EmptyObject,
  AnyAction
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/root";

let store: Store<{ count: number }, any> | Store<EmptyObject, AnyAction>;

export interface IState {
  count: number;
}

const initialState = {
  count: 0
};

function initStore(preloadedState = initialState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (
  preloadedState: { count: number } | undefined
) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = useStore(initialState);
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: { count: number } | undefined) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
