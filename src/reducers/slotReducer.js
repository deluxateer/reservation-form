import { FETCH_INFO, SUBMIT_INFO } from '../actions/types';

const initialState = {
  slotItems: [
    { id: 1, time: '9am', name: '', phone: '', isOccupied: false },
    { id: 2, time: '10am', name: '', phone: '', isOccupied: false },
    { id: 3, time: '11am', name: '', phone: '', isOccupied: false },
    { id: 4, time: '12pm', name: '', phone: '', isOccupied: false },
    { id: 5, time: '1pm', name: '', phone: '', isOccupied: false },
    { id: 6, time: '2pm', name: '', phone: '', isOccupied: false },
    { id: 7, time: '3pm', name: '', phone: '', isOccupied: false },
    { id: 8, time: '4pm', name: '', phone: '', isOccupied: false },
    { id: 9, time: '5pm', name: '', phone: '', isOccupied: false }
  ],
  slotInfo: {
    id: '',
    name: '',
    phone: ''
  }
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
          // checks if slot is empty and unoccupied
          let isOccupied = false;
          if (action.payload.name !== '' && action.payload.phone !== '') {
            isOccupied = true;
          }

          slotItem = {
            ...slotItem,
            ...action.payload,
            isOccupied
          }
        }
        return slotItem;
      });

      return {
        ...state,
        slotItems: updatedSlotItems,
        slotInfo: {
          id: '',
          name: '',
          phone: ''
        }
      }

    default:
      return state;
  }
}