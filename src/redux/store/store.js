
import { legacy_createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {reducers} from "../reducers/productReducer"


let store=legacy_createStore(reducers,
    applyMiddleware(thunk)
       )

    export default store;