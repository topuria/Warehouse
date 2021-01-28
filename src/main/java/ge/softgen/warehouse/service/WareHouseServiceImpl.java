package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.WareHouse;
import ge.softgen.warehouse.repository.WareHouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WareHouseServiceImpl implements WareHouseService {
	private final WareHouseRepository wareHouseRepository;

	@Autowired
	public WareHouseServiceImpl(WareHouseRepository wareHouseRepository) {
		this.wareHouseRepository = wareHouseRepository;
	}

	@Override
	public void addWareHouse(WareHouse wareHouse) throws Exception {
		if(wareHouse!=null){
			wareHouseRepository.save(wareHouse);
		}else{
			throw new Exception("WareHouse Is null");
		}
	}

	@Override
	public void deleteWareHouse(long id) {

	}

	@Override
	public List<WareHouse> getAllWareHouses() {
		return wareHouseRepository.findAll();
	}
}
