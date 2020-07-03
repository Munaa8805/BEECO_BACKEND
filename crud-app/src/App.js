import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Burtgel from "./Butgel";
import Navbar from "./Navbar";
import BurtgelDetails from "./BurtgelDetails";
import Burtgeluuds from "./Burtgeluuds";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  handleLogout = () => {
    console.log("Garlaa");
    this.router.history.push("/");
  };
  handleLogin = () => {
    this.router.history.push("/crud");
  };
  render() {
    return (
      <Router ref={router => (this.router = router)}>
        <Navbar onLogout={this.handleLogout} />
        <div className="container">
          <Switch>
            <Route exact path="/crud" component={Burtgeluuds} />
            <Route path="/crud/:id" component={BurtgelDetails} />
            <Route
              path="/"
              render={() => <Burtgel onLogin={this.handleLogin} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
