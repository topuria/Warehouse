package ge.softgen.warehouse.model;

import lombok.Data;
import lombok.experimental.FieldNameConstants;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "products")
@FieldNameConstants
public class Product {
	public Product() {

	}

	public Product(String model, int capacity, double priceForAll, Supplier supplier, WareHouse wareHouse) {
		this.model = model;
		this.capacity = capacity;
		this.priceForAll = priceForAll;
		this.supplier = supplier;
		this.wareHouse = wareHouse;
		this.priceForOne = priceForAll / capacity;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long Id;
	@Column(name = "model", nullable = false)
	private String model;
	@Column(name = "capacity", nullable = false)
	private int capacity;
	@Column(name = "full_price", nullable = false)
	private double priceForAll;
	@Column(name = "ones_price", nullable = false)
	private double priceForOne;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "supplier_id", referencedColumnName = "supplier_id")
	private Supplier supplier;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "warehouse_id", referencedColumnName = "warehouse_id")
	private WareHouse wareHouse;
	@Column(name = "create_date", nullable = false,
			updatable = false, columnDefinition = "timestamp default now()")
	public LocalDateTime createDate;
	@PrePersist
	private void prePersist() {
		this.createDate = LocalDateTime.now();
	}


}
