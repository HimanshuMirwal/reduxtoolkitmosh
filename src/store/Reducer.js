// This is our top level reducer, we cam combine here entities, UI etc reducers.
import {combineReducers} from "@reduxjs/toolkit"
import entityReducers from "./Entities";
export default combineReducers({
    entities:entityReducers
})