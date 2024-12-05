import { Component } from "react";

class CounterWidget extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleSub = () => {
    if (this.state.count > 1)
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
  };

  render() {
    return (
      <div className="widget">
        <div className="widget-description">
          <h4>Description</h4>
          <p>
            A simple counter that allows you to increment, decrement, or reset a
            number.
          </p>
          <h4>How to use:</h4>

          <li>Click the "Add" button to increase the counter.</li>
          <li>Click the "Subtract" button to decrease it.</li>

          <hr />
        </div>
        <h3 className="widget-title">Count: {this.state.count}</h3>
        <div className="widget-buttons">
          <button onClick={this.handleAdd}>Add</button>
          <button onClick={this.handleSub}>Subratct</button>
        </div>
      </div>
    );
  }
}
export default CounterWidget;
