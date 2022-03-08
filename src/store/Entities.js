import { combineReducers } from "redux";
import ProjectReducers from "./Project";
import  BugReducer  from "./Bug";
import UserReducers from "./Users";
export default combineReducers({
    projects:ProjectReducers,
    bugs:BugReducer,
    users:UserReducers
})