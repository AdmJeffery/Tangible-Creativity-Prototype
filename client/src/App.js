import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react';
import { createBrowserHistory } from 'history';
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import HeaderNav from "./components/Header";

const history = createBrowserHistory();
console.log("history: " + {history}) //returns "[object Object]"

const ProtectedRoute = ({ component, ...args }) => (
  <Route component={withAuthenticationRequired(component)} {...args} />
);

const onRedirectCallback = (appState) => {
  // Use the router's history module to replace the url
  history.replace(appState?.returnTo || window.location.pathname);
};

function App() {
  return (
    <Auth0Provider
      domain="dev-14haqfy3.us.auth0.com"
      clientId="8bxQfuKZeqx877BtTv46AWw4XuPVMUNq"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Router history={history}>
        <div className="overflow-auto">
          <HeaderNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/contact" component={Contact} />
          <ProtectedRoute exact path="/admin" component={Admin} />
        </div>
      </Router>
    </Auth0Provider>
  );
}

export default App;