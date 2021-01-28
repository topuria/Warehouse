package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.*;
import ge.softgen.warehouse.model.helpers.ProductHelper;
import ge.softgen.warehouse.repository.ProductRepository;
import ge.softgen.warehouse.repository.SupplierRepository;
import ge.softgen.warehouse.repository.WareHouseRepository;
import javassist.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Predicate;
import java.util.List;

import static org.apache.logging.log4j.util.Strings.isNotEmpty;

@Service
public class ProductServiceImpl implements ProductService {
	private final ProductRepository productRepository;
	private final SupplierRepository supplierRepository;
	private final WareHouseRepository wareHouseRepository;

	public ProductServiceImpl(ProductRepository productRepository, SupplierRepository supplierRepository, WareHouseRepository wareHouseRepository) {
		this.productRepository = productRepository;
		this.supplierRepository = supplierRepository;
		this.wareHouseRepository = wareHouseRepository;
	}

	@Override
	public void addProduct(ProductHelper productHelper) throws NotFoundException {
		if (productHelper != null) {
			Supplier supplier = supplierRepository.getOne(productHelper.getSupplierId());
			WareHouse wareHouse = wareHouseRepository.getOne(productHelper.getWareHouseId());
			Product product1 = new Product(productHelper.getModel(), productHelper.getCapacity(), productHelper.getPriceForAll(), supplier, wareHouse);
			productRepository.save(product1);
			System.out.println("Successfully Added!!!");
		}else{
			throw new NotFoundException("Product is Null or There is Some Problem To Add");
		}
	}

	@Override
	public void deleteProduct(long id) {
		productRepository.deleteById(id);
		System.out.println("Product Deleted SuccessFully");
	}

	@Override
	public List<Product> getAllProduct() {
		return productRepository.findAll();
	}

	@Override
	public Product editProduct(Product product) {
		Product product1 = productRepository.findById(product.getId()).get();
		product1.setModel(product.getModel());
		product1.setCapacity(product.getCapacity());
		product1.setPriceForAll(product.getPriceForAll());
		product1.setPriceForOne(product.getPriceForOne());
		productRepository.save(product1);
		return product1;
	}

	@Override
	public Page<Product> search(String model, Double amountForAll, String supplier, String warehouse, Pageable pageable) {
		return productRepository.findAll((root, query, cb) -> {
			Predicate predicate = cb.conjunction();
			if (isNotEmpty(model)) {
				predicate = cb.and(predicate, cb.like(root.get(Product.Fields.model), model + "%"));
			}
			if ( amountForAll!= null) {
				predicate = cb.and(predicate, cb.greaterThanOrEqualTo(root.get(Product.Fields.priceForAll), amountForAll));
			}
			if (supplier != null) {
				predicate = cb.and(predicate, cb.like(root.get(Product.Fields.supplier), supplier));
			}
			if (warehouse != null) {
				predicate = cb.and(predicate, cb.like(root.get(Product.Fields.wareHouse), warehouse));
			}
			return predicate;
		},pageable);
	}
}
