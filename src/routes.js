import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import InputPage from "./pages/Input";
import DashboardPage from "./pages/Dashboard";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/input">
          <InputPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
}
