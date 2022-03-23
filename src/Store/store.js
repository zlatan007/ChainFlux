
  
import mainreducer from "./Reducer/mainReducer";
import { createStore } from 'redux';

const initialState = {};

const store = createStore(mainreducer,initialState);

export default store;