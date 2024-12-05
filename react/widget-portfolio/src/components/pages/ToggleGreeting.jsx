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
        <h3 className="widget-title">{this.state.greeting}</h3>
        <div>
          <button onClick={this.handleGreeting}>Toggle Me</button>
        </div>
      </div>
    );
  }
}

export default ToggleGreeting;
