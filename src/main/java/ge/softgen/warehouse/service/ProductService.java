package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.ProductHelper;
import ge.softgen.warehouse.model.Product;
import javassist.NotFoundException;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
	void addProduct(ProductHelper productHelper) throws NotFoundException;
	void deleteProduct(long id);
	List<Product> getAllProduct();
	Product editProduct(Product product);
	Page<Product> search(String model,double amountForAll,String supplier,String warehouse);
}
