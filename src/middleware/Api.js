import axios from "axios";
import * as Action from "../store/Api";
const Api = ({dispatch, getState}) => next => async action => {
    if (action.type !== Action.apiCallBegan.type) return next(action);
   
   
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;
    try {
        const response = await axios.request({
            baseURL: "http://localhost:9001/api",
            url,
            method,
            data
        })
        dispatch({ type: onSuccess, payload: response.data })
    } catch (error) {
        dispatch({ type: onError, payload: error })
    }
}
export default Api;