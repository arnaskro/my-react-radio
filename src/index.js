import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { Provider } from "redux-zero/react";
import store from "./store";

import Radio from './Radio';

const App = () => (
  <Provider store={store}>
    <Radio />
  </Provider>
);

render(<App />, document.getElementById('root'));
