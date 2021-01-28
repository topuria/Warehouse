package ge.softgen.warehouse.controller;

import ge.softgen.warehouse.model.Car;
import ge.softgen.warehouse.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/car")
public class CarController {
	private final CarService carService;

	@Autowired
	public CarController(CarService carService) {
		this.carService = carService;
	}

	@GetMapping()
	public List<Car> getCars() {
		return carService.getAll();
	}

	@PostMapping
	public void addCar(@RequestBody Car car) throws Exception {
		carService.addCar(car);
	}

	@DeleteMapping
	public void delCar(@RequestBody Car car) {
		carService.delCar(car);
	}
}
