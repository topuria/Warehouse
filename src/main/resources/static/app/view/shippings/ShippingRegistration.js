Ext.define('SL.view.shippings.ShippingRegistration', {
	extend: 'Ext.window.Window',
	title: 'რეგისტრაცია',
	modal: true,
	layout: 'fit',
	width: 300,
	height: 300,
	controller: {
		registrationShipping: function () {
			const form = this.lookup('shippingForm');
			const values = form.getForm().getValues();
			let record = Ext.create('SL.model.Shipping', values);
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
		reference: 'shippingForm',
		type: 'vbox',
		fieldDefaults: {
			anchor: '100%',
		},
		items: [{
			xtype: 'combo',
			name: 'driverId', // javashi romel obieqtsac velodebit imis velebs unda emtxveodes name ebi
			fieldLabel: 'მძღოლი',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{drivers}'
			},
			valueField: 'driversId',
			displayField: 'fullName',
		},{
			xtype: 'combo',
			name: 'carId',
			fieldLabel: 'მანქანა',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{cars}'
			},
			valueField: 'carId',
			displayField: 'model',
		},{
			xtype: 'combo',
			name: 'warehouseStartPlaceId',
			fieldLabel: 'საიდან',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{warehouses}'
			},
			valueField: 'wareHouseId',
			displayField: 'name',
		},{
			xtype: 'combo',
			name: 'warehouseEndPlaceId',
			fieldLabel: 'სად',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{warehouses}'
			},
			valueField: 'wareHouseId',
			displayField: 'name',
		},{
			xtype: 'combo',
			name: 'productId',
			fieldLabel: 'პროდუქტი',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{products}'
			},
			valueField: 'id',
			displayField: 'model',
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registrationShipping',
		}]
	}]
});