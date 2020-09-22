import React from "react";
import { Switch, Route } from "react-router-dom";
import "./style/core.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <section className="wrapper">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/article/:id" component={Article} />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default App;
