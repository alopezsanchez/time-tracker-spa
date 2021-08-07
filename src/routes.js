import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InputPage from "./pages/Input";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/input">
          <InputPage />
        </Route>
        <Route path="/">
          <span />
        </Route>
      </Switch>
    </Router>
  );
}
