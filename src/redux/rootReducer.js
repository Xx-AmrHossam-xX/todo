// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import count from "./reducers/counter";
import countAmount from "./reducers/counterAmount";
// import secondCounter from './exampleReducer';

export default combineReducers({ count, countAmount });

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
