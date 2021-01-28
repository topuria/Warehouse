Ext.define('SL.view.suppliers.SupplierRegistration', {
	extend: 'Ext.window.Window',
	title: 'რეგისტრაცია',
	modal: true,
	layout: 'fit',
	width: 300,
	height: 300,
	controller: {
		registration: function () {
			const form = this.lookup('supplierForm');
			const values = form.getForm().getValues();
			let record = Ext.create('SL.model.Supplier', values);
			record.save({
				success: function (data) {
					Ext.Msg.alert('შეტყობინება', 'წარმატებით დარეგისტრირდა');
					form.reset();
				}
			});
		}
	},
	items: [{
		xtype: 'form',
		border: false,
		reference: 'supplierForm',
		type: 'vbox',
		fieldDefaults: {
			anchor: '100%',
		},
		items: [{
			xtype: "textfield",
			fieldLabel: "სახელი",
			name: "name",
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registration',
		}]
	}]
});