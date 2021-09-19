import React from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Content from "../Content/Content";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
