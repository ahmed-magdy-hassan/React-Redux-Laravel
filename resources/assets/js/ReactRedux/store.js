import { createStore , combineReducers , applyMiddleware} from "redux";
import thunck from "redux-thunk";
import logger from "redux-logger";

//import reduceres
import ItemReducer from "../ReactRedux/reduceres/ItemReducer";

const store = createStore(
    combineReducers({ItemReducer}),
    {},
    applyMiddleware(logger,thunck)
);

export default store;