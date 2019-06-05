import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Register from "../components/Register1";
import Register from "../components/Register";
import Login from "../components/Login";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Auth from "../auth/auth";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Register} />
        <Route to="/login" component={Login} />
        <PrivateRoute to="/homepage" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </div>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default AppRouter;
