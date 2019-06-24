Ext.define("Siace.controller.log.FichasOK",{extend:"Ext.app.Controller",views:["log.FichasOK"],
init:function(application){this.control({"log_fichok":{beforeshow:this.lso_BeforeShow},"log_fichok #btnPrinter":{click:this.lso_btnPrinterClick},"log_fichok #btnExit":{click:this.lso_btnExitClick}});},
lso_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_fichas_json_records.php",params:{xxFich_key:comp.getCallKey(),xxType_record:"save_ok","ssNO_USK":"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _dat=_res.data[0];if(_res.success){comp.down("#doc_abrev").setValue(_dat.doc_abrev);comp.down("#fich_documento").setValue(_dat.fich_documento);comp.down("#doc_nombre").setText(_dat.doc_nombre.toUpperCase());comp.down("#fich_document").setText(_dat.fich_documento);}}
	});
},
lso_btnNewClick:function(btn,e,opt){},
lso_btnPrinterClick:function(btn,e,opt){var _win=btn.up("window"); var _vs=fextpub_sessVar();
	fext_pdf("",_win.down("#doc_abrev").getValue()+"/ "+_win.down("#fich_documento").getValue(), "php/pdf/pdf_logistics_salidas_printer.php?xxOrden_key="+btn.up("window").getCallKey()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_win.getMenuId()+"&xxOpc_id=5026");
},
lso_btnExitClick:function(btn,e,opt){var _win=btn.up("window"); if(_win.getCallStore()!==null){_win.getCallStore().load();} _win.close();}
});