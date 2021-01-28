package ge.softgen.warehouse.model.helpers;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShippingHelper {
	private Long warehouseStartPlaceId;
	private Long warehouseEndPlaceId;
	private Long carId;
	private Long driverId;
	private Long productId;
}
