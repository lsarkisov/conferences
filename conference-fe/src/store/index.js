import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from '../reducers';
import eventsMiddleware from '../middleware';

export default function configureStore(data) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, data, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(eventsMiddleware);

  return store;
}
