Ext.define('SL.view.warehouses.WarehouseRegistration', {
	extend: 'Ext.window.Window',
	title: 'საწყობის რეგისტრაცია',
	modal: true,
	layout: 'fit',
	width: 300,
	height: 300,
	controller: {
		registration: function () {
			const form = this.lookup('wform');
			const values = form.getForm().getValues();
			let record = Ext.create('SL.model.Warehouse', values);
			record.save({
				success: function (data) {
					Ext.Msg.alert('შეტყობინება', 'საწყობი წარმატებით დარეგისტრირდა');
					form.reset();
				}
			});
		}
	},
	items: [{
		xtype: 'form',
		border: false,
		reference: 'wform',
		type: 'vbox',
		fieldDefaults: {
			anchor: '100%',
		},
		items: [{
			xtype: "textfield",
			fieldLabel: "საწყობის სახელი",
			name: "name",
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registration',
		}]
	}]
});