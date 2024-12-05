import { Component } from "react";

class ToggleGreeting extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Hello",
    };
  }

  handleGreeting = () => {
    this.setState((prevState) => ({
      greeting: prevState.greeting === "Hello" ? "Goodbye" : "Hello",
    }));
  };

  render() {
    return (
      <div className="widget">
        <div className="widget-description">
          <h4>Description</h4>
          <p>Switches between showing and hiding a greeting message.</p>

          <li>Click the toggle button to show or hide the greeting.</li>

          <hr />
        </div>
        <h3 className="widget-title">{this.state.greeting}</h3>
        <div>
          <button onClick={this.handleGreeting}>Toggle Me</button>
        </div>
      </div>
    );
  }
}

export default ToggleGreeting;
