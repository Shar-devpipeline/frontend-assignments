import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navigation} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
