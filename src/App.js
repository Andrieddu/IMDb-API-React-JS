import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Watchlist } from "./pages/Watchlist";
import { Watched } from "./pages/Watched";
import { Home } from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";

//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />

            <Route path="/signup" component={Signup} />

            <Route path="/login" component={Login} />

            <PrivateRoute path="/watched" component={Watched} />

            <PrivateRoute path="/watchlist" component={Watchlist} />
          </Switch>
        </Router>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
