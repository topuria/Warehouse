Ext.define('SL.view.products.Grid', {
	extend: 'Ext.grid.Panel',
	reference: 'mainGrid',
	bind: '{products}',
	controller:{
		deleteProduct: function (btn){
			let me = this;
			console.log(me);
			let rec = me.getSelectionModel().getSelection()[0];
			let store = me.lookup('products');
			console.log(rec);
			store.remove(rec);
			Ext.Msg.alert('შეტყობინება','წარმატებით წაიშალა');
			store.save();
		},
		addProduct: function () {
			Ext.create('SL.view.products.RegistrationView', {
				autoShow: true
			});
		},
	},
	tbar: [{
		xtype: 'button',
		text: 'წაშლა',
		handler: 'deleteProduct'
	},{
		xtype: 'button',
		text: 'რეგისტრაცია',
		handler: 'addProduct'
	}],
	columns: [{
		text: 'ID',
		dataIndex: 'id'
	}, {
		text: 'მოდელი',
		dataIndex: 'model',
		flex: 1,
	}, {
		text: 'რაოდენობა',
		dataIndex: 'capacity',
		flex: 1
	}, {
		text: 'მთლიანი ფასი',
		dataIndex: 'priceForAll',
		flex: 1
	}, {
		text: 'ერთეულის ფასი',
		dataIndex: 'priceForOne',
		flex: 1
	}, {
		text: 'რეგისტრაციის დრო',
		dataIndex: 'createDate',
		flex: 1
	}, {
		text: 'საწყობი',
		dataIndex: 'wareHouse.name',
		flex: 1
	}, {
		text: 'შემომტანი',
		dataIndex: 'supplier.name',
		flex: 1
	}],
});
