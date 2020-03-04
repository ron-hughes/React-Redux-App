import React from 'react';
import { connect } from 'react-redux';
import { getName } from '../store/actions'
import '../sass/mystyles.scss'


// de-structure in actions and state key variables
export const Display = ({ getName, name, img }) => {

    return (
        <>
      <div className="title">Name:</div> { name }<br />
    {img ? <img src={ img } style={{ width: "325px", height: "325px" }} /> : <h1>image goes here</h1>}   <br />
      <button onClick={ getName }> Click me</button>
        </>
    )

}

const mapStateToProps = state =>{
    return {
        name: state.name,
        img: state.img
    }

}

export default connect(mapStateToProps, { getName })(Display)