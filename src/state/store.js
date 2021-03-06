import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root-reducer';

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
        traceLimit: 25
      })
  )
);

export default store;
