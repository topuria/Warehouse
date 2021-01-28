Ext.define('SL.model.Supplier', {
	extend: 'Ext.data.Model',
	fields: ['supplierId', 'name'],
	validators: {
		name: 'presence',
	},
	proxy: {
		url: 'http://localhost:8096/supplier',
		type: 'rest',
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
