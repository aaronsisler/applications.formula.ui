import React from "react";
import { Provider } from "react-redux";
import { useStore } from "../store";

import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

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
