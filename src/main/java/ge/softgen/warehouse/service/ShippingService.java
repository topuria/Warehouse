package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Shipping;
import ge.softgen.warehouse.model.helpers.ShippingHelper;

import java.util.List;

public interface ShippingService {
	List<Shipping> getAll();
	void addShipping(ShippingHelper shipping) throws Exception;
	void delShipping(Shipping shipping);
}
