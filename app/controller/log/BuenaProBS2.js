Ext.define("Siace.controller.log.BuenaProBS2",{extend:"Ext.app.Controller",
lbpbs_Show:function(poW){var _w=poW;var _TE=_w.getTE();var _frm=_w.down("form");var _grdLBPD=_w.down("#grdLBPD");var _grdLBPTF=_w.down("#grdLBPTF");var _ico="icon_Query_90";var _tit=(_TE==3?"Consulta de Buena Pro ::.":"Certificar Requerimiento ::.");
	var _strLBPD=fext_CS("log.Buena_Pro_DetCertifica");var _strLBPTF=fext_CS("log.Buena_Pro_Tareas_FftredCertifica");
	fext_SVI(_w,"",true,["fftr_id","grdLBPD","grdLBPTF"]);fext_SVI(_w,"grdLCD",false);
	if(_TE==11){fext_SVI(_w,"",true,["btnModify","certif_nro","btnCertificado"])}_w.down("#bp_observ").hide();
	_grdLBPD.bindStore(_strLBPD);_grdLBPTF.bindStore(_strLBPTF);_strLBPD.load({params:{xxBp_key:_w.getCK(),xxType_record:"form_certifica"}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});if(_TE==11){_ce.init(_grdLBPTF);}
	_strLBPTF.load({params:{xxBp_key:_w.getCK(),xxType_record:"form_certifica"}});
	_frm.load({method:"POST",url:"php/logistics_buena_pro_json_records.php",waitMsg:"Loading...",params:{xxBp_key:_w.getCK(),xxType_record:"frmCertifica",xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){
			try{var _mod=fext_CM("log.Buena_ProCertifica");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);_w.down("#bp_monto").setValue(_d.bp_monto);
				fextpub_areasFilt({obj:_w.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
				fextbud_metasFilt({pan:_w,yi:_d.year_id,ak:_d.area_key,AB:"NO",val:_d.meta_id,dsb:true});
				fextbud_tareasFilt({pan:_w,mei:_d.meta_id,ak:_d.area_key,OB:"tarea_codename",AB:"NO",val:_d.tarea_key,dsb:true});
				fext_GS(_w,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(rec){if(rec.length>0){_w.down("#fftr_id").setValue(_d.fftr_id);}else{_w.down("#fftr_id").setValue("");}}});
			}}catch(x){fext_MsgC(x.Message);}
		}
	});
	if(fjsIn_array(_TE,[3])){fext_Dsb(_w,"",["meta_id","tarea_key","fftr_id"]);}
	fext_Dsb(_w,"",["btnSave","btnUndo"]);_w.down("#btnExit").enable();
	_w.setIconCls(_ico);_w.setTitle(_tit);
}
});