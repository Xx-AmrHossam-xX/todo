import { combineReducers } from "redux";
import todoList from "./todoList/reducers";
import toggleDrawer from "./addDrawer/reducers";

export default combineReducers({ todoList, toggleDrawer });
