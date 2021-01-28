Ext.define('SL.view.products.SearchFormController', {
	extend: 'Ext.app.ViewController',

	search: function () {
		const form = this.getView();
		const values = form.getForm().getValues();
		//const store = this.getViewModel().getStore('products');
		this.getViewModel().getStore('products').load({
			params:values
		})
	},

	resetForm: function () {
		this.getView().getForm().reset();
		this.search();
	}
});
