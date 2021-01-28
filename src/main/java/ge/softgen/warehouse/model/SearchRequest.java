package ge.softgen.warehouse.model;

import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

@Data
public class SearchRequest {

	private static Integer page;
	private static Integer pageSize;

	public static int getPage() {
		return page == null ? 1 : page;
	}

	public static int getPageSize() {
		if (pageSize == null || pageSize == 0) {
			return 10;
		}
		return pageSize;
	}

	public static PageRequest toPageRequest(Sort sort) {
		return PageRequest.of(getPage() - 1, getPageSize(), sort);
	}
}
