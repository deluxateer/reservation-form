import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timeslot extends Component {
  render() {
    const { time, name, phone } = this.props;
    return (
      <div className="timeslot">
        <div className="slot-number">
          <p>{time}</p>
        </div>
        <a className="modal-trigger" href="#editInfo">
          <div className="slot-info">
            <div>
              <p>Name: {name}</p>
              <p>Phone: {phone}</p>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

Timeslot.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Timeslot;