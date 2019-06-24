Ext.define("Siace.controller.bud.NotasOK",{extend:"Ext.app.Controller",views:["bud.NotasOK"],
init:function(application){this.control({"bud_notaok":{beforeshow:this.bno_BS},"bud_notaok #btnNew":{click:this.bno_btn},"bud_notaok #btnPrinter":{click:this.bno_btn},"bud_notaok #btnExit":{click:this.bno_btn}});},
bno_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/budget_notas_json_records.php",params:{xxNota_key:comp.getCK(),xxType_record:"save_ok","ssNO_USK":"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _d=_res.data[0];if(_d){fext_SV(comp,"doc_abrev",_d.doc_abrev);fext_SV(comp,"nota_documento",_d.nota_documento);comp.down("#doc_nombre").setText(_d.doc_nombre.toUpperCase());comp.down("#nota_document").setText(_d.nota_documento);}}
	});
},
bno_btn:function(btn,e,opt){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE=="Exi"){if(_w.getCS()!=null){_w.getCS().load();}_w.close();}
}
});