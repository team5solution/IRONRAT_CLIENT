import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import socketIOClient from "socket.io-client";
import { createSocketMiddleWare } from "./socketMiddleWare";

const socket = socketIOClient("https://powerful-badlands-91453.herokuapp.com");
const webSocketMiddleWare = createSocketMiddleWare(socket);
const logger = createLogger({
  collapsed: true,
  diff: true
});
let middleware;
if (process.env.NODE_ENV === "production") {
  middleware = composeWithDevTools(
    applyMiddleware(webSocketMiddleWare, reduxThunk)
  );
} else {
  middleware = composeWithDevTools(
    applyMiddleware(webSocketMiddleWare, reduxThunk, logger)
  );
}
export default createStore(rootReducer, {}, middleware);
