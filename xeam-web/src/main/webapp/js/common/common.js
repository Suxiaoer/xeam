var SUECommon={
  //得到连接地址后面的拼接参数，封装成一个对象返回	
  getUrlParam: function(){
	  var url = window.parent.location.href || window.location.href;
	  var result = null;
	  if(url.indexOf("?") != -1){
		  var paramStr = url.substring(url.indexOf("?")+1);
		  var paramArray = paramStr.split("&");
		  result = {};
		  var tempArray = null;
		  $.each(paramArray,function(index,item){
			  tempArray = item.split("=");
			  if(tempArray && tempArray.length == 2){
				  if((tempArray[0]+"").length > 200){
					  result["r"] = tempArray[1]; 
				  }else{
					  result[tempArray[0]+""] = tempArray[1]; 
				  }
			  }
		  });
	  }
	  return result;
  },
  //关闭弹出窗口
  closeDialog: function(){
	  $(".l-window-close").click();
  },
  
  //ligerui grd end
  
  
  //ligerui dialog end
  //得到请求上下文根
  getContextPath: function(){
	 var url = window.location.href;
	 if(url.indexOf("/xeam-web/") != -1){
		return "xeam-web";
	 }
	 return "";
  },
  processData: function(data){
	  if(Array.isArray(data)){
		  $.each(data,function(index,item){
			  for(var attr in item){
				  if(item[attr] == null){
					  item[attr] = "";
				  }
			  }
		  });	  
	  }else{
		  for(var attr in data){
			  if(data[attr] == null){
				  data[attr] = "";
			  }
		  }
	  }
	 
  },
 
  //打开弹出窗口
  openDialog: function(msg){
		$("#warnContent").html(msg);
		$("#warnDialog").dialog({
		  resizable: false,
          height: "auto",
          width: 300,
          height: 200,
          modal: true,
          buttons: {
              "关闭": function() {
                  $( this ).dialog( "close" );
              }
          }
		});
  },
  //post异步请求
  postAjax: function(url,vo,callback,config){
	var self = this;
  	var param = JSON.stringify(vo);
  	var contextPath = self.getContextPath();
  	if(contextPath){
  		url = "/" + contextPath + "/" + url; 	
  	}else{
  		url = contextPath + "/" + url; 	
  	}
  	
  	if(url.indexOf(".do") == -1){
  		url += ".do";
  	}
  	
  	var async =  true;
  	if(config){
  		async = !config.sync;
  	}
  	
  	$.ajax({
  		type:"post",
  		url:url,
  		async:async,
  		dataType:"json",
  		data: param,
  		contentType:"application/json;charset=utf-8",
  		success:function(data){
  			if(callback){
  				callback.call(this,data);
  			}
  		}
  	});  
  },
  //校验手机号码
  checkMobilePhone: function(value){
	  var checkResult = true;
	  if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(value))){ 
		  checkResult = false;
	  }
	  return checkResult;
  },
  //返回固定电话号码
  checkFixedPhone: function(value){
	  var rep = "/^(\d{2,3})(\-?\d{4})\-?\d{4})?$/";
	  if(!rep.test(value)){
		  return false;
	  }
	  return true;
  },
  //校验包括>=0的整数
  checkPostiveNumberAndZero: function(value){
	  var checkResult = true;
	  if(!(/^\d+$/.test(value))){
		  checkResult = false;
	  }
	  return checkResult;
  },
  //校验邮箱地址
  checkEmail: function(value){
	  var rep = /\w@\w*\.\w/;
	  if(!rep.test(value)){
		  return false;
	  }
	  return true;
  },
  //设置对象到隐藏域
  setObject: function(key,value){
	  window.setTimeout(function(){
		  if(typeof value == "object"){
			  value = JSON.stringify(value);
		  }
		  var inputDoc = document.getElementById(key);
		
		  if(!inputDoc){
			  inputDoc = document.createElement("input");
			  $(inputDoc).attr("type","hidden");
			  document.body.appendChild(inputDoc);
		  }
		  
		  $(inputDoc).attr("id",key);
		  $(inputDoc).data(key,value);
	  },100);
  },
  //根据传入的键得到对应的对象
  getObject: function(key){
	  var self = this;
	  var inputDoc = document.getElementById(key);
	  if(!inputDoc && window.opener){
		  inputDoc = window.opener.document.getElementById(key);
	  }
	  var resultStr = $(inputDoc).data(key);
	  if(self.startsWith(resultStr,"{") && self.endsWidth(resultStr,"}")){
		 return JSON.parse(resultStr); 
	  }else if(self.startsWith(resultStr,"[") && self.endsWidth(resultStr,"]")){
		  return JSON.parse(resultStr);
	  }
	  return resultStr;
  },
  showWarnMessage: function(msg){
	  layer.alert("温馨提示：" + msg,{icon: 0});
  },
  confirm: function(msg,callback){
	  var msg = "温馨提示：" + msg;
	  layer.confirm(msg,{icon:3,title:"确认操作提示"},function(index){
		  if(callback){
			  callback.call(this);
		  }
		  layer.close(index); 
	  });
  },
  showMessage: function(msg){
	  layer.alert("温馨提示：" + msg,{icon: 1});
  },
  //判断字符串以指定标志开始
  startsWith: function(str,flag){
	  if(str && str.indexOf(flag) == 0){
		  return true;
	  }
	  return false;
  },
  //判断字符串以指定标志结束
  endsWidth: function(str,flag){
	 if(str && str.lastIndexOf(flag) == str.length -1){
		 return true;
	 }  
	 return false;
  },
  
  //将按钮钝化
  disabledBtns: function(btns){
	  var tempBtn = null;
	  $.each(btns,function(index,item){
		  tempBtn = $("."+item) || $("#"+item) || $("[name='"+item+"']");
		  $(tempBtn).attr("disabled",true);
		  $(tempBtn).addClass("btn_disabled");
	  });
  },
  //激活按钮
  activeBtns: function(btns){
	  var tempBtn = null;
	  $.each(btns,function(index,item){
		  tempBtn = $("."+item) || $("#"+item) || $("[name='"+item+"']");
		  $(tempBtn).attr("disabled",false);
		  $(tempBtn).removeClass("btn_disabled");
	  });
  },
  clearSelectValue: function(selectObj){
	  $(selectObj).next("div").find("input").val("-");
	  $(selectObj).attr("value","-");
  },
  //设置值
  clearValues: function(id){
	  var self = this;
	  var targetObj = $("#" + id);
      var valuesObj = targetObj.find(".form");
      var tempName = null;
      var type = null;
	  $.each(valuesObj,function(index,item){
    	   tempTagName = item.tagName;
    	   tempName = $(item).attr("name") || $(item).attr("id");
    	   type = $(item).attr("type");
    	   if(tempTagName == "INPUT"){
    		 if(type == "text" || type == "number" || !type){
    			 $(item).val(""); 
    		 }else if(type == "radio" || type == "checkbox"){
    			 $(item).attr("checked",false) 
    		 } 
    	   }else if(tempTagName == "TEXTAREA"){
    		   $(item).val("");
    		   $(item).html("");
    	   }else if(tempTagName == "SELECT"){
    		   self.clearSelectValue(item);
    	   }
       });
  },
  //导出
  doExport: function(url,param,excelVO,callback){
	  var self = this;
	  var headers = excelVO.headers;
	  var bodyList = excelVO.bodyList || [];
	  var tempObj = null;
	  var result = null;
	  self.postAjax(url,param,function(data){
		  if(Array.isArray(data)){
			 //不是分页查询
			 result = data;
		  }else{
			 //分页查询
			 result = data.result;
		  }
		  
		  $(result).each(function(index,item){
			  tempObj = {};
			  for(var i = 0; i < headers.length; i++){
				  tempObj[headers[i]["id"]+""] = item[headers[i]["id"]+""] || null;
			  }
			  bodyList.push(tempObj);
		  });
		  excelVO.bodyList = bodyList;
		  var bodyStr = JSON.stringify(excelVO);
		  
		  var excelUrl = "/" + self.getContextPath() + "/export";
		  var exportFrm = document.getElementById("sueExportFrm");
		  var frm = null;
		  if(exportFrm){
			  frm = exportFrm;
		  }else{
			  frm = document.createElement("form"); 
			  $(frm).hide();
			  var input = document.createElement("input");
			  var submitBtn = document.createElement("input");
			  $(input).attr("type","hidden");
			  $(input).attr("name","bodyStr");
			  $(input).attr("value",bodyStr);
			  $(submitBtn).attr("type","submit");
			  $(submitBtn).attr("id","sueSubmitBtn4Export");
			  
			  $(frm).append(input);
			  $(frm).append(submitBtn);
			  $(frm).attr("method","POST");
			  $(frm).attr("id","sueExportFrm");
			  $(frm).attr("action",excelUrl);
			  
			  $(document.body).append(frm);
		  }
		  var submitBtn4Export = $("#sueSubmitBtn4Export");
		  if(submitBtn4Export && submitBtn4Export.length > 0){
			  submitBtn4Export.click();
		  }
	  });
  },
  //处理参数
  processParam: function(param){
	  for(var attr in param){
		  if(param[attr] == "" || param[attr] == "-"){
			  param[attr] = null;
		  }
	  }
  },
  //输入框按下回车后绑定搜索事件
  bindSearchEvent: function(id,callback){
	  var targetObj = $("#" + id);
      var valuesObj = targetObj.find(".form");
      var tempTagName = null;
      var type = null;
      $.each(valuesObj,function(index,item){
   	   tempTagName = item.tagName;
   	   type = $(item).attr("type");
   	   if(tempTagName == "INPUT"){
   		 if(type == "text" || type == "number" || !type){
   			 $(item).unbind("keyup").bind("keyup",function(){
   				 if(event){
   					 var keyCode = event.charCode || event.keyCode;
   					 if(keyCode == "13" && callback){
   						 callback.call(this);
   					 }
   				 }
   			 });
   		 }
   	   }
      });
  },
  //根据id得到封装表单条件值
  getValues: function(id){
       var targetObj = $("#" + id);
       var valuesObj = targetObj.find(".form");
       var tempTagName = null;
       var result = {};
       var tempName = null;
       var type = null;
       $.each(valuesObj,function(index,item){
    	   tempTagName = item.tagName;
    	   tempName = $(item).attr("name") || $(item).attr("id");
    	   type = $(item).attr("type");
    	   if(tempTagName == "INPUT"){
    		 if(type == "text" || type == "number" || !type){
    			 result[tempName] = $(item).val(); 
    		 }else if(type == "radio"){
    			 if($(item).attr("checked") == "checked"){
    				 result[tempName] = $(item).val();
    			 }
    		 }else if(type == "checkBox"){
    			 if($(item).attr("checked") == "checked"){
    				 result[tempName] = "1";
    			 }
    		 } 
    	   }else if(tempTagName == "TEXTAREA"){
    		   result[tempName] = $(item).val() || $(item).html();
    	   }else if(tempTagName == "SELECT"){
    		   result[tempName] = $(item).val(); 
    	   }
       });
       return result;
	},
	setCookie: function(name,value){
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	},
	getCookie: function(name){
		var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg))
		return unescape(arr[2]);
		else
		return null;
	}
	
}
var common = SUECommon;
requirejs.config({
	baseUrl: (function(){
		var url = "../../libs/jquery";
		var hrefUrl = window.location.href;
		if(hrefUrl.indexOf("xeam-web") != -1){
			url = "../../xeam-web/libs/jquery";
		}
		return url;
	})(),
	shim:{
		jquery:{
			deps:[],
			exports:"jquery"
		}
	}
});
define(["jquery"],function($){
	return common
});
