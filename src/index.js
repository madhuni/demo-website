/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// importing all the Redux related dependencies
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// imporing the Reducers for the application
import media from './store/reducers/media-items';
import jobs from './store/reducers/job-items';
import team from './store/reducers/team-items';

import App from './app.jsx';
import './styles/index.css';

// Adding the Redux Dev Tool setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating a 'rootReducer' with the multiple reducers
const rootReducer = combineReducers({
  media: media,
  jobs: jobs,
  team: team
});

// Creating store for the application
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);