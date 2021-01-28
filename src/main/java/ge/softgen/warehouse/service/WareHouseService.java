package ge.softgen.warehouse.service;

import ge.softgen.warehouse.model.WareHouse;

import java.util.List;

public interface WareHouseService {
	void addWareHouse(WareHouse wareHouse) throws Exception;
	void deleteWareHouse(long id);
	List<WareHouse> getAllWareHouses();
}
