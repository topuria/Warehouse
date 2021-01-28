package ge.softgen.warehouse.model.helpers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductHelper {
	private String model;
	private int capacity;
	private double priceForAll;
	private long supplierId;
	private long wareHouseId;
}
