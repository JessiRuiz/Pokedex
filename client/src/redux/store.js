import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { initialState } from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   rootReducer,
   {...initialState},
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;