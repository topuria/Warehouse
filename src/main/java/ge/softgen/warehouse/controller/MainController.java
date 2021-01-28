package ge.softgen.warehouse.controller;

import ge.softgen.warehouse.model.ProductHelper;
import ge.softgen.warehouse.model.Product;
import ge.softgen.warehouse.service.ProductService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class MainController {
	private final ProductService productService;

	@Autowired
	public MainController(ProductService productService) {
		this.productService = productService;

	}

	@GetMapping()
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@GetMapping("/search")
	public Page<Product> search(@RequestParam(required = false) String model,
								@RequestParam(required = false)double amountForAll,
								@RequestParam(required = false)String supplier,
								@RequestParam(required = false)String warehouse) {
		return productService.search(model,amountForAll,supplier,warehouse);
	}

	@PostMapping()
	public void addProduct(@RequestBody ProductHelper productHelper) throws NotFoundException {
		productService.addProduct(productHelper);
	}

	@PutMapping()
	public Product editProduct(@RequestBody Product product) {
		return productService.editProduct(product);
	}

	@DeleteMapping("del/product/{id}")
	public void deleteProduct(@PathVariable long id) {
		productService.deleteProduct(id);
	}


}
