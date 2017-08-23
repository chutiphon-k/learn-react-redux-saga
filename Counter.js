/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import * as actions from './actions/Couter'

const { onIncrement, onIncrementAsync, onDecrement } = actions

const Counter = (props) =>
      <div>
        <button onClick={props.onIncrementAsync} >
          Increment after 1 second
        </button>
        {' '}
        <button onClick={props.onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={props.onDecrement}>
          Decrement
        </button>
        <hr />
        <div>
          Clicked: {props.value} times
        </div>
      </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default connect(
  (state) => ({
    value: state.couter
  }), {
    onIncrementAsync,
    onIncrement,
    onDecrement
  }
)(Counter)
