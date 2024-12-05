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
        <div className="widget-description">
          <h4>Description</h4>
          <p>Toggles the visibility of a specific element or message.</p>
          <h4>How to use:</h4>
          <li>
            Click the "Show" or "Hide" button to display or hide the element.
          </li>
          <hr />
        </div>
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
