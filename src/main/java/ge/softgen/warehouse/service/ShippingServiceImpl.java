package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Shipping;
import ge.softgen.warehouse.model.helpers.ShippingHelper;
import ge.softgen.warehouse.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShippingServiceImpl implements ShippingService {
	private final ShippingRepository shippingRepository;
	private final CarRepository carRepository;
	private final DriverRepository driverRepository;
	private final ProductRepository productRepository;
	private final WareHouseRepository wareHouseRepository;
	@Autowired
	public ShippingServiceImpl(ShippingRepository shippingRepository, CarRepository carRepository, DriverRepository driverRepository, ProductRepository productRepository, WareHouseRepository wareHouseRepository){
		this.shippingRepository = shippingRepository;
		this.carRepository = carRepository;
		this.driverRepository = driverRepository;
		this.productRepository = productRepository;
		this.wareHouseRepository = wareHouseRepository;
	}

	@Override
	public List<Shipping> getAll() {
		return shippingRepository.findAll();
	}

	@Override
	public void addShipping(ShippingHelper shipping) throws Exception {
		if(shipping!=null){
			Shipping shipping1 = new Shipping(wareHouseRepository.findById(shipping.getWarehouseStartPlaceId()).get(),
											  wareHouseRepository.findById(shipping.getWarehouseEndPlaceId()).get(),
											  carRepository.findById(shipping.getCarId()).get(),
											  driverRepository.findById(shipping.getDriverId()).get(),
											  productRepository.findById(shipping.getProductId()).get());
			shippingRepository.save(shipping1);
		}else{
			throw new Exception("ჩაწერე მონაცემები");
		}
	}

	@Override
	public void delShipping(Shipping shipping) {
		shippingRepository.delete(shipping);
	}
}
