import ConfigureStore from "./store/ConfigureStore";
import {BugAdded, BugResolved, unResolvedBug, BugAssignedToUser, getBugByUSers} from "./store/Bug";
import {ProjectAdded} from "./store/Project";
import { UserAdded } from "./store/Users";
const Store = ConfigureStore();

// console.log(Store);

// This occur when somthing changed from the store.
// const UnSubscribe = Store.subscribe(()=>console.log("State Changes"));


// Store.dispatch(UserAdded({name:"User 1"}));
// Store.dispatch(UserAdded({name:"User 2"}));

// Store.dispatch(ProjectAdded({name:"Project 1"}));

// Store.dispatch(BugAdded({Description:"Bug 1"}));
// UnSubscribe();
// Store.dispatch(BugAdded({Description:"Bug 2"}));
// Store.dispatch(BugAdded({Description:"Bug 3"}));

// Store.dispatch(BugAssignedToUser({bugId:1, userId:1}));
// Store.dispatch(BugAssignedToUser({bugId:2, userId:1}))

// const UserBugs = getBugByUSers(1)(Store.getState());
// console.log(UserBugs) ;
// // Here we are giving ID.
// Store.dispatch(BugResolved({ID:2}));
// // Store.dispatch(BugRemoved(1));

// const x = unResolvedBug(Store.getState());
// const y = unResolvedBug(Store.getState());
// console.log(x===y);

// ------------------------------------------------
// Middleware used from here.
// ------------------------------------------------

// Store.dispatch((dispatch, getState)=>{
//     dispatch({type:"bugsReceived", bugs:[1,2,3,4,5,6]});
// })

// Store.dispatch({
//     type:"error",
//     payload:{message:"An error occurred."}
// });
import * as action from "./store/Api";
Store.dispatch(action.apiCallBegan({
    payload:{
        url:"/bugs",
        onSuccess:"bugsReceived",
        onError:action.apiCallFailed
    }
}))








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