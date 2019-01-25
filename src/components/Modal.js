import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitInfo } from '../actions/slotActions';

import InputField from './InputField';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      prevPropID: ''
    }
  }

  // onChange = e => this.setState({
  //   [e.target.name]: e.target.value
  //   // ,prevPropID: this.props.slotInfo.id
  // });

  onChange2 = (type, fieldValue) => this.setState({
    [type]: fieldValue
  });

  onSubmit = e => {
    e.preventDefault();

    const slotInfo = {
      id: this.props.slotInfo.id,
      name: this.state.name,
      phone: this.state.phone,
      isOccupied: true
    }

    this.props.submitInfo(slotInfo);
  }

  componentDidUpdate(prevProps) {
    // prevents labels from overlapping with prepopulated info
    window.M.updateTextFields();

    // repopulates form fields with selected slot's info
    if (this.props.slotInfo.id !== prevProps.slotInfo.id) {
      this.setState({
        prevPropID: this.props.slotInfo.id,
        name: this.props.slotInfo.name,
        phone: this.props.slotInfo.phone
      })
    }
  }

  render() {
    return (
      <div id="editInfo" className="modal">
        <div className="modal-content">
          <h4>Edit Info</h4>
          <p>Please enter your name and phone number.</p>
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="input-field">
                {/* <input
                  id="name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange} /> */}
                <InputField
                  key={`name-${this.props.slotInfo.id}`}
                  id="name"
                  name="name"
                  type="text"
                  value={this.props.slotInfo.name}
                  trackChange={this.onChange2} />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field">
                {/* <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={this.state.phone}
                  onChange={this.onChange} /> */}
                <InputField
                  key={`phone-${this.props.slotInfo.id}`}
                  id="phone"
                  name="phone"
                  type="tel"
                  value={this.props.slotInfo.phone}
                  trackChange={this.onChange2} />
                <label htmlFor="phone">Phone</label>
              </div>
              <button type="submit" className="btn modal-close waves-effect waves-blue blue lighten-1">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  slotInfo: PropTypes.object.isRequired,
  submitInfo: PropTypes.func.isRequired
}

export default connect(state => ({
  slotInfo: state.slots.slotInfo
}), { submitInfo })(Modal);