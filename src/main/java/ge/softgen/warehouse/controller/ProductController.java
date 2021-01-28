package ge.softgen.warehouse.controller;

import ge.softgen.warehouse.model.helpers.ProductHelper;
import ge.softgen.warehouse.model.Product;
import ge.softgen.warehouse.service.ProductService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
	private final ProductService productService;

	@Autowired
	public ProductController(ProductService productService) {
		this.productService = productService;

	}

	@GetMapping()
	public List<Product> getAllProduct() {
		return productService.getAllProduct();
	}

	@GetMapping("/search")
	public Page<Product> search(@RequestParam(required = false) String model,
								@RequestParam(required = false)Double amountForAll,
								@RequestParam(required = false)String supplier,
								@RequestParam(required = false)String warehouse,
								@RequestParam(value = "limit", required = false, defaultValue = "25") int size,
								@RequestParam(value = "page", required = false, defaultValue = "1") int page) {
		return productService.search(model, amountForAll, supplier, warehouse, PageRequest.of(page - 1, size, Sort.Direction.DESC, "id"));
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
