import {createStore} from "redux";
import Reducer from "./Bug";
import {devToolsEnhancer} from "redux-devtools-extension";


export default function ConfigureStore(){
    const Store = createStore(Reducer,
        devToolsEnhancer({trace: true})
    
        // In place of below line. we can add add above function and see result on chrome reduc tracer.
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    return Store;
};