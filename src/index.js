import './styles/index.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

// set up store
import store from './store';
import reducers from './reducers';
import { responsiveStoreEnhancer } from 'redux-responsive';

// Routes
import App from './App.js';
import Dashboard from './containers/Dashboard';
import Search from './containers/Search';
import About from './containers/About';

// Material-ui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// For Android phones
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();
console.log(store);

render(
  <Provider store={store(reducers, responsiveStoreEnhancer)}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/containers/Dashboard" component={Dashboard} />
          <Route path="/containers/Search" component={Search} />
          <Route path="/containers/About" component={About} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('.container')
);

registerServiceWorker();
