import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages";
import Signup from "./pages/signup";

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
          </UserContext.Provider>
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
