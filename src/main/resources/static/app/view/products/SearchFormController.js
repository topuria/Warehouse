Ext.define('SL.view.products.SearchFormController', {
	extend: 'Ext.app.ViewController',

	search: function () {
		const form = this.getView();
		const values = form.getForm().getValues();
		let store = this.getViewModel().getStore('products');
		 if (form.getForm().isValid()) {
		 	Ext.Ajax.request({
				url: '/product/search',
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
				params : values,
				success: function(data) {
					console.log(data);
					store.load({
						params:data
					})
					Ext.Msg.alert('გილოცავ', 'წარმატებით მოიძებნა მარა არ ლოადდება');
				}
			});
		}
	},

	resetForm: function () {
		this.getView().getForm().reset();
		this.search();
	}
});
