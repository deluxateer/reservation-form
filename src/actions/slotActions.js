import { FETCH_INFO, SUBMIT_INFO } from './types';

export const fetchInfo = slotInfo => dispatch => {
  dispatch({
    type: FETCH_INFO,
    payload: slotInfo
  });
}

export const submitInfo = slotInfo => dispatch => {
  dispatch({
    type: SUBMIT_INFO,
    payload: slotInfo
  });
}