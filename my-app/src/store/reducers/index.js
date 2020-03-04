import { GET_NAME, GET_IMG } from '../actions';

const initialState = {
    name: null,
    img: null
    

}


export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case GET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case GET_IMG:
            return {
                ...state,
                img: action.payload
            }
        default:
            return state
    } 
}