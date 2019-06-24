Ext.define("Siace.controller.log.PlanillasOK",{extend:"Ext.app.Controller",views:["log.PlanillasOK"],	
init:function(application){this.control({"log_planok":{beforeshow:this.lpo_BS},"log_planok #btnNew":{click:this.lpo_btnNew},"log_planok #btnPrinter":{click:this.lpo_btnPri},"log_planok #btnExit":{click:this.lpo_btnExt}});},
lpo_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_planillas_json_records.php",params:{xxPlan_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"plan_documento",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#documento").setText(_res.data[0].plan_documento);}}
	});
},
lpo_btnNew:function(btn,e,opt){},
lpo_btnPri:function(btn,e,opt){},
lpo_btnExt:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
});