const INCREMENT = 'INCREMENT'

export function increment(amount){
    return {
        type: INCREMENT, //action.
        amount: amount   //action.amount
    }
}


const initialState = {
    currentValue: 0     //
}


export default function reducer(state = initialState, action){ //REDUCER IS BORN step 1
    switch(action.type) {
        case INCREMENT: { 
        const newValue = state.currentValue + action.amount 
        const newState = Object.assign({}, state, {currentValue: newValue}) //CHANGES APPS STATE WHICH IS PASSED THROUGH COUNTER/Child 
        return newState  }
    }
    return state
}
