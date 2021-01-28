Ext.define('SL.view.suppliers.SupplierGrid', {
	extend: 'Ext.panel.Panel',
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
		addSupplier: function () {
			Ext.create('SL.view.suppliers.SupplierRegistration', {
				autoShow: true
			});
		},
	},
	items: [{
		xtype: 'grid',
		bind: '{suppliers}',
		reference: 'suppliersGrid',
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
			handler: 'addSupplier'
		}],
		columns: [{
			text: 'id',
			dataIndex: 'supplierId',
			flex: 1
		}, {
			text: 'სახელი',
			dataIndex: 'name',
			flex: 1,
		}]
	}]
});
