Ext.define('SL.view.SupplierGrid', {
	extend: 'Ext.panel.Panel',
	requires: ['SL.model.Supplier'],
	viewModel: {
		stores: {
			suppliers: {
				model: 'SL.model.Supplier',
				autoLoad: true,
				autoSync: false
			}
		}
	},
	items: [{
		xtype: 'grid',
		bind: '{suppliers}',
		reference: 'suppliersGrid',
		plugins: {
			ptype: 'rowediting',
			clicksToEdit: 2,
			removeUnmodified: true,
			errorSummary: true
		},
		columns: [{
			text: 'id',
			dataIndex: 'supplierId',
			flex: 1
		}, {
			text: 'name',
			dataIndex: 'name',
			flex: 1,
		}]
	}]
});
