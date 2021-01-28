package ge.softgen.warehouse.controller;

import ge.softgen.warehouse.model.Supplier;
import ge.softgen.warehouse.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/supplier")
public class SupplierController {
	private final SupplierService supplierService;

	@Autowired
	public SupplierController(SupplierService supplierService) {
		this.supplierService = supplierService;
	}


	@GetMapping()
	public List<Supplier> getAllSuppliers() {
		return supplierService.getAllSuppliers();
	}

	@PostMapping()
	public void addSupplier(@RequestBody Supplier supplier) throws Exception {
		supplierService.addSupplier(supplier);
	}

	@DeleteMapping()
	public void deleteSupplier(@PathVariable long id) {
		supplierService.deleteSupplier(id);
	}
}
