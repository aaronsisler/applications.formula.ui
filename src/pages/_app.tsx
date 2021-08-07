import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";

import "tailwindcss/tailwind.css";
import "../styles/globals.scss";

interface IApp {
  Component: React.ComponentClass;
  pageProps: {
    initialState: any;
  };
}

export default function App({ Component, pageProps }: IApp) {
  const store = useStore(pageProps.initialState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
