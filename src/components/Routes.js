import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import MovieCardClass from "../pages/Movie/Card/Class";
import MovieCardClassDetail from "../pages/Movie/Card/Class/Detail";
import MovieCardFunction from "../pages/Movie/Card/Function";
import MovieTable from "../pages/Movie/Table";
import NotFound from "../pages/NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/react-portfolio" component={Home} />
      <Route exact={true} path="/react-portfolio/movie/card/class" component={MovieCardClass} />
      <Route path="/react-portfolio/movie/card/class/:id" component={MovieCardClassDetail} />
      <Route
        exact={true}
        path="/react-portfolio/movie/card/function"
        component={MovieCardFunction}
      />
      <Route path="/react-portfolio/movie/table" component={MovieTable} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
