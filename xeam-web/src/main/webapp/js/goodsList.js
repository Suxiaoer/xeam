requirejs.config({
	baseUrl:"../libs/webix",
	shim:{
		webix:{
			deps:[],
			exports:"webix"
		}
	},
	paths:{
		goodsListOp:"../../js/goodsListOp",
		common:"../../js/common/common"
	}
});
require(["webix","goodsListOp","common"],function(webix,opObj,common){
	  debugger;
	  opObj.searchGoodsType();
	  var accordion = webix.ui({
          view:"accordion",
          //scroll:"xy",
          cols:[{
	            rows:[
	            	{
	            		view:"accordion",
	            		type:"line",
	            		height: 100,
	            		cols:[
	            			{
	            				view:"template",
	            				width: 140,
	            				template:function(){
	            					return "<div class='xeam-log'></div>";
	            				}
	            			},
	            			{
	            				view:"template",
	            				template:function(){
	            					return "<div>查询条件区域</div>";
	            				}
	            			},
	            			{
	            				view:"template",
	            				width: 200,
	            				template:function(){
	            					return "<div>注册登录区域</div>";
	            				}
	            			}
	            		]
	            	},
	            	{
	            		view:"scrollview",
	            		scroll:"xy",
	            		body:{
		            	    cols:[
		            			{ template:"Row 2",width: 400,height: 1000},
		             			{ template:"Row 2",width: 400},
		             			{ template:"Row 2",width: 400},
		             			{ template:"Row 2",width: 400}
		                     ]
	            	    }
	            	}
	            ]
         }]
      });
});