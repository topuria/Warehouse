package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Car;

import java.util.List;

public interface CarService {
	List<Car> getAll();
	void addCar(Car car) throws Exception;
	void delCar(Car car);
}
