import React, { Component } from 'react';
import { connect } from 'react-redux'


import {increment, decrement, redo, undo} from  './ducks/counter'


class Counter extends Component {
  render() {
    // use data from the redux store
    //and use action creators to tell redux to change stuff, both use this.props
    const { currentValue, message, increment, decrement, previousValue, futureValue} = this.props
    console.log(this.props)
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
              onClick={() => decrement(-1)}
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={() => decrement(-5)}
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={previousValue.length === 0}
              onClick={() => undo }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={futureValue.length === 0}
              onClick={() => redo}
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


//step 2 get infor from app state(redux) and put it on props
function getDataFromAppState(appState) { //PROPS GUY 3 step
  //whatever it was we returned on props
  return {
    message: 'this is coming from my getDataFromAppState function', //Counter get this.props.properties
    currentValue: appState.currentValue,
    state: appState
    
  }
}
//3 setup all action creators to put on props
const actionOutputs = {               //Connects to redux both 80 and 83 are needed
  increment: increment,
  decrement: decrement,
  redo: redo,
  undo: undo}//aka increment
//4 connect steps 2 and 3 together
// const connected = connect(getDataFromAppState, actionOutputs)
const mapStateToProps = state => state
//5 connect step 4 to our commonent
export default connect(mapStateToProps, {increment, decrement, redo, undo}) (Counter, );//this.props goes to Counter
