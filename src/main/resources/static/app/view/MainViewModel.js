Ext.define('SL.view.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	requires: ['SL.model.Product', 'SL.model.Supplier', 'SL.model.Warehouse','SL.model.Car','SL.model.Driver','SL.model.Shipping'],

	stores: {
		products: {
			model: 'SL.model.Product',
			autoLoad: true
		},

		suppliers: {
			model: 'SL.model.Supplier',
			autoLoad: true
		},

		warehouses: {
			model: 'SL.model.Warehouse',
			autoLoad: true
		},
		cars:{
			model:'SL.model.Car',
			autoLoad:true
		},
		drivers:{
			model:'SL.model.Driver',
			autoLoad:true
		},
		shipping: {
			model: 'SL.model.Shipping',
			autoLoad: true
		},

		navItems: {
			type: 'tree',
			root: {
				expanded: true,
				children: [{
					text: 'პროდუქტები',
					iconCls: 'fa fa-home',
					className: 'SL.view.products.ProductPanel',
					leaf: true
				}, {
					text: 'მომწოდებლები',
					iconCls: 'fa fa-user',
					className: 'SL.view.suppliers.SupplierGrid',
					leaf: true
				}, {
					text: 'მძღოლები',
					iconCls: 'fa fa-user',
					className: 'SL.view.drivers.DriversGrid',
					leaf: true
				}, {
					text: 'გადაზიდვები',
					iconCls: 'fa fa-user',
					className: 'SL.view.shippings.ShippingsGrid',
					leaf: true
				}, {
					text: 'მანქანანები',
					iconCls: 'fa fa-user',
					className: 'SL.view.cars.CarsGrid',
					leaf: true
				}, {
					text: 'საწყობები',
					iconCls: 'fa fa-user',
					className: 'SL.view.warehouses.WarehouseGrid',
					leaf: true
				}]
			}
		}
	}
})
