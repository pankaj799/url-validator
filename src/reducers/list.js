import {
    LIST_DATA,
    CALL_RESPONSE
} from "../actions/types";

const initialState = {
    listData: [],
    call_response: null,
};

export default (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case LIST_DATA:
            if (payload) {
                return {
                    ...state,
                    listData: payload,
                    call_response: payload
                };
            } else {
                return {
                    ...state,
                    call_response: payload
                };
            }
        case CALL_RESPONSE:
            return {
                ...state,
                call_response: null
            };
        default:
            return state;
    }
}
