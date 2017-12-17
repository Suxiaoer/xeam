requirejs.config({
	baseUrl:"../../js",
	paths:{
	   common:"common/common"
	}
});
define(["common"],function(common){
	return {
		//查询食品类型
		searchGoodsType: function(){
//	     	var url = "goodsList/searchGoodsType";
//	     	var vo = {name:"zs"};
//	     	common.postAjax(url,vo,function(data){
//	     		debugger;
//	     	});
		},
		//根据类型搜索食品
		searchGoodsListByType: function(){
			
		},
		//用户登录
		login: function(){
			
		},
		//用户注册
		register: function(){
			
		},
		//添加货物到购物车
		addGoods2Cart: function(){
			
		},
		//支付
		pay4Goods: function(){
			
		}
	};
});