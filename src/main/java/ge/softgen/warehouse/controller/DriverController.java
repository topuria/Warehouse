package ge.softgen.warehouse.controller;

import ge.softgen.warehouse.model.Driver;
import ge.softgen.warehouse.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/driver")
public class DriverController {
	private final DriverService driverService;

	@Autowired
	public DriverController(DriverService driverService){
		this.driverService = driverService;
	}

	@GetMapping
	public List<Driver> getDrivers(){
		return driverService.getAll();
	}

	@PostMapping
	public void addDriver(@RequestBody Driver driver) throws Exception {
		driverService.addDriver(driver);
	}

	@DeleteMapping
	public void delDriver(@RequestBody Driver driver){
		driverService.delDriver(driver);
	}
}
