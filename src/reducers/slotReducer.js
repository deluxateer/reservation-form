import { FETCH_INFO, SUBMIT_INFO } from '../actions/types';

const initialState = {
  slotItems: [
    { id: 1, time: '9am', name: 'N/A', phone: 'N/A' },
    { id: 2, time: '10am', name: 'N/A', phone: 'N/A' },
    { id: 3, time: '11am', name: 'N/A', phone: 'N/A' },
    { id: 4, time: '12pm', name: 'N/A', phone: 'N/A' },
    { id: 5, time: '1pm', name: 'N/A', phone: 'N/A' },
    { id: 6, time: '2pm', name: 'N/A', phone: 'N/A' },
    { id: 7, time: '3pm', name: 'N/A', phone: 'N/A' },
    { id: 8, time: '4pm', name: 'N/A', phone: 'N/A' },
    { id: 9, time: '5pm', name: 'N/A', phone: 'N/A' }
  ],
  slotInfo: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}