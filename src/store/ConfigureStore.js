import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./Reducer";
import logger from "../middleware/Logger";
import Func from "../middleware/Func";
import Toast from "../middleware/Toast";
import Api from "../middleware/Api";



export default function (){
   return configureStore({reducer,
   middleware:[
      // it is the default middleware.
      ...getDefaultMiddleware({
         serializableCheck: false,
       }),
      logger("Logging on console."),
   Toast,
   Api]
   });
};