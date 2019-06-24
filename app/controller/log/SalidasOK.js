Ext.define("Siace.controller.log.SalidasOK",{extend:"Ext.app.Controller",views:["log.SalidasOK"],
init:function(application){this.control({"log_salok":{beforeshow:this.lso_BS},"log_salok #btnPrinter":{click:this.lso_btn},"log_salok #btnExit":{click:this.lso_btn}});},
lso_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_salidas_json_records.php",params:{xxSal_key:comp.getCK(),xxType_record:"save_ok","ssNO_USK":"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];if(_res.success){fext_SV(comp,"doc_abrev",_d.doc_abrev);fext_SV(comp,"sal_documento",_d.sal_documento);comp.down("#doc_nombre").setText(_d.doc_nombre.toUpperCase());comp.down("#sal_document").setText(_d.sal_documento);}}
	});
},
lso_btn:function(btn,e,o){var _w=btn.up("window");var _vs=fextpub_sessVar();var _TE=fext_btnTE(btn);
	if(_TE=="Pri"){fext_pdf("",fext_GV(_w,"doc_abrev")+"/ "+fext_GV(_w,"sal_documento"),"php/pdf/pdf_logistics_salidas_printer.php?xxSal_key="+btn.up("window").getCK()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_w.getMI()+"&xxOpc_id=5026");}
	else if(_TE=="Exi"){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
}
});