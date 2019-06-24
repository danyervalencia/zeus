Ext.define("Siace.controller.bud.TareaUsurAcceB",{extend:"Ext.app.Controller",views:["bud.TareaUsurAcceB"],
init:function(application){this.control({
"bud_tareausuracceb":{beforerender:this.btuab_BR},"bud_tareausuracceb #btnAdd":{click:this.btuab_btn},"bud_tareausuracceb #btnModify":{click:this.btuab_btn},"bud_tareausuracceb #btnQuery":{click:this.btuab_btn},"bud_tareausuracceb #btnExit":{click:this.btuab_btnExt},"bud_tareausuracceb #grdBTUA":{selectionchange:this.btuab_grdSelChg}
});},
btuab_BR:function(comp,opt){var _pan=comp.down("#panPUA");
	Ext.Ajax.request({method:"POST",url:"php/public_usuarios_accesos_json_records.php",params:{xxUsuracce_key:comp.getCK(),xxType_record:"winBTUAB"},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("pub.Usuario_AccesoWBTUAB");if(_res.success&&_res.data.length==1){var _d=_res.data[0];_mod.set(_d);fext_LR(_pan,_mod);if(_d.indiv_foto!=""){_pan.down("#indiv_foto").setSrc("attach/public_individuos_foto_"+_d.indiv_key+"_"+_d.indiv_foto);}}}
	});
	var _str=fext_CS("bud.Tareas_Usuarios_AccesosB");fext_BSGP(comp,_str);_str.sort("tarea_codigo","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"",["btnModify","btnQuery","btnDelete"]);fext_PSEP(str,["xxUsuracce_key","xxType_record","xxPag"],[comp.getCK(),"grdBTUAB",1]);});_str.load();
},
btuab_btn:function(btn,e,opt){var _w=btn.up("window");var _TE=fext_btnTE(btn);fext_CC("bud.TareaUsurAcce").btua_View({comp:_w,TE:_TE,mi:_w.getMI(),uak:_w.getCK(),ak:fext_GV(_w,"area_key")});},
btuab_btnExt:function(btn,e,opt){btn.up("window").close();},
btuab_grdSelChg:function(mod,r,o){if(r.length==1){fext_SD(mod.view.up("window"),"",false,["btnModify","btnQuery"]);}}
});