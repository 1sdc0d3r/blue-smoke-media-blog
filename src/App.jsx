import React from "react";
import "./style/_main.css";
import Header from "./components/Header";
import HeaderCta from "./components/Header-CTA";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <HeaderCta />
      </header>
      <section className="wrapper">
        <Home />
      </section>
      <Footer />
    </div>
  );
}

export default App;
