import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import ParkPage from "./routes/ParkPage/ParkPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import RegistrationPage from "./routes/RegistrationPage/RegistrationPage";
import NoPage from "./routes/NoPage/NoPage";

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/park/:parkCode" component={ParkPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route component={NoPage} />
      </Switch>
    </main>
  );
}

export default App;
