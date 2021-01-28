package ge.softgen.warehouse.model.helpers;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarHelper {
	private String model;
	private String serialNum;
	private Date createDate;
	private Long driverId;
}
