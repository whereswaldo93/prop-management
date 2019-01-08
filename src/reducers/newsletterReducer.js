import {
    SET_NEWSLETTERS
} from '../actions/types';

const INITAL_STATE = {
    newsletter: []
}

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters
            }
        default: return state;
    }
}