/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/index.js";
import rootSaga from "./saga/saga.js";
import { takeEvery, put, call } from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];


const devTools = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
	? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	: () => {}
	// : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware( ...middlewares ),
		devTools
	)
);

sagaMiddleware.run( rootSaga );

export default store;