import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import { boardReducer } from './board-service/reducer';

const root = combineReducers({
	board: boardReducer,
});

const composeEnhance = compose(applyMiddleware(logger));

export const store = createStore(root, composeEnhance);
