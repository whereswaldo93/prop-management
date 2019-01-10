import {
    CHANGE_SELECTED_REQUEST_TYPE
} from '../actions/types';

const INITAL_STATE = {
    request: [],
    selectedRequests: 'pending'
}

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SELECTED_REQUEST_TYPE:
            const boxType = action.payload;
            return {
                ...state,
                selectedRequests: boxType
            }
        default: return state;
    }
}