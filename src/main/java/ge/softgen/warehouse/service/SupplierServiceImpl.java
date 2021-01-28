package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Supplier;
import ge.softgen.warehouse.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierServiceImpl implements SupplierService {
	private final SupplierRepository supplierRepository;

	@Autowired
	public SupplierServiceImpl(SupplierRepository supplierRepository) {
		this.supplierRepository = supplierRepository;
	}

	@Override
	public void addSupplier(Supplier supplier) throws Exception {
		if(supplier!=null){
			supplierRepository.save(supplier);
			System.out.println("Supplier Added");
		}else{
			throw new Exception("Supplier is Null and Cannot Be added");
		}
	}

	@Override
	public void deleteSupplier(long id) {
		supplierRepository.deleteById(id);
		System.out.println("Supplier Deleted");
	}

	@Override
	public List<Supplier> getAllSuppliers() {
		return supplierRepository.findAll();
	}
}
