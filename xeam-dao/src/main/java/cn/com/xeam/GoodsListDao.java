package cn.com.xeam;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

public interface GoodsListDao {
	/**
	 * ��ѯʳƷ����
	 * @param vo
	 * @return
	 */
	public Map<String,String> searchGoodsType(@Param("vo") Map<String,String> vo);
    /**
     * ����ʳƷ��������ʳƷ�б�
     * @param vo
     * @return
     */
	public List<Map<String,String>>searchGoodsListByType(@Param("vo") Map<String,String> vo);
}
