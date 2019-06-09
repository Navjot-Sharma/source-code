import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Core/Home/Home";
import Category from "./Category/Category";
import CreateCategory from "./Category/Create/CreateCategory";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/category/:category" component={Category} />
      <Route path="/create" component={CreateCategory} />
    </Router>
  );
}

export default AppRouter;
