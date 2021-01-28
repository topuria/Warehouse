package ge.softgen.warehouse.controller;

import ge.softgen.warehouse.model.WareHouse;
import ge.softgen.warehouse.service.WareHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/warehouse")
public class WareHouseController {
	private final WareHouseService wareHouseService;

	@Autowired
	public WareHouseController(WareHouseService wareHouseService) {
		this.wareHouseService = wareHouseService;
	}
	@GetMapping()
	public List<WareHouse> getAllWareHouses() {
		return wareHouseService.getAllWareHouses();
	}

	@PostMapping()
	public void addWareHouse(@RequestBody WareHouse wareHouse) throws Exception {
		wareHouseService.addWareHouse(wareHouse);
	}

	@DeleteMapping("/{id}")
	public void deleteWareHouse(@PathVariable long id) {
		wareHouseService.deleteWareHouse(id);
	}

}
