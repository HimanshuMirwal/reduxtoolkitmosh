import ConfigureStore from "./store/ConfigureStore";
import {BugAdded, BugRemoved, BugResolved} from "./store/Bug";

const Store = ConfigureStore();

// console.log(Store);

// This occur when somthing changed from the store.
const UnSubscribe = Store.subscribe(()=>console.log("State Changes"));

Store.dispatch(BugAdded("Bug 1"));
UnSubscribe();
Store.dispatch(BugAdded("Bug 2"));


// Here we are giving ID.
Store.dispatch(BugResolved(2));



Store.dispatch(BugRemoved(1));

console.log(Store.getState());









// -----------------------------------------
// We gonna implement here our custome store.
// -----------------------------------------

// import store from './CustomStore';
// import * as action from "./Action";
// store.subscribe(()=>{
//     console.log("state gets changed.");
// })
// console.log(store.getState());
// store.dispatch(action.BugAdded("Bug 1"));
// store.dispatch(action.BugAdded("Bug 2"));

// console.log(store.getState());