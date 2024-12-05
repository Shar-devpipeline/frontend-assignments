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
