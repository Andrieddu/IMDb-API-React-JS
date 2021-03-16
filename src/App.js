import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { Footer } from "./components/Footer";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";
import Cards from "./components/Cards";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Add />
          </Route>

          <Route path="/watched">
            <Watched />
          </Route>

          <Route path="/watchlist">
            <Watchlist />
          </Route>
        </Switch>
        <Cards />
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
