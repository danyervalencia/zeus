Ext.define("Siace.controller.bud.TareaFteE02",{extend:"Ext.app.Controller",
btfe:function(poC){poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Clasificador en Tarea Funcional ::.");var _frm=poC.down("#panBTF").down("form");
	_frm.load({method:"POST",url:"php/budget_tareas_fftred_json_records.php",waitMsg:"Loading...",params:{xxTareafte_key:poC.getCK(),xxType_record:"frm"},
		success:function(frm,act){var _md=fext_CM("bud.Tarea_FftredE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){
			_md.set(_d);_frm.loadRecord(_md);fext_SV(poC,"fuefin_id",_d.fuefin_id*1);fext_SV(poC,"espedet_id",_d.espedet_id*1);
			fextbud_tiprecurFilt({pan:poC,yi:fext_GV(poC,"year_id"),ffi:_d.fuefin_id,AB:"NOT",dsb:true,val:_d.tiprecur_id});fext_SV(poC,"tiprecur_id",_d.tiprecur_id*1);
			fext_SV(poC,"tareafte_valida",_d.tareafte_valida==1?true:false);fext_SV(poC,"tareafte_estado",_d.tareafte_estado==1?true:false);
		}},failure:function(frm,act){fext_MsgFL(act);}
	});

}
});