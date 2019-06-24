Ext.define("Siace.controller.log.Pedidos_TramitesOK",{extend:"Ext.app.Controller",views:["log.Pedidos_TramitesOK"],	
init:function(application){this.control({"log_pedtramok":{beforeshow:this.lpto_BeforeShow},"log_pedtramok #btnNew":{click:this.lpto_btnNewClick},"log_pedtramok #btnPrinter":{click:this.lpto_btnPrinterClick},"log_pedtramok #btnExit":{click:this.lpto_btnExitClick},});},
lpto_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_pedidos_tramites_json_records.php",params:{xxPedtram_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"pedtram_documento",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#pedtram_documento").setText(_res.data[0].pedtram_documento);}}
	});
},
lpto_btnNewClick:function(btn,e,opt){},
lpto_btnPrinterClick:function(btn,e,opt){},
lpto_btnExitClick:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
});