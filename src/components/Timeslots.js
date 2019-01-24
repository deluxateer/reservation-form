import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Timeslot from './Timeslot';

class Timeslots extends Component {

  render() {
    const timeSlots = this.props.slotItems.map(slotItem => (
      <Timeslot
        key={slotItem.id}
        time={slotItem.time}
        name={slotItem.name}
        phone={slotItem.phone}></Timeslot>
    ));

    return (
      <div className="timeslots-base">
        <div className="timeslots-header">
          <h3>Hours</h3>
        </div>
        <div className="timeslots">
          {timeSlots}
        </div>
      </div>
    )
  }
}

Timeslots.propTypes = {
  slotItems: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  slotItems: state.slots.slotItems
});

export default connect(mapStateToProps, {})(Timeslots);