Ext.define('SL.model.Car', {
	extend: 'Ext.data.Model',
	fields: ['carId','model', 'serialNum', 'createDate'],
	validators: {
		id: 'present'
	},
	proxy: {
		url: 'http://localhost:8096/car',
		type: 'rest',
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
