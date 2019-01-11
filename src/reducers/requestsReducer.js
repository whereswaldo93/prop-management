import {
    CHANGE_SELECTED_REQUEST_TYPE
} from '../actions/types';

const INITAL_STATE = {
    request: [],
    selectedRequestType: 'pending'
}

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECTED_REQUEST_TYPE:
            const boxType = action.payload;
            return {
                ...state,
                selectedRequestType: boxType
            }
        default: return state;
    }
}