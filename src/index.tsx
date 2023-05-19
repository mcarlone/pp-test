import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import {PokemonListReducer, allReducers} from './store/reducers'

import reportWebVitals from './reportWebVitals';




// const store: Store<PokemonListState, any> & { // TODO: proper Action type instead of any
//   dispatch: any // TODO: proper DispatchType instead of any
// } = createStore(PokemonListReducer)


const store: Store<AppState, any> & { // TODO: proper Action type instead of any
  dispatch: any // TODO: proper DispatchType instead of any
} = createStore(allReducers)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
