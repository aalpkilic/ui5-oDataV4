sap.ui.define([
	"sap/ui/core/UIComponent",
	"odatav4/model/models"
], function (UIComponent, models) {
	"use strict";

	return UIComponent.extend("odatav4.Component", {

		metadata : {
			manifest : "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls
		 * the init method once.
		 * @public
		 * @override
		 */
		init : function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
