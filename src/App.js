import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <Header />
      <Router>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
