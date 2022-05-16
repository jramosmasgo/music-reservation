import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "../reducers/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertReducer } from "../reducers/alertReducer";

const reducers = combineReducers({
  auth: authReducer,
  alert: alertReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
