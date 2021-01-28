Ext.define('SL.model.Warehouse', {
	extend: 'Ext.data.Model',
	fields: ['wareHouseId', 'name'],
	proxy: {
		type: 'rest',
		url: 'http://localhost:8096/warehouse',
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
