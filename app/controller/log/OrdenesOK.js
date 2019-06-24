Ext.define("Siace.controller.log.OrdenesOK",{extend:"Ext.app.Controller",views:["log.OrdenesOK"],
init:function(application){this.control({"log_ordenok":{beforeshow:this.lpo_BS},"log_ordenok #btnNew":{click:this.lpo_btn},"log_ordenok #btnPrinter":{click:this.lpo_btn},"log_ordenok #btnExit":{click:this.lpo_btn}});},
lpo_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_ordenes_json_records.php",params:{xxOrden_key:comp.getCK(),xxType_record:"save_ok","ssNO_USK":"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];if(_d){fext_SV(comp,"doc_abrev",_d.doc_abrev);fext_SV(comp,"orden_documento",_d.orden_documento);comp.down("#doc_nombre").setText(_d.doc_nombre.toUpperCase());comp.down("#orden_document").setText(_d.orden_documento);}}
	});
},
lpo_btn:function(btn,e,o){var _w=btn.up("window");var _vs=fextpub_sessVar();var _TE=fext_btnTE(btn);
	if(_TE==8){fext_pdf("",fext_GV(_w,"doc_abrev")+"/ "+fext_GV(_w,"orden_documento"),"php/pdf/pdf_logistics_ordenes_printer.php?xxOrden_key="+btn.up("window").getCK()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_w.getMI()+"&xxOpc_id=5026");}
	else if(_TE=="Exi"){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}
}
});