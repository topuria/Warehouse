Ext.define('SL.view.products.SearchForm', {
	extend: 'Ext.form.Panel',
	border: false,
	bodyPadding: 10,
	layout: 'hbox',
	controller: {
		xclass: 'SL.view.products.SearchFormController'
	},
	fieldDefaults: {
		labelAlign: 'right',
		labelWidth: 150,
		flex: 1
	},
	items: [{
		xtype: 'combobox',
		name: 'supplierId',
		fieldLabel: 'მომწოდებელი',
		queryMode: 'remote',
		editable: false,
		bind: {
			store: '{suppliers}'
		},
		valueField: 'supplierId',
		displayField: 'name'
	}, {
		xtype: 'combobox',
		name: 'wareHouseId',
		fieldLabel: 'საწყობი',
		queryMode: 'remote',
		editable: false,
		bind: {
			store: '{warehouses}'
		},
		valueField: 'wareHouseId',
		displayField: 'name'
	},{
		xtype: 'textfield',
		name: 'model',
		fieldLabel: 'სახელი'
	}, {
		xtype: 'numberfield',
		name: 'priceForAll',
		fieldLabel: 'მთლიანი თანხა'
	}, {
		xtype: 'numberfield',
		name: 'priceForOne',
		fieldLabel: 'საცალო ფასი'
	}],
	buttons: [{
		text: 'Search',
		handler: 'search'
	}, {
		text: 'reset',
		handler: 'resetForm'
	}]
});
