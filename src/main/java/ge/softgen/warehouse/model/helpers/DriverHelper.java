package ge.softgen.warehouse.model.helpers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class DriverHelper {
	private String fullName;
	private String personalNumber;
	private Long carId;
}
