import React from 'react';
import { connect } from 'react-redux';
import { getName } from '../store/actions'

export const Display = ({ getName, name }) => {

     

    return (
        <>
      Name: { name }
      <button onClick={console.log(getName)}> Click me</button>
        </>
    )

}

const mapStateToProps = state =>{
    return {
        name: state.name
    }

}

export default connect(mapStateToProps, { getName })(Display)