package ge.softgen.warehouse.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "shippings")
public class Shipping {
	public Shipping(WareHouse startPlace, WareHouse endPlace, Car car, Driver driver, Product product) {
		this.startPlace = startPlace;
		this.endPlace = endPlace;
		this.car = car;
		this.driver = driver;
		this.product = product;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "warehouse_id_start", referencedColumnName = "warehouse_id")
	private WareHouse startPlace;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "warehouse_id_end", referencedColumnName = "warehouse_id")
	private WareHouse endPlace;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "car_id", referencedColumnName = "id")
	private Car car;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "driver_id", referencedColumnName = "id")
	private Driver driver;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "product_id", referencedColumnName = "id")
	private Product product;

}
