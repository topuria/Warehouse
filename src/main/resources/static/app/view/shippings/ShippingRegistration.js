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
			if (form.getForm().isValid()) {
				Ext.Ajax.request({
					url: '/shipping',
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					params : values,
					success: function(data) {
						Ext.Msg.alert('გილოცავ', 'წ');
					}
				});
			}
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
			name: 'id',
			fieldLabel: 'მძღოლი',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{drivers}'
			},
			valueField: 'id',
			displayField: 'fullName',
		},{
			xtype: 'combo',
			name: 'id',
			fieldLabel: 'მანქანა',
			queryMode: 'remote',
			editable: false,
			bind: {
				store: '{cars}'
			},
			valueField: 'id',
			displayField: 'model',
		},{
			xtype: 'combo',
			name: 'id',
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
			name: 'id',
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
			name: 'id',
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