import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AllUsers from "./components/AllUsers";
import User from "./components/User";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllUsers} />
        <Route path="/user/:userId" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
