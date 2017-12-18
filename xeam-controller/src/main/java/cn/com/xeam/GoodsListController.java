package cn.com.xeam;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/goodsList")
public class GoodsListController {
   @Autowired
   private GoodsListService goodsListService;
   /**
    * 查询食品类型控制器
    * @param vo
    * @return
    */
   @ResponseBody
   @RequestMapping("searchGoodsType")
   public Map<String,String>searchGoodsType(@RequestBody Map<String,String> vo){
	   Map<String,String> result = goodsListService.searchGoodsType(vo);
	   return result;
   }
   
   /**
    * 根据食品类型搜索食品列表
    * @param vo
    * @return
    */
	public List<Map<String,String>>searchGoodsListByType(Map<String,String> vo){
		List<Map<String,String>> result = goodsListService.searchGoodsListByType(vo);
		return result;
	}
}
