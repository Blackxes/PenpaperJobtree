/**********************************************************************************************
 * 
 * @File
 * 
 * @Author: Alexander Bassov
 * 
**********************************************************************************************/

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import App from "./components/App.jsx";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById( "app" )
);

// hot reloading
if ( module.hot ) {
	module.hot.accept()
}