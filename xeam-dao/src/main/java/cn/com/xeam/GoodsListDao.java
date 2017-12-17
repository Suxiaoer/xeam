package cn.com.xeam;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface GoodsListDao {
	/**
	 * 查询食品类型
	 * @param vo
	 * @return
	 */
	public Map<String,String> searchGoodsType(@Param("vo") Map<String,String> vo);
    /**
     * 根据食品类型搜索食品列表
     * @param vo
     * @return
     */
	public List<Map<String,String>>searchGoodsListByType(@Param("vo") Map<String,String> vo);
}
