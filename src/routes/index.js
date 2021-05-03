/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { ConnectedRouter } from "connected-react-router";

import { store } from "../store";
import * as actionAuth from "../store/modules/auth/actions";

import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, token, history, ...rest }) => {
  const dispatch = useDispatch();

  const render = (props) => {
    if (history.location.search === "") {
      if (token) {
        return <Component {...props} token={token} />;
      } else {
        return <Redirect to="/login" />;
      }
    } else {
      if (token) {
        return <Component {...props} token={token} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  };
  return <Route {...rest} render={render} />;
};

const LoginRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

function AppRoutes({ history, token: newToken, permission }) {
  const { authentication } = Cookies.getJSON();
  const { token } = authentication ? authentication : {};
  console.log("token", authentication, token, Cookies.getJSON());

  console.log("ok", Cookies.get("ACCESS"));

  return (
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}

          <Route path="/teste" component={() => <>OIIIIII</>} /> 

          <LoginRoute
            path="/login"
            component={Login}
            token={token}
            history={history}
          />

          <PrivateRoute
            exact
            path="/"
            token={token}
            component={Dashboard}
            history={history}
            permission={permission}
          />
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  // permission: state.auth.authentication.permissions,
  // token: state.auth.authentication.token,
});

export default connect(mapStateToProps)(AppRoutes);
