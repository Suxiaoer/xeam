package cn.com.xeam;

import java.util.List;
import java.util.Map;

public interface GoodsListService {
	/**
	 * ��ѯʳƷ����
	 * @param vo
	 * @return
	 */
	public Map<String,String> searchGoodsType(Map<String,String> vo);
	/**
     * ����ʳƷ��������ʳƷ�б�
     * @param vo
     * @return
     */
	public List<Map<String,String>>searchGoodsListByType(Map<String,String> vo);
}
