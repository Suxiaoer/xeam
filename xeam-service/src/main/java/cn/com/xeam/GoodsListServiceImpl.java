package cn.com.xeam;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.com.xeam.dao.GoodsListDAO;
@Service
public class GoodsListServiceImpl implements GoodsListService {
	@Autowired
	private GoodsListDAO dao;
	/*
     * (non-Javadoc)
     * @see cn.com.xeam.GoodsListService#searchGoodsType(java.util.Map)
     */
	@Override
	public Map<String, String> searchGoodsType(Map<String, String> vo) {
		Map<String,String> result = dao.searchGoodsType(vo);
		return result;
	}
	/*
	 * (non-Javadoc)
	 * @see cn.com.xeam.GoodsListService#searchGoodsListByType(java.util.Map)
	 */
	@Override
	public List<Map<String,String>>searchGoodsListByType(Map<String,String> vo){
		List<Map<String,String>> result = dao.searchGoodsListByType(vo);
		return result;
	}

}
