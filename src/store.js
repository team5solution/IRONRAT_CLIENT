import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
  diff: true
});
let middleware;
if (process.env.NODE_ENV === "production") {
  middleware = composeWithDevTools(applyMiddleware(reduxThunk));
} else {
  middleware = composeWithDevTools(applyMiddleware(reduxThunk, logger));
}
export default createStore(rootReducer, {}, middleware);
