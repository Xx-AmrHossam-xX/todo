import { createStore } from "redux";
import rootReducer from "./rootReducer"; // Gets the State from the reducer(s)

let store = createStore(rootReducer); // Creates the store from the State received from the reducer(s)

export default store;
