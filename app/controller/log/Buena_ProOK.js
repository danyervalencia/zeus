Ext.define("Siace.controller.log.Buena_ProOK",{extend:"Ext.app.Controller",views:["log.Buena_ProOK"],
init:function(application){this.control({"log_bpok":{beforeshow:this.lbpok_BeforeShow},"log_bpok #btnNew":{click:this.lbpok_btnNewClick},"log_bpok #btnPrinter":{click:this.lbpok_btnPrinterClick},"log_bpok #btnExit":{click:this.lbpok_btnExitClick}});},
lbpok_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_modificaciones_json_records.php",params:{xxModif_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"modif_documento",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#modif_documento").setText(_res.data[0].modif_documento);}}
	});
},
lbpok_btnNewClick:function(btn,e,opt){btn.up("window").close();btn.up("window").destroy();this.tvb_ViewEdit(1,btn.up("panel"));},
lbpok_btnPrinterClick:function(btn,e,opt){},
lbpok_btnExitClick:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
});