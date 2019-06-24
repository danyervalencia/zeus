Ext.define("Siace.controller.log.PedidosOK",{extend:"Ext.app.Controller",views:["log.PedidosOK"],	
init:function(application){this.control({"log_pedok":{beforeshow:this.lpo_BS},"log_pedok #btnNew":{click:this.lpo_btn},"log_pedok #btnPrinter":{click:this.lpo_btn},"log_pedok #btnExit":{click:this.lpo_btn}});},
lpo_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_pedidos_json_records.php",params:{xxPed_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"ped_documento",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#ped_documento").setText(_res.data[0].ped_documento);}}
	});
},
lpo_btn:function(btn,e,opt){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE=="Exi"){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}
}
});