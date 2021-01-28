Ext.define('SL.model.Driver', {
	extend: 'Ext.data.Model',
	fields: ['id','fullName', 'personalNumber',{
		name: 'car.model',
		type: 'string',
		mapping : 'car.model'
	},{
		name:'car.serialNum',
		type: 'string',
		mapping: 'car.serialNum'
	}],
	validators: {
		id: 'present'
	},
	proxy: {
		url: 'http://localhost:8096/driver',
		type: 'rest',
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
