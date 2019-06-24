Ext.define("Siace.controller.log.OrdenesBCJ",{extend:"Ext.app.Controller",views:["log.OrdenesBCJ"],
init:function(application){this.control({
"log_ordenbcj":{beforeshow:this.lobcj_BS},"log_ordenbcj #btnSave":{click:this.lobcj_btnSaveClick},"log_ordenbcj #btnExit":{click:this.lobcj_btnExt},
"log_ordenbcj #area_key":{change:this.lobcj_ChgCbo},"log_ordenbcj #meta_id":{change:this.lobcj_ChgCbo},"log_ordenbcj #tiporden_id":{change:this.lobcj_ChgCbo},"log_ordenbcj #year_id":{change:this.lobcj_ChgCbo}
});},
lobcj_BS:function(comp,opt){var _vs=fextpub_sessVar();var _cbo=comp.down("#tiporden_id");
	fextbud_metasParam({pan:comp});fextpub_yearsVisible(comp.down("#year_id"),_vs.y);fextpub_areasFilt({obj:comp.down("#area_key"),filt:false,nuk:"NoT",OB:"area_abrev"});
	fext_BS(comp,"tiporden_id","log.Tipos_OrdenesCbo");fext_GS(comp,"tiporden_id").load({params:{xxTablex:5090,xxType_record:"cbo",xxOrder_by:"tiporden_orden"},callback:function(r){if(r.length>1){_cbo.setValue(r[0].data.tiporden_id);}else{_cbo.disable();_cbo.setValue("");}}});
	var _str=fext_CS("log.ComprasLOB");fext_BSGP(comp,_str);_str.sort("comp_fecha","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxYear_id","xxTiporden_id","xxArea_key","xxMeta_id","xxType_record","vs","xxPag"],["","","","","grdLOB",fext_JE(_vs),1],comp,["year_id","tiporden_id","area_key","meta_id","","",""]);});_str.load();
},
lobcj_ChgCbo:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined||_ii=="are"){this.lobcj_Clean(_w);if(_ii=="yea"){fextbud_metasLoad({pan:_w});}}if(_ii=="are"){fextbud_metasLoad({pan:_w});}},
lobcj_Clean:function(poC){fext_grdOC(poC);},
lobcj_btnSaveClick:function(btn,e,opt){var _w=btn.up("window");var _frm=_w.down("form");
	if(fext_IE(_w,"orden_key")){fext_MsgA("Error de sistema no se ha establecido la Orden");return false;}
	if(fext_IE(_w,"orden_observ")){fext_MsgA("Debe establecer la glosa de la Orden",_w.down("#orden_observ"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,"¿Esta Ud. seguro de Editar la Glosa de la Orden seleccionada?",function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_ordenes_save_glosa.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxType_edit:_w.getTE(),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
},
lobcj_btnExt:function(btn,e,opt){btn.up("window").close();}
});