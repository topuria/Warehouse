Ext.define('SL.view.products.ProductPanel', {
	extend: 'Ext.panel.Panel',
	layout: {
		type: 'vbox',
		align: 'stretch',
	},
	items: [{
		xclass: 'SL.view.products.SearchForm',
	}, {
		xclass: 'SL.view.products.Grid',
		flex: 1,
	}],
});
