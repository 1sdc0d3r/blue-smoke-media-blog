import React from "react";
import { Switch, Route } from "react-router-dom";
import "./style/core.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <section className="wrapper">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/article/:id" component={Article} />
          <Route path="/search" component={Search} />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default App;
