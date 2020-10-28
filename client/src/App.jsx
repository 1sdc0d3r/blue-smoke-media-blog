import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./style/core.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import DropMenu from "./components/DropMenu";
const ArticleView = lazy(() => import("./components/ArticleView"));
const Articles = lazy(() => import("./components/Articles"));
// import ArticleTesting from "./components/ArticleTesting";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <DropMenu />
      <section className="wrapper">
        <Switch>
          <Suspense fallback={() => <p>Loading...</p>}>
            <Route path="/" component={Home} exact />
            <Route path="/article/:id" component={ArticleView} />
            <Route path="/articles" component={Articles} />
            <Route path="/category/:category" component={Articles} />
            <Route path="/tags/:tags" component={Articles} />
            <Route path="/author/:author" component={Articles} />
            {/* <Route path="/test/:id" component={ArticleTesting} /> */}
            <Redirect to="/" />
          </Suspense>
        </Switch>
      </section>
      <Footer />
    </div>
  );
}

export default App;
