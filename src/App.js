import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./Components/Header"
import { Body } from "./Components/Body"
import { SignUp } from "./Components/SignUp"
import { AddEditBook } from "./Components/AddEditBook"
import { Books } from "./Components/Books"
import Footer from "./Components/Footer"

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Route path="/Home" component={Body} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/AddEditBook" component={AddEditBook} />
        <Route path="/Books" render={(props) => <Books user={user} {...props} />} />
        <Footer />

      </div>
    </Router>
  );
};

export default App;