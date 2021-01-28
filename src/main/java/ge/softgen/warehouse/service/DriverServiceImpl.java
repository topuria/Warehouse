package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.Driver;
import ge.softgen.warehouse.repository.DriverRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverServiceImpl implements DriverService {
	private final DriverRepository driverRepository;

	@Autowired
	public DriverServiceImpl(DriverRepository driverRepository){
		this.driverRepository = driverRepository;
	}
	@Override
	public List<Driver> getAll() {
		return driverRepository.findAll();
	}

	@Override
	public void addDriver(Driver driver) throws Exception {
		if(driver!=null){
			driver.setDriversId(null);
			driverRepository.save(driver);
			System.out.println("driver added");
		}else {
			throw new Exception("შეიყვანე მონაცემები");
		}
	}

	@Override
	public void delDriver(Driver driver) {
		driverRepository.delete(driver);
	}
}
