import './styles/index.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.js';
import Dashboard from './containers/Dashboard';
import { Provider } from 'react-redux';
import reducers from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { responsiveStoreEnhancer } from 'redux-responsive';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, responsiveStoreEnhancer);
injectTapEventPlugin();
render(
  <Provider store={store}>
    <div>
      <MuiThemeProvider>
        <BrowserRouter>
          <Switch>
            <div>
              <Route exact path="/" component={App} />
              <Route path="/containers/Dashboard" component={Dashboard} />
            </div>
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  </Provider>,
  document.querySelector('#root')
);

registerServiceWorker();
