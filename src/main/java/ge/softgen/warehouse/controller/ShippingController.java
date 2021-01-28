package ge.softgen.warehouse.controller;


import ge.softgen.warehouse.model.Shipping;
import ge.softgen.warehouse.model.helpers.ShippingHelper;
import ge.softgen.warehouse.service.ShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/shipping")
public class ShippingController {
	private final ShippingService shippingService;

	@Autowired
	public ShippingController(ShippingService shippingService) {
		this.shippingService = shippingService;
	}

	@GetMapping
	public List<Shipping> getAllShipping() {
		return shippingService.getAll();
	}

	@PostMapping
	public void addShipping(@RequestBody ShippingHelper shipping) throws Exception {
		shippingService.addShipping(shipping);
	}

	@DeleteMapping
	public void delShipping(@RequestBody Shipping shipping) {
		shippingService.delShipping(shipping);
	}
}
