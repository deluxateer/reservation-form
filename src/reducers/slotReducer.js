import { FETCH_INFO, SUBMIT_INFO } from '../actions/types';

const initialState = {
  slotItems: [
    { id: 1, time: '9am', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 2, time: '10am', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 3, time: '11am', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 4, time: '12pm', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 5, time: '1pm', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 6, time: '2pm', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 7, time: '3pm', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 8, time: '4pm', name: 'N/A', phone: 'N/A', isOccupied: false },
    { id: 9, time: '5pm', name: 'N/A', phone: 'N/A', isOccupied: false }
  ],
  slotInfo: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
        ...state,
        slotInfo: action.payload
      }

    case SUBMIT_INFO:
      // replaces the slot holding old info with a slot holding new info
      const updatedSlotItems = state.slotItems.map(slotItem => {
        if (slotItem.id === action.payload.id) {
          slotItem = {
            ...slotItem,
            ...action.payload
          }
        }
        return slotItem;
      });

      return {
        ...state,
        slotItems: updatedSlotItems,
        slotInfo: {}
      }

    default:
      return state;
  }
}