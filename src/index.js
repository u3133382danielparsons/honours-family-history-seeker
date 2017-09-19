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
import Home from './Home.js';
import Dashboard from './containers/Dashboard';
import Search from './containers/Search';
import Posts from './containers/Posts';
import Families from './containers/Families';
import People from './containers/People';
import AddPosts from './containers/AddPosts';
import About from './containers/About';

// Material-ui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// For Android phones
import registerServiceWorker from './registerServiceWorker';

injectTapEventPlugin();
// console.log(store);

render(
  <Provider store={store(reducers, responsiveStoreEnhancer)}>
    <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/containers/Dashboard" component={Dashboard} />
          <Route path="/containers/Search" component={Search} />
          <Route path="/containers/Posts" component={Posts} />
          <Route path="/containers/Families" component={Families} />
          <Route path="/containers/People" component={People} />
          <Route path="/containers/AddPosts" component={AddPosts} />
          <Route path="/containers/About" component={About} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
