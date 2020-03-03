import React from 'react';
import { connect } from 'react-redux';
import { getName } from '../store/actions'

export const Display = ({ getName, name }) => {

     

    return (
        <>
      Name: { name } <br />
      <button onClick={getName}> Click me</button>
        </>
    )

}

const mapStateToProps = state =>{
    return {
        name: state.name
    }

}

export default connect(mapStateToProps, { getName })(Display)