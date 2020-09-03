import React from "react";
import "./style/_main.css";
import Header from "./components/Header";
import HeaderCta from "./components/Header-CTA";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <HeaderCta />
      </header>
      <body className="wrapper">
        <Home />
      </body>
    </div>
  );
}

export default App;
