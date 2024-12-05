import { Component } from "react";

class ShowHideToggle extends Component {
  constructor() {
    super();
    this.state = {
      visible: "true",
    };
  }

  handleShowHide = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div className="widget">
        <h3 className="widget-title">{this.state.visible && "Hide Me"}</h3>
        <div className="widget-button">
          <button onClick={this.handleShowHide}>
            {this.state.visible ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    );
  }
}

export default ShowHideToggle;
