Ext.define('SL.view.RegistrationView', {
	extend: 'Ext.panel.Panel',
	controller: {
		registration1: function () {
			const form = this.lookup('form');
			const values = form.getForm().getValues();
			if (form.getForm().isValid()) {
				Ext.Ajax.request({
					url: '/product',
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					params : Ext.JSON.encode(values),
					success: function(conn, response, options, eOpts) {
						Ext.Msg.alert('გილოცავ', 'წარმატებით დარეგისტრირდა პროდუქტი');
					}
				});
			}
		}
	},
	items: [{
		xtype: 'form',
		border: false,
		reference: 'form',
		bodyPadding: 5,
		layout: 'vbox',
		defaults: {
			margin: 5,
			flex: 1,
			defaultType: 'textfield',
		},
		defaultType: 'fieldset',
		fieldDefaults: {
			labelAlign: 'top',
			msgTarget: 'side',
			labelWidth: 150,
			anchor: '100%'
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
			displayField: 'name'
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
			displayField: 'name'
		}, {
			xtype: "textfield",
			fieldLabel: "მოდელი",
			name: "model"
		}, {
			xtype: "numberfield",
			fieldLabel: "რაოდენობა",
			name: "capacity"
		}, {
			xtype: "numberfield",
			fieldLabel: "ფასი",
			name: "priceForAll"
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registration1',
		}]
	}]
});