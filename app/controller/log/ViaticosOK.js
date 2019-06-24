Ext.define("Siace.controller.log.ViaticosOK",{extend:"Ext.app.Controller",views:["log.ViaticosOK"],	
init:function(application){this.control({"log_viatok":{beforeshow:this.lvo_BS},"log_viatok #btnNew":{click:this.lvo_btn},"log_viatok #btnPrinter":{click:this.lvo_btn},"log_viatok #btnExit":{click:this.lvo_btn}});},
lvo_BS:function(comp,opt){
	Ext.Ajax.request({method:"POST",url:"php/logistics_viaticos_json_records.php",params:{xxViat_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"viat_documento",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#viat_documento").setText(_res.data[0].viat_documento);}},
	});
},
lvo_btn:function(btn,e,opt){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE=="Exi"){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}
}
});