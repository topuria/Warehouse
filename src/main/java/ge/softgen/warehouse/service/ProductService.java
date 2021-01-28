package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.helpers.ProductHelper;
import ge.softgen.warehouse.model.Product;
import javassist.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {
	void addProduct(ProductHelper productHelper) throws NotFoundException;
	void deleteProduct(long id);
	List<Product> getAllProduct();
	Product editProduct(Product product);
	Page<Product> search(String model, Double amountForAll, String supplier, String warehouse, Pageable pageable);
}
