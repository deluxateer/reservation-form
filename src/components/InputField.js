import React, { Component } from 'react'

export default class InputField extends Component {

  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value
    }
  }

  // onChange = e => this.setState({ value: e.target.value }, this.props.trackChange(this.props.name, this.state.value));

  onChange = e => this.setState({ value: e.target.value });

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      // this.setState({ value: this.state.value })
      this.props.trackChange(this.props.name, this.state.value)
    }
  }

  render() {
    const { value } = this.state;
    const { name, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={this.onChange} />
        <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      </div>
    )
  }
}
