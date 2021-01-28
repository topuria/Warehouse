Ext.define('SL.view.warehouses.WarehouseGrid', {
	extend: 'Ext.panel.Panel',
	controller:{
		deleteWarehouse: function (btn){
			let me = this;
			let rec = me.getSelectionModel().getSelection()[0];
			let store = me.lookup('warehouses');
			console.log(rec);
			store.remove(rec);
			Ext.Msg.alert('შეტყობინება','წარმატებით წაიშალა');
			store.save();
		},
		addWarehouse: function () {
			Ext.create('SL.view.warehouses.WarehouseRegistration', {
				autoShow: true
			});
		},
	},
	items: [{
		xtype: 'grid',
		bind: '{warehouses}',
		reference: 'warehousesGrid',
		plugins: {
			ptype: 'rowediting',
			clicksToEdit: 2,
			removeUnmodified: true,
			errorSummary: true
		},
		tbar:[{
			xtype: 'button',
			text: 'წაშლა',
			handler: 'deleteWarehouse'
		},{
			xtype: 'button',
			text: 'რეგისტრაცია',
			handler: 'addWarehouse'
		}],
		columns: [{
			text: 'id',
			dataIndex: 'wareHouseId',
			flex: 1
		}, {
			text: 'სახელი',
			dataIndex: 'name',
			flex: 1,
		}]
	}]
});
