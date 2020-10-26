import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style/core.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ArticleView from "./components/ArticleView";
import Articles from "./components/Articles";
import Navigation from "./components/Navigation";
import DropMenu from "./components/DropMenu";
import ArticleTesting from "./components/ArticleTesting";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <DropMenu />
      <section className="wrapper">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/article/:id" component={ArticleView} />
          <Route path="/articles" component={Articles} />
          <Route path="/category/:category" component={Articles} />
          <Route path="/tags/:tags" component={Articles} />
          <Route path="/author/:author" component={Articles} />
          <Route path="/test/:id" component={ArticleTesting} />
          <Redirect to="/" />
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default App;
