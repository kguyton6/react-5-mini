const initialState = {
    currentValue: 0,
    futureValue: [],
    previousValue: []   
      
}



const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const UNDO = 'UNDO'
const REDO = 'REDO'

export function increment(amount){
    return {
        type: INCREMENT, //action.
        amount: amount   //action.amount
    }
}
export function decrement(amount){
    return {
        type: DECREMENT, //action.
        amount: amount   //action.amount
    }
}

export function undo(){
    return { type: UNDO }
}
export function redo(){
    return {
        type: REDO //action.
    }
}



export default function counter(state = initialState, action){ //REDUCER IS BORN step 1
    switch( action.type) {
        case INCREMENT: { 
            const newValue = state.currentValue + action.amount 
            const newState = Object.assign({}, state, {currentValue: newValue}) //CHANGES APPS STATE WHICH IS PASSED THROUGH COUNTER/Child 
        return newState  
    }
        case DECREMENT: {
            const newValue = state.currentValue + action.amount 
            const newState= Object.assign({}, state, {currentValue: newValue}) //CHANGES APPS STATE WHICH IS PASSED THROUGH COUNTER/Child 
            return newState  
        }
        case UNDO: 
        return {
            currentValue: state.previousValue[0] ,
            furtureValue: [state.currentValue, ...state.futureValue],
            previousValue: state.previousValue.slice[1] 
        }
        case REDO:
        return {
            currentValue: state.futureValue[0],
            futureValue: state.futureValue.slice[1],
            previousValue: [state.currentValue, ...state.previousValue],
        }
        default:  return state
    }
   
 }