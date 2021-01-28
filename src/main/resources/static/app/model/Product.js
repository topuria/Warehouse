Ext.define('SL.model.Product', {
	extend: 'Ext.data.Model',
	fields: ['id','model', 'capacity', 'priceForAll', 'priceForOne','createDate',{
		name: 'wareHouse.name',
		type: 'string',
		mapping : 'wareHouse.name'
	},{
		name:'supplier.name',
		type:'string',
		mapping: 'supplier.name'
	}],
	validators: {
		id: 'present'
	},
	proxy: {
		url: 'http://localhost:8096/product',
		type: 'rest',
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
