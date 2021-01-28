Ext.define('SL.view.cars.CarRegistration', {
	extend: 'Ext.window.Window',
	title: 'რეგისტრაცია',
	modal: true,
	layout: 'fit',
	width: 300,
	height: 300,
	controller: {
		registrationCar: function () {
			const form = this.lookup('carForm');
			const values = form.getForm().getValues();
			let record = Ext.create('SL.model.Car', values);
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
		reference: 'carForm',
		type: 'vbox',
		fieldDefaults: {
			anchor: '100%',
		},
		items: [{
			xtype: "textfield",
			fieldLabel: "მოდელი",
			name: "model",
		},{
			xtype: "textfield",
			fieldLabel: "გამოშვების თარიღი",
			name: "createDate",
		},{
			xtype: "textfield",
			fieldLabel: "სერია/ნომერი",
			name: "serialNum",
		}],
		buttons: [{
			text: 'რეგისტრაცია',
			handler: 'registrationCar',
		}]
	}]
});

// ,{
// 	xtype: 'datefield',
// 			anchor: '100%',
// 			fieldLabel: 'გამოშვების თარიღი',
// 			name: 'createDate',
// 			maxValue: new Date()  // limited to the current date or prior
// },