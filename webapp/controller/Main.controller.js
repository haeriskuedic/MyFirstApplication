/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("myFirstApplication.MyFirstApplication.controller.Main", {

		onInit: function () {

		},
		
		// new Method
		onPress: function () {
			// don't forget to add /*eslint-disable no-console, no-alert */ in the first line of code, 
			// it enables to use the alert statement for debugging cases
			alert("Hello World!");
		}

	});

});