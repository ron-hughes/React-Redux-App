import axios from 'axios'

export const GET_NAME = "GET_NAME"

export const getName = () => dispatch => {
    axios.get('https://swapi.co/api/people/1')
    .then( name => { 
        console.log(name.data.name)
        dispatch({ type: GET_NAME, payload: name.data.name})
    })
    .catch( error => { console.log('error', error)})
}