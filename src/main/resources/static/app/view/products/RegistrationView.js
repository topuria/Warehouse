Ext.define('SL.view.products.RegistrationView', {
	extend: 'Ext.window.Window',
	title: 'რეგისტრაცია',
	modal: true,
	layout: 'fit',
	width: 300,
	height: 300,
	controller: {
		registration: function () {
			const form = this.lookup('form');
			const values = form.getForm().getValues();
			let record = Ext.create('SL.model.Product', values);
			record.save({
				success: function (data) {
					Ext.Msg.alert('შეტყობინება', 'პროდუქტი წარმატებით დარეგისტრირდა');
					form.reset();
				}
			});
		}
	},
	items: [{
		xtype: 'form',
		border: false,
		reference: 'form',
		type: 'vbox',
		defaults: {
			defaultType: 'textfield',
		},
		fieldDefaults: {
			anchor: '100%',
		},
		items: [{
			xtype: 'combo',
			name: 'supplierId',
			fieldLabel: 'მომწოდებელი',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{suppliers}'
			},
			valueField: 'supplierId',
			displayField: 'name',
		}, {
			xtype: 'combo',
			name: 'wareHouseId',
			fieldLabel: 'საწყობი',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{warehouses}'
			},
			valueField: 'wareHouseId',
			displayField: 'name',
		}, {
			xtype: "textfield",
			fieldLabel: "მოდელი",
			name: "model",
		}, {
			xtype: "numberfield",
			fieldLabel: "რაოდენობა",
			name: "capacity",
		}, {
			xtype: "numberfield",
			fieldLabel: "ფასი",
			name: "priceForAll",
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registration',
		}]
	}]
});