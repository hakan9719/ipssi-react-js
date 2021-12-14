import { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    value: "Default",
  };
  handleChange(events) {
    this.setState({ value: events.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(events) => this.handleChange(events)}
          defaultValue={this.state.value}
        />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Form;
