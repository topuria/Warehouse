package ge.softgen.warehouse.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "warehouses")
public class WareHouse {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "warehouse_id")
	private long wareHouseId;

	@Column(name = "name")
	private String name;
}
