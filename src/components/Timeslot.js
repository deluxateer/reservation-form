import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchInfo } from '../actions/slotActions';

class Timeslot extends Component {

  populateForm = () => {
    const { id, name, phone, fetchInfo } = this.props;

    fetchInfo({
      id,
      name,
      phone
    });
  }

  render() {
    const { time, name, phone, id, slotItems } = this.props;
    return (
      <div className="timeslot">
        <div className="slot-number">
          <p>{time}</p>
        </div>
        <a
          className="modal-trigger"
          href="#editInfo"
          onClick={this.populateForm}>
          <div className={slotItems[id - 1].isOccupied ? "slot-info occupied" : "slot-info"}>
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
  phone: PropTypes.string.isRequired,
  fetchInfo: PropTypes.func.isRequired,
  slotItems: PropTypes.array.isRequired
}

export default connect(state => ({
  slotItems: state.slots.slotItems
}), { fetchInfo })(Timeslot);