import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import _reducer from "../reducers/rootReducer";
const storeRedux = createStore(_reducer, applyMiddleware(thunkMiddleware));
export default storeRedux;
