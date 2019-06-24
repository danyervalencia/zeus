Ext.define("Siace.controller.bud.EgresosOK",{extend:"Ext.app.Controller",views:["bud.EgresosOK"],	
init:function(application){this.control({"bud_egreok":{beforeshow:this.lvo_BeforeShow},"bud_egreok #btnNew":{click:this.lvo_btnNewClick},"bud_egreok #btnPrinter":{click:this.lvo_btnPrinterClick},"bud_egreok #btnExit":{click:this.lvo_btnExitClick}});},
lvo_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/budget_egresos_json_records.php",params:{xxEgre_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"egre_documento",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#egre_documento").setText(_res.data[0].egre_documento);}}
	});
},
lvo_btnNewClick:function(btn,e,opt){},
lvo_btnPrinterClick:function(btn,e,opt){},
lvo_btnExitClick:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
});