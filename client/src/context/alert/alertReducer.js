import { SET_ALERT, REMOVE_ALERT } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_ALERT:
            return [...state, action.payload]; // alert is the action.payload
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== action.payload); // in this case the payload is the alert id
        default:
            return state;
    }
};
