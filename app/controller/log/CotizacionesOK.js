Ext.define("Siace.controller.log.CotizacionesOK",{extend:"Ext.app.Controller",views:["log.CotizacionesOK"],
init:function(application){this.control({"log_cotiok":{beforeshow:this.lcok_BeforeShow},"log_cotiok #btnNew":{click:this.lcok_btnNewClick},"log_cotiok #btnPrinter":{click:this.lcok_btnPrinterClick},"log_cotiok #btnExit":{click:this.lcok_btnExitClick}});},
lcok_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST", url:"php/logistics_cotizaciones_json_records.php",params:{xxCoti_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"coti_documento",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#coti_documento").setText(_res.data[0].coti_documento);}}
	});
},
lcok_btnNewClick:function(btn,e,opt){btn.up("window").close();btn.up("window").destroy();this.tvb_ViewEdit(1,btn.up("panel"));},
lcok_btnPrinterClick:function(btn,e,opt){},
lcok_btnExitClick:function(btn,e,opt){var _win=btn.up("window");if(_win.getCS()!==null){_win.getCS().load();}_win.close();}
});