Ext.define('SL.view.drivers.DriversGrid', {
	extend: 'Ext.panel.Panel',
	viewModel:{
		stores: {
			drivers: {
				model: 'SL.model.Driver',
				autoLoad: true
			}
		}
	},
	controller:{
		// deleteSupplier: function (btn){
		// 	let me = this;
		// 	let rec = me.getSelectionModel().getSelection()[0];
		// 	let store = me.lookup('suppliers');
		// 	console.log(rec);
		// 	store.remove(rec);
		// 	Ext.Msg.alert('შეტყობინება','წარმატებით წაიშალა');
		// 	store.save();
		// },
		addDriver: function () {
			Ext.create('SL.view.drivers.DriverRegistration', {
				autoShow: true
			});
		},
	},
	items: [{
		xtype: 'grid',
		bind: '{drivers}',
		reference: 'driversGrid',
		plugins: {
			ptype: 'rowediting',
			clicksToEdit: 2,
			removeUnmodified: true,
			errorSummary: true
		},
		tbar:[{
			xtype: 'button',
			text: 'წაშლა',
			//handler: 'deleteSupplier'
		},{
			xtype: 'button',
			text: 'რეგისტრაცია',
			handler: 'addDriver'
		}],
		columns: [{
			text: 'id',
			dataIndex: 'driversId',
			flex: 1
		}, {
			text: 'სახელი',
			dataIndex: 'fullName',
			flex: 1,
		}, {
			text: 'პირადი ნომერი',
			dataIndex: 'personalNumber',
			flex: 1,
		}, {
			text: 'მოდელი',
			dataIndex: 'car.model',
			flex: 1,
		}, {
			text: 'სერია/ნომერი',
			dataIndex: 'car.serialNum',
			flex: 1,
		}]
	}]
});
