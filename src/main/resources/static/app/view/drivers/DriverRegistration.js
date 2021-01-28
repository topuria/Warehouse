Ext.define('SL.view.drivers.DriverRegistration', {
	extend: 'Ext.window.Window',
	title: 'რეგისტრაცია',
	modal: true,
	layout: 'fit',
	width: 300,
	height: 300,
	controller: {
		registrationCar: function () {
			const form = this.lookup('driverForm');
			const values = form.getForm().getValues();
			let record = Ext.create('SL.model.Driver', values);
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
		reference: 'driverForm',
		type: 'vbox',
		fieldDefaults: {
			anchor: '100%',
		},
		items: [{
			xtype: "textfield",
			fieldLabel: "სახელი",
			name: "fullName",
		},{
			xtype: "textfield",
			fieldLabel: "პირადინომერი",
			name: "personalNumber",
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
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registrationCar',
		}]
	}]
});