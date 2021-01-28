package ge.softgen.warehouse.repository;

import ge.softgen.warehouse.model.WareHouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WareHouseRepository extends JpaRepository<WareHouse,Long> {
}
