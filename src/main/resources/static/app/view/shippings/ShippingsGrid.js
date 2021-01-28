Ext.define('SL.view.shippings.ShippingsGrid', {
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
		addShipping: function () {
			Ext.create('SL.view.shippings.ShippingRegistration', {
				autoShow: true
			});
		},
	},
	items: [{
		xtype: 'grid',
		bind: '{shipping}',
		reference: 'shippingsGrid',
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
			handler: 'addShipping'
		}],
		columns: [{
			text: 'id',
			dataIndex: 'id',
			flex: 1
		}, {
			text: 'საიდან',
			dataIndex: 'startPlace.name',
			flex: 1,
		}, {
			text: 'სად',
			dataIndex: 'endPlace.name',
			flex: 1,
		}, {
			text: 'მანქანა',
			dataIndex: 'car.model',
			flex: 1,
		}, {
			text: 'მძღოლი',
			dataIndex: 'driver.fullName',
			flex: 1,
		}, {
			text: 'პროდუქტი',
			dataIndex: 'product.model',
			flex: 1,
		}]
	}]
});
