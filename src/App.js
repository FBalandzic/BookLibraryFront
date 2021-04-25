import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Header from "./Components/Header"
import { Body } from "./Components/Body"
import { SignUp } from "./Components/SignUp"
import { AddEditBook } from "./Components/AddEditBook"
import { Books } from "./Components/Books"
import Footer from "./Components/Footer"
import { GuardProvider, GuardedRoute } from 'react-router-guards';

const App = () => {
  const [user, setUser] = React.useState(null);

  const requireGuard = (to, from, next) => {
    if (to.meta.auth) {
      if (localStorage.getItem("isLoggedIn") == 'true') {
        next();
      }
      next.redirect('/Home');
    } else {
      next();
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <GuardProvider guards={[requireGuard]} >
          <Switch>
            <GuardedRoute path="/Home" exact component={Body} />
            <GuardedRoute path="/SignUp" exact component={SignUp} />
            <GuardedRoute path="/AddEditBook" exact component={AddEditBook} meta={{ auth: true }} />
            <GuardedRoute path="/Books" exact render={(props) => <Books user={user} {...props} />} meta={{ auth: true }} />
            <GuardedRoute path="/*" exact component={Body} />
          </Switch>
        </GuardProvider>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;