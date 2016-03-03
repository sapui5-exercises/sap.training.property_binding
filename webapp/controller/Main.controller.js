sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onInit: function() {

			var oData = {
				"name": "Peter",
				"enabled": true
			};

			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(oData);

			this.getView().setModel(oModel);
		}

	});

});