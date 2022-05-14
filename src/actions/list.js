import {
    LIST_DATA,
    CALL_RESPONSE
} from './types';


const token = localStorage.getItem("token")

export const addList = (data) => async dispatch => {
    dispatch({
        type: LIST_DATA,
        payload: data
    })
}



export const setCallResponse = (data) => async dispatch => {
    dispatch({
        type: CALL_RESPONSE,
        payload: data
    })
}