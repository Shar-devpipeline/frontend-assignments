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
            <Link to="/">Home of the Widgets</Link>
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
          <Route path="/counter-widget" component={CounterWidget} />
          <Route path="/color-change" component={ColorChange} />
          <Route path="/clock-widget" component={ClockWidget} />
          <Route path="/font-sizer" component={FontSizer} />
          <Route path="/rgb-slider" component={RGBSlider} />
          <Route path="/show-hide-toggle" component={ShowHideToggle} />
          <Route path="/text-alignment" component={TextAlignment} />
          <Route path="/toggle-greeting" component={ToggleGreeting} />
          <Route path="/weather-widget" component={WeatherWidget} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
