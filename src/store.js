import { createStore } from 'redux'
import reducer from './ducks/counter'

const store = createStore(reducer)  //STORE MEETS REDUCER 2nd step

export default store  