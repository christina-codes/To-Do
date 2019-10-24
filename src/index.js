import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ItemReducer from './reducers/items';
import App from './containers/App';

const store = createStore(
  ItemReducer
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
