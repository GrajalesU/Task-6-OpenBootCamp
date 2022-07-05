import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import DashBoard from "./pages/dashboard/DashBoard";
function AppRoutingFinal() {
  let loggedIn = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect from="/" to="/dashboard" />
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Route>

        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/dashboard">
          {loggedIn ? <DashBoard /> : <Redirect from="/" to="/login" />}
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
