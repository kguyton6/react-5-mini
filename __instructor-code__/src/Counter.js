import React, { Component } from 'react';

// 1
// Import connect from react-redux
import { connect } from 'react-redux'
// Import any action creators we will use in this component
// increment from ducks/counter
import { increment } from './ducks/counter'


class Counter extends Component {
  render() {
    // Use data from redux Store
    // Use action creators to tell redux to change stuff
    // Both accessed through this.props.X
    const { currentValue, message, state, increment } = this.props;
    return (
      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{message}</h1>
          <h1 className="counter__current-value">{currentValue}</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={() => increment(1)}
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={() => increment(5)}
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={() => null}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => null}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={true}
              onClick={() => null}
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={true}
              onClick={() => null}
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>{JSON.stringify(this.props.state, null, 2)}</pre>
        </section>
      </div>
    );
  }
}

// 2
// Get information from app state(redux) and put it on props
function getDataFromAppState(appState) {

  //Whatever we return is put on props
  return {
    message: 'hello from the other side',
    currentValue: appState.currentValue,
    state: appState
  }
}

// 3
// Setup all action creators to put on props
// increment
const actionOutputs = {
  increment: increment
}

// 4 
// Connect Steps 2 & 3 together
const connected = connect(getDataFromAppState, actionOutputs);

// 5
// Connect step 4 to our component
export default connected(Counter);
