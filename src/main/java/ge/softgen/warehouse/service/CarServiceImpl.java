package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Car;
import ge.softgen.warehouse.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceImpl implements CarService{
	private final CarRepository carRepository;

	@Autowired
	public CarServiceImpl(CarRepository carRepository){
		this.carRepository = carRepository;
	}

	@Override
	public List<Car> getAll() {
		return carRepository.findAll();
	}

	@Override
	public void addCar(Car car) throws Exception {
		if(car!=null){
			car.setId(null);
			carRepository.save(car);
			System.out.println("car added");
		}else{
			throw new Exception("შეავსე ველები");
		}

	}

	@Override
	public void delCar(Car car) {
		carRepository.delete(car);
	}
}
