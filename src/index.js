import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import reduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
const theStore = applyMiddleware(reduxPromise)(createStore)(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);