import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitInfo } from '../actions/slotActions';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.phone = React.createRef();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();

    const slotInfo = {
      id: this.props.slotInfo.id,
      name: this.name.current.value,
      phone: this.phone.current.value,
      isOccupied: true
    }

    this.props.submitInfo(slotInfo);
  }

  componentDidUpdate() {
    // prevents labels from overlapping with prepopulated info
    window.M.updateTextFields();

    console.log(this.state);


    // this.name.current = this.props.slotInfo.name;
    // this.phone.current = this.props.slotInfo.phone;
  }

  render() {
    const { slotInfo } = this.props;

    return (
      <div id="editInfo" className="modal">
        <div className="modal-content">
          <h4>Edit Info</h4>
          <p>Please enter your name and phone number.</p>
          <div className="row">
            <form className="col s12" onSubmit={this.onSubmit}>
              <div className="input-field">
                <input
                  id="name"
                  name="name"
                  type="text"
                  ref={this.name}
                  defaultValue={slotInfo.name}
                  onChange={this.onChange} />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  ref={this.phone}
                  defaultValue={slotInfo.phone}
                  onChange={this.onChange} />
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