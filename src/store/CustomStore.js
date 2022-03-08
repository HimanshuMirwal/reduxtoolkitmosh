import Reducer from './Reducer';
function createStore(Reducer) {
    let store;
    let listeners =[];
    function getState() {
        return store;
    }
    function subscribe(listener){
        listeners.push(listener);
    }
    function dispatch(action){
        store = Reducer(store, action);
        for(let i=0; i<listeners.length; i++){
            listeners[i]();
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}
export default createStore(Reducer);