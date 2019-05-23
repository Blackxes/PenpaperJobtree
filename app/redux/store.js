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

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware( ...middlewares ),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

sagaMiddleware.run( rootSaga );

export default store;