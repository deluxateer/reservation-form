import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputField extends Component {

  constructor(props) {
    super(props);
    const { value } = this.props;

    this.state = { value }
  }

  onChange = e => this.setState({ value: e.target.value });

  componentDidUpdate(prevProps, prevState) {
    // updates parent component (modal) with new input so they are synchronized
    if (prevState.value !== this.state.value) {
      this.props.trackChange(this.props.name, this.state.value);
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

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  trackChange: PropTypes.func.isRequired
}

export default InputField;