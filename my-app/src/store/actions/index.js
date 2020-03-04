import axios from 'axios'

export const GET_NAME = "GET_NAME"
export const GET_IMG = "GET_IMG"

export const getName = () => dispatch => {
    
    axios.get('https://www.breakingbadapi.com/api/character/random')
    .then( char => { 
        // console.log(name.data.name)
        dispatch({ type: GET_NAME, payload: char.data[0].name})
        dispatch({ type: GET_IMG, payload: char.data[0].img})
    })
    .catch( error => { console.log('error', error)})
}

// export const getImg = () => dispatch => {
    
//     axios.get('https://www.breakingbadapi.com/api/character/random')
//     .then( img => { 
//         dispatch( {type: GET_IMG, payload: img.data[0].img})
//     })   
//     .catch( error => { console.log('error', error)})
// }