import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CatagoryPage from "./CategoryPage";
import Mobile from "./pages/Mobile";
import Mbb from "./pages/Mbb";
import Addons from "./pages/Addons";
import Checkout from "./Checkout";
import Outright from "./pages/Outright";
import Fixed from "./pages/Fixed";
import Prepaid from "./pages/Prepaid";
import Header from "./Header";
import AddDevice from "./pages/AddDevice";
import mbb__data from "./pages/prices/outrightMbb.json";
import phone__data from "./pages/prices/outrightPhones.json";
import hro__data from "./pages/prices/hro.json";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/mobile">
            <Mobile />
          </Route>
          <Route path="/mbb">
            <Mbb />
          </Route>
          <Route path="/fixed">
            <Fixed />
          </Route>
          <Route path="/outright">
            <Outright />
          </Route>
          <Route path="/addPhone">
            <AddDevice data={phone__data} />
          </Route>
          <Route path="/addMbb">
            <AddDevice data={mbb__data} />
          </Route>
          <Route path="/hro">
            <AddDevice data={hro__data} />
          </Route>
          <Route path="/addons">
            <Addons />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/prepaid">
            <Prepaid />
          </Route>
          <Route path="/">
            <CatagoryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
