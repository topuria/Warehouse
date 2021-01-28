Ext.define('SL.view.cars.CarsGrid', {
	extend: 'Ext.panel.Panel',
	viewModel:{
		stores: {
			cars: {
				model: 'SL.model.Car',
				autoLoad: true
			}
		}
	},
	controller:{
		addCarr: function () {
			Ext.create('SL.view.cars.CarRegistration', {
				autoShow: true
			});
		},
	},
	items: [{
		xtype: 'grid',
		bind: '{cars}',
		reference: 'carsGrid',
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
			handler: 'addCarr'
		}],
		columns: [{
			text: 'id',
			dataIndex: 'id',
			flex: 1
		}, {
			text: 'მოდელი',
			dataIndex: 'model',
			flex: 1,
		}, {
			text: 'სერია/ნომერი',
			dataIndex: 'serialNum',
			flex: 1,
		}, {
			text: 'გამოშვების თარიღი',
			dataIndex: 'createDate',
			flex: 1,
		}]
	}]
});
