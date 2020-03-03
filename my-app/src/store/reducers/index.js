import { GET_NAME } from '../actions';
const initialState = {
    name: null,

}


export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
    } 
}