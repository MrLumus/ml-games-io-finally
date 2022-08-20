import {
  applyMiddleware,
  legacy_createStore as createStore,
  Store,
} from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
let initialState = {};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

store.sagaTask = sagaMiddleware.run(rootSaga);
