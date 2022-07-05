import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import Registerpage from "./pages/auth/RegisterPage";
import Taskspage from "./pages/tasks/TasksPage";
import { useState } from "react";

function AppRoutingFinal() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect from="/" to="/task" />
          ) : (
            <Redirect from="/" to="/login" />
          )}
        </Route>

        <Route exact path="/login">
          <LoginPage login={setLoggedIn} />
        </Route>
        <Route exact path="/register" component={Registerpage} />
        <Route exact path="/task">
          {loggedIn ? <Taskspage /> : <Redirect from="/" to="/login" />}
        </Route>

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRoutingFinal;
