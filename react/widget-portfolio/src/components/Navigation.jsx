import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ClockWidget from "./pages/ClockWidget";
import ColorChange from "./pages/ColorChange";
import CounterWidget from "./pages/CounterWidget";
import FontSizer from "./pages/FontSizer";
import RGBSlider from "./pages/RGBSlider";
import ShowHideToggle from "./pages/ShowHideToggle";
import { TextAlignment } from "./pages/TextAlignment";
import ToggleGreeting from "./pages/ToggleGreeting";
import WeatherWidget from "./pages/WeatherWidget";

function Home() {
  return (
    <h1>
      <Link to="/"></Link>
    </h1>
  );
}
function Navigation(props) {
  return (
    <div className="page-container">
      <BrowserRouter>
        <nav className="navigation">
          <h1 className="title">
            <Link to="/">Home of the Widgets</Link>{" "}
          </h1>
          <div className="widget-links">
            <Link to="/counter-widget">Counter Widget</Link> *{" "}
            <Link to="/color-change">Color Changer</Link> *{" "}
            <Link to="/clock-widget">Clock Widget</Link> *{" "}
            <Link to="/font-sizer">Font Sizer</Link> *{" "}
            <Link to="/rgb-slider">RGB Slider</Link> *{" "}
            <Link to="/show-hide-toggle">Show Hide Toggle</Link> *{" "}
            <Link to="/text-alignment">Text Alignment</Link> *{" "}
            <Link to="/toggle-greeting">Toggle Greeting</Link> *{" "}
            <Link to="/weather-widget">Weather Widget</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter-widget" component={CounterWidget} />
          {" Counter Widget"}
          Counter Widget
          <Route exact path="/color-change" component={ColorChange} /> Color
          Changer
          <Route exact path="/clock-widget" component={ClockWidget} /> Clock
          Widget
          <Route exact path="/font-sizer" component={FontSizer} /> Font Sizer
          <Route exact path="/rgb-slider" component={RGBSlider} /> RGB Slider
          <Route exact path="/show-hide-toggle" component={ShowHideToggle} />
          Show Hide Toggle
          <Route exact path="/text-alignment" component={TextAlignment} /> Text
          Alignment
          <Route
            exact
            path="/toggle-greeting"
            component={ToggleGreeting}
          />{" "}
          Toggle Greeting
          <Route exact path="/weather-widget" component={WeatherWidget} />{" "}
          Weather Widget
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
