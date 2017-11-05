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
import Families from './containers/Families';
import FamilyMembers from './containers/FamilyMembers';
import People from './containers/People';
import Data from './containers/Data';
import Videos from './containers/Videos';
import ArticlesList from './containers/ArticlesList';
import About from './containers/About';
import Profile from './containers/Profile';
import Gallery from './containers/Gallery';
import Posts from './containers/Posts';
import AddPosts from './containers/AddPosts';
import UrlLinks from './containers/UrlLinks';
import Subscribers from './containers/Subscribers';
import SignUp from './containers/SignUp';

// People
import Georgiana from './components/people/women/Georgiana';
import Truganini from './components/people/women/Truganini';
import Chisholm from './components/people/women/Chisholm';
import Mary from './components/people/women/Mary';
import Vida from './components/people/women/Vida';
import Molly from './components/people/women/Molly';
import Hicks from './components/people/women/Hicks';
import Spence from './components/people/women/Spence';
import BryantBrothers from './components/people/men/BryantBrothers';
import ThomasHollingworth from './components/people/men/ThomasHollingworth';
import HenryGray from './components/people/men/HenryGray';
import BanjoPaterson from './components/people/men/BanjoPaterson';
import LordScarlett from './components/people/men/LordScarlett';
import AnthonyCordato from './components/people/men/AnthonyCordato';

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
          <Route path="/containers/Families" component={Families} />
          <Route path="/containers/FamilyMembers" component={FamilyMembers} />
          <Route path="/containers/People" component={People} />
          <Route path="/containers/Data" component={Data} />
          <Route path="/containers/Videos" component={Videos} />
          <Route path="/containers/ArticlesList" component={ArticlesList} />
          <Route path="/containers/Profile" component={Profile} />
          <Route path="/containers/About" component={About} />
          <Route path="/containers/Gallery" component={Gallery} />
          <Route path="/containers/Posts" component={Posts} />
          <Route path="/containers/AddPosts" component={AddPosts} />
          <Route path="/containers/UrlLinks" component={UrlLinks} />
          <Route path="/containers/Subscribers" component={Subscribers} />
          <Route path="/containers/SignUp" component={SignUp} />

          <Route
            path="/components/people/women/Georgiana"
            component={Georgiana}
          />
          <Route
            path="/components/people/women/Truganini"
            component={Truganini}
          />
          <Route
            path="/components/people/women/Chisholm"
            component={Chisholm}
          />
          <Route path="/components/people/women/Mary" component={Mary} />
          <Route path="/components/people/women/Vida" component={Vida} />
          <Route path="/components/people/women/Molly" component={Molly} />
          <Route path="/components/people/women/Hicks" component={Hicks} />
          <Route path="/components/people/women/Spence" component={Spence} />
          <Route
            path="/components/people/men/BryantBrothers"
            component={BryantBrothers}
          />
          <Route
            path="/components/people/men/ThomasHollingworth"
            component={ThomasHollingworth}
          />
          <Route
            path="/components/people/men/HenryGray"
            component={HenryGray}
          />
          <Route
            path="/components/people/men/BanjoPaterson"
            component={BanjoPaterson}
          />
          <Route
            path="/components/people/men/LordScarlett"
            component={LordScarlett}
          />
          <Route
            path="/components/people/men/AnthonyCordato"
            component={AnthonyCordato}
          />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
