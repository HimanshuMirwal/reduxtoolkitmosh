const Func=({dispatch, getState})=>next=>action=>{
    if(typeof action === "function"){
        action(dispatch, getState);
    }else{
        next(action);
    }
}
export default Func;