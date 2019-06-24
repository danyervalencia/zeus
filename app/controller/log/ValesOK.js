Ext.define("Siace.controller.log.ValesOK",{extend:"Ext.app.Controller",views:["log.ValesOK"],
init:function(application){this.control({"log_valok":{beforeshow:this.lvo_BeforeShow},"log_valok #btnPrinter":{click:this.lvo_btnPrt},"log_valok #btnExit":{click:this.lvo_btnExt}});},
lvo_BeforeShow:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_vales_json_records.php",params:{xxVal_key:comp.getCK(),xxType_record:"save_ok","ssNO_USK":"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];if(_res.success){fext_SV(comp,"doc_abrev",_d.doc_abrev);fext_SV(comp,"val_documento",_d.val_documento);comp.down("#doc_nombre").setText(_d.doc_nombre.toUpperCase());comp.down("#val_document").setText(_d.val_documento);}}
	});
},
lvo_btnNew:function(btn,e,opt){},
lvo_btnPrt:function(btn,e,opt){var _w=btn.up("window");var _vs=fextpub_sessVar();
	fext_pdf("",fext_GV(_w,"doc_abrev")+"/ "+fext_GV(_w,"val_documento"),"php/pdf/pdf_logistics_vales_printer.php?xxVal_key="+_w.getCK()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_w.getMI()+"&xxOpc_id=5026");
},
lvo_btnExt:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!=null){_w.getCS().load();}_w.close();}
});