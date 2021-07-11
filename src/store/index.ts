import { useMemo } from "react";
import {
  createStore,
  applyMiddleware,
  Store,
  EmptyObject,
  AnyAction
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { IState, initialState } from "./initial-state";
import rootReducer from "../reducers/root";

let store: Store<IState, any> | Store<EmptyObject, AnyAction>;

const initStore = (preloadedState = initialState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export const initializeStore = (preloadedState: IState) => {
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

export const useStore = (initialState: IState) =>
  useMemo(() => initializeStore(initialState), [initialState]);
