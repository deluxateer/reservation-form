import React, { Component } from 'react';

import Timeslot from './Timeslot';

class Timeslots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [
        { time: '9am', name: 'N/A', phone: 'N/A' },
        { time: '10am', name: 'N/A', phone: 'N/A' },
        { time: '11am', name: 'N/A', phone: 'N/A' },
        { time: '12pm', name: 'N/A', phone: 'N/A' },
        { time: '1pm', name: 'N/A', phone: 'N/A' },
        { time: '2pm', name: 'N/A', phone: 'N/A' },
        { time: '3pm', name: 'N/A', phone: 'N/A' },
        { time: '4pm', name: 'N/A', phone: 'N/A' },
        { time: '5pm', name: 'N/A', phone: 'N/A' }
      ]
    }
  }

  render() {
    const timeSlots = this.state.slots.map((slot, currIndex) => (
      <Timeslot
        key={currIndex}
        time={slot.time}
        name={slot.name}
        phone={slot.phone}></Timeslot>
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

export default Timeslots;