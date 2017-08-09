import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
// import { createStore } from 'redux'
//
// import itemsReducer from './core-module/reducers'
// import ItemList from './containers/ItemList'

// let store = createStore(itemsReducer)

ReactDOM.render(
  <Provider store={store}>
    <ItemList />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
