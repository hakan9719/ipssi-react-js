import React, { Component } from "react";

class Api extends Component {
  constructor() {
    super();

    this.fetchData = this.fetchData.bind(this);
  }

  state = {
    apiRes: [],
    loading: true,
    error: false,
  };

  async fetchData() {
    try {
      const res = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );
      const apiRes = await res.json();
      this.setState({ apiRes, loading: false });
    } catch (err) {
      this.setState({ error: true });
      throw err;
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (this.state.error) {
      return <div>Error</div>;
    }
    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    return <div>{this.state.apiRes}</div>;
  }
}

export default Api;
