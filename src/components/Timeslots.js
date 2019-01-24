import React, { Component } from 'react';

import Timeslot from './Timeslot';

class Timeslots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [
        { id: 1, time: '9am', name: 'N/A', phone: 'N/A' },
        { id: 2, time: '10am', name: 'N/A', phone: 'N/A' },
        { id: 3, time: '11am', name: 'N/A', phone: 'N/A' },
        { id: 4, time: '12pm', name: 'N/A', phone: 'N/A' },
        { id: 5, time: '1pm', name: 'N/A', phone: 'N/A' },
        { id: 6, time: '2pm', name: 'N/A', phone: 'N/A' },
        { id: 7, time: '3pm', name: 'N/A', phone: 'N/A' },
        { id: 8, time: '4pm', name: 'N/A', phone: 'N/A' },
        { id: 9, time: '5pm', name: 'N/A', phone: 'N/A' }
      ]
    };
  }

  render() {
    const timeSlots = this.state.slots.map(slot => (
      <Timeslot
        key={slot.id}
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