import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import navbarReducer from "../navbars/reducers";
const rootReducer = combineReducers({
  dashboardReducer: dashboardReducer,
  auth,
  messageApi,
  navbarReducer: navbarReducer,
});
const middleware = [thunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
