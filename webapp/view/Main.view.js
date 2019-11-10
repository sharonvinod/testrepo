sap.ui.jsview("tom.view.Main", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf tom.view.Main
	 */
	getControllerName: function () {
		return "tom.controller.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf tom.view.Main
	 */
	createContent: function (oController) {
		var oPage = new sap.m.Page({
			title: "Title",
			id: "page",
			content: []
		});

		var app = new sap.m.App(this.createId("app"), {
			initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});