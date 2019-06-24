Ext.define("Siace.controller.log.ValorizacionesOK",{extend:"Ext.app.Controller",views:["log.ValesOK"],
init:function(application){this.control({"log_valrzok":{beforeshow:this.lvo_BS},"log_valrzok #btnPrinter":{click:this.lvo_btnPrt},"log_valrzok #btnExit":{click:this.lvo_btnExt}});},
lvo_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_valorizaciones_json_records.php",params:{xxValrz_key:comp.getCK(),xxType_record:"save_ok","ssNO_USK":"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _dat=_res.data[0];if(_res.success){fext_SV(comp,"doc_abrev",_dat.doc_abrev);fext_SV(comp,"valrz_documento",_dat.valrz_documento);comp.down("#doc_nombre").setText(_dat.doc_nombre.toUpperCase());comp.down("#valrz_document").setText(_dat.valrz_documento);comp.down("#tablex_docnro").setText(_dat.tablex_docnro);}}
	});
},
lvo_btnPrt:function(btn,e,opt){var _w=btn.up("window");var _vs=fextpub_sessVar();
	fext_pdf("",fext_GV(_w,"doc_abrev")+"/ "+fext_GV(_w,"valrz_documento"), "php/pdf/pdf_logistics_valorizaciones_printer.php?xxValrz_key="+_w.getCK()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_w.getMI()+"&xxOpc_id=8");
},
lvo_btnExt:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
});