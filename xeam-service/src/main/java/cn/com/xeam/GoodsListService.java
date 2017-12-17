package cn.com.xeam;

import java.util.List;
import java.util.Map;

public interface GoodsListService {
	/**
	 * 查询食品类型
	 * @param vo
	 * @return
	 */
	public Map<String,String> searchGoodsType(Map<String,String> vo);
	/**
     * 根据食品类型搜索食品列表
     * @param vo
     * @return
     */
	public List<Map<String,String>>searchGoodsListByType(Map<String,String> vo);
}
