import {createStore,compose,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga'
// import thunk from 'redux-thunk';
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);

sagaMiddleware.run(todoSagas)

export default store;