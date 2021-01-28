package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Driver;

import java.util.List;

public interface DriverService {
	List<Driver> getAll();
	void addDriver(Driver driver) throws Exception;
	void delDriver(Driver driver);
}
