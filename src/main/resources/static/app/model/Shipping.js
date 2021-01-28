Ext.define('SL.model.Shipping', {
	extend: 'Ext.data.Model',
	fields: ['id', {
		name: 'startPlace.name',
		type: 'string',
		mapping: 'startPlace.name'
	}, {
		name: 'endPlace.name',
		type: 'string',
		mapping: 'endPlace.name'
	}, {
		name: 'car.model',
		type: 'string',
		mapping: 'car.model'
	}, {
		name: 'driver.fullName',
		type: 'string',
		mapping: 'driver.fullName'
	}, {
		name: 'product.model',
		type: 'string',
		mapping: 'product.model'
	}],
	validators: {
		id: 'present'
	},
	proxy: {
		url: 'http://localhost:8096/shipping',
		type: 'rest',
		writer: {
			writeRecordId: false,
			writeAllFields: true
		}
	}
});
