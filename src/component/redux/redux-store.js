import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import headerReduser from "./headerReduser";
import windowSizeReduser from "./windowSizeReduser"


let redusers = combineReducers({
  headerPage: headerReduser,
  windowSizePage: windowSizeReduser,
  form: formReducer,
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

export default store;

window.store = store;