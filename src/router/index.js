import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //引入路由模块

import history from "./history";

import Layout from "../components/Layout";

const Home = lazy(() => import('../pages/Home'));
const User = lazy(() => import('../pages/User'));


function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
          </Suspense>
        </Layout>
      </Switch>
    </Router>
  );
}

export default Routes;
