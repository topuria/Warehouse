package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Supplier;

import java.util.List;

public interface SupplierService {
	void addSupplier(Supplier supplier) throws Exception;
	void deleteSupplier(long id);
	List<Supplier> getAllSuppliers();
}
