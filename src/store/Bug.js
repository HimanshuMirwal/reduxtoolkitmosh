// Action types
const ADD_BUG = "bugAdded";
const REMOVE_BUG = "bugRemoved";
const RESOLVED_BUG = "bugResolved";

// Action creater
export const BugAdded=(description)=>{
    return {
        type:ADD_BUG,
        payload:{
            Description:description
        }
    }
}

export const BugResolved = ID =>{
    return {
        type:RESOLVED_BUG,
        payload:{
          ID,
        }
    }
}

export const BugRemoved = ID=>{
    return {
            type:REMOVE_BUG,
            payload:{
                ID
            }
        }
}

// Reducer

let lastID=0; 

// First time when react app is loaded then there is no state defined so it remains undefined
// and we don't want our app to stop working. so we will init our state to empty array.
export default function Reducer(state=[], action) {
    if(action.type === ADD_BUG){
        return [
            ...state,
            {
                ID:++lastID,
                Description:action.payload.Description,
                resolved:false,
            }
        ]
    }else if(action.type === REMOVE_BUG){
        return state.filter(bug=>bug.ID !== action.payload.ID);
    }else if(action.type === RESOLVED_BUG){
        return state.map(bug =>bug.ID!==action.payload.ID?bug:{...bug,resolved:true});
    }
    return state;
}