Ext.define('SL.view.products.Grid', {
	extend: 'Ext.grid.Panel',
	reference: 'mainGrid',
	bind: '{products}',
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
	},{
		text: 'ერთეულის ფასი',
		dataIndex: 'priceForOne',
		flex: 1
	}, {
		text: 'რეგისტრაციის დრო',
		dataIndex: 'createDate',
		flex:1
	}, {
		text: 'საწყობი',
		dataIndex: 'wareHouse.name',
		flex:1
	}, {
		text: 'შემომტანი',
		dataIndex: 'supplier.name',
		flex:1
	}],
});
