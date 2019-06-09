import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Core/Header/Header";
// import AppRouter from "./AppRouter";
import Footer from "./Core/Footer/Footer";

import Home from "./Core/Home/Home";
import Category from "./Code/Code-list";
import CreateCategory from "./Code/Create/CreateCode";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/category/:category" component={Category} />
        <Route path="/create" component={CreateCategory} />
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);
