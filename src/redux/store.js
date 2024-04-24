import { applyMiddleware, createStore } from "redux";
import { testReducer } from "./reducer";
import { thunk } from "redux-thunk";


const store = createStore(testReducer,applyMiddleware(thunk));

export default store;