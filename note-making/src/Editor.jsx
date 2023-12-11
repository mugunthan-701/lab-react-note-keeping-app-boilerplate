import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: "",
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className='container'>
        <div className='input'>
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            value={this.state.value} // Use value instead of defaultValue
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className='output'>
          <h3>Pro Note</h3>
          <div className='output-text'>{this.state.value}</div>
        </div>
      </div>
    );
  }
}

  