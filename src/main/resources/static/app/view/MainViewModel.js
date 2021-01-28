Ext.define('SL.view.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	requires: ['SL.model.Product', 'SL.model.Supplier','SL.model.Warehouse'],

	stores: {
		products: {
			model: 'SL.model.Product',
		},

		suppliers: {
			model: 'SL.model.Supplier',
		},

		warehouses:{
			model:'SL.model.Warehouse',
		},

		navItems: {
			type: 'tree',
			root: {
				expanded: true,
				children: [{
					text: 'რეგისტრაცია',
					iconCls: 'fa fa-user',
					className: 'SL.view.RegistrationView',
					leaf: true
				}, {
					text: 'მომწოდებლები',
					iconCls: 'fa fa-user',
					className: 'SL.view.SupplierGrid',
					leaf: true
				}, {
					text: 'პროდუქტები',
					iconCls: 'fa fa-home',
					className: 'SL.view.products.ProductPanel',
					leaf: true
				}]
			}
		}
	}
})
