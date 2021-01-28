package ge.softgen.warehouse.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@Entity()
@Table(name = "cars")
public class Car {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "model")
	private String model;
	@Column(name = "serial_number")
	private String serialNum;
	@Column(name = "create_date")
	private String createDate;
}
