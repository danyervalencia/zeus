Ext.define("Siace.controller.log.NeasOK",{extend:"Ext.app.Controller",views:["log.NeasOK"],
init:function(application){this.control({"log_neaok":{beforeshow:this.lno_BeforeShow},"log_neaok #btnPrinter":{click:this.lno_btnPrinterClick},"log_neaok #btnExit":{click:this.lno_btnExitClick}});},
lno_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_neas_json_records.php",params:{xxNea_key:comp.getCK(),xxType_record:"save_ok",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];if(_res.success){comp.down("#doc_abrev").setValue(_d.doc_abrev);comp.down("#nea_documento").setValue(_d.nea_documento);comp.down("#doc_nombre").setText(_d.doc_nombre.toUpperCase());comp.down("#nea_document").setText(_d.nea_documento);}}
	});
},
lno_btnNewClick:function(btn,e,opt){},
lno_btnPrinterClick:function(btn,e,opt){var _w=btn.up("window");var _vs=fextpub_sessVar();
	fext_pdf("",_w.down("#doc_abrev").getValue()+"/ "+_w.down("#nea_documento").getValue(),"php/pdf/pdf_logistics_neas_printer.php?xxNea_key="+btn.up("window").getCallKey()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_w.getMI());
},
lno_btnExitClick:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();} _w.close();}
});