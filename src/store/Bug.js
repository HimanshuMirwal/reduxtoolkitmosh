// import { createAction, createReducer } from "@reduxjs/toolkit";

// // Just for test.
// // const BugUpdated = createAction("bugUpdated");
// // console.log(BugUpdated({ID:1}));


// // Action creater
// export const BugAdded = createAction("BugAdded");
// export const BugRemoved = createAction("BugRemoved");
// export const BugResolved = createAction("BugResolved");



// // Reducer
// let lastID=0; 

// // First time when react app is loaded then there is no state defined so it remains undefined
// // and we don't want our app to stop working. so we will init our state to empty array.
// export default createReducer([],{
//     [BugAdded.type]:(bugs, action)=>{
//         bugs.push({
//             ID:++lastID,
//             Description:action.payload.Description,
//             resolved:false,
//         })},
//     [BugResolved.type]:(bugs, action)=>{
//         const index = bugs.findIndex(bug=>bug.ID===action.payload.ID);
//         bugs[index].resolved=true;
//     }
// });
// -------------------------------------------------------------------------------------
// Instead of writing all above code we can use CreateSlice function from Redux Toolkit.
// -------------------------------------------------------------------------------------
import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from "reselect";
let lastID = 0;

const Slice = createSlice({
    name: "bugs",
    initialState: [],
    reducers: {
        BugAssignedToUser:(bugs, action)=>{
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug=>bug.ID===bugId);
            bugs[index].userId=userId;
        },
        BugAdded: (bugs, action) => {
            bugs.push({
                ID: ++lastID,
                Description: action.payload.Description,
                resolved: false,
            })
        },
        BugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.ID === action.payload.ID);
            bugs[index].resolved = true;
        }
    }
});
export default Slice.reducer;
export const {BugAdded, BugResolved, BugAssignedToUser} = Slice.actions;



// It is expensive instead use below.
// export const unResolvedBug = state=>{
    // return state.entities.bugs.filter(bug=> !bug.resolved)
// }

export const unResolvedBug =createSelector(
    state=>state.entities.bugs,
    state=>state.entities.projects,
    (bugs,projects)=>bugs.filter(bug=> !bug.resolved)
);

export const getBugByUSers =userId=>createSelector(
    state=>state.entities.bugs,
    (bugs)=>bugs.filter(bug=> bug.userId===userId)
)