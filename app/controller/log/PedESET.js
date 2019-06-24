Ext.define("Siace.controller.log.PedESET",{extend:"Ext.app.Controller",
lpeset:function(poW){var _w=poW;var _frm=_w.down("form");var _TE=_w.getTE();var _tpi=fext_GV(_w,"tipped_id");var _tp=_w.down("tabpanel");var _t1=_w.down("#tab1");var _t2=_w.down("#tab2");var _t3=_w.down("#tab3");
	if(fext_IE(_t1,"pedettr_nombre")){_tp.setActiveTab(1);fext_MsgA("Debe indicar la Denominación de"+(_tpi==5006?" la Adquisición":"l Servicio o Consultoría"),_t1.down("#pedettr_nombre"));return false;}
	if(fext_IE(_t1,"pedettr_finalidad")){_tp.setActiveTab(1);fext_MsgA("Debe indicar la Finalidad Pública",_t1.down("#pedettr_finalidad"));return false;}
	if(fext_IE(_t1,"pedettr_objetivo")){_tp.setActiveTab(1);fext_MsgA("Debe indicar el Objetivo de"+(_tpi==5006?" la Adquisición":"l Servicio o Consultoría"),_t1.down("#pedettr_objetivo"));return false;}
	if(_tpi==5006){if(fext_IE(_t1,"lugentr_id")){_tp.setActiveTab(1);fext_MsgA("Debe indicar Lugar de Entrega",_t1.down("#lugentr_id"));return false;}}

	if(fext_IE(_t2,"tipplaz_id")){_tp.setActiveTab(2);fext_MsgA( "Debe indicar el Tipo de Plazo",_t2.down("#tipplaz_id"));return false;}
	if(fext_IE(_t2,"pedettr_plazo_nro")){_tp.setActiveTab(2);fext_MsgA("Debe indicar el Número de días del Plazo de "+(_tpi==5006?"Entrega":"Ejecución"),_t2.down("#pedettr_plazo_nro"));return false;}

	if(fext_IE(_t2,"pedettr_persona")){_tp.setActiveTab(2);fext_MsgA("Debe indicar los Requisitos y/o Perfil del "+(_tpi==5006?"Proveedor":"Contratista"),_t2.down("#pedettr_persona"));return false;}
	if(fext_IE(_t2,"pedettr_garantia_nro")){_tp.setActiveTab(2);fext_MsgA("Debe indicar el Número de Meses garantia",_t2.down("#pedettr_garantia_nro"));return false;}
	//if(fext_IE(_t2,"pedettr_forma_pago")){_tp.setActiveTab(2);fext_MsgA("Debe indicar la Forma de Pago",_t2.down("#pedettr_forma_pago"));return false;}
	//if(fext_IE(_t2,"pedettr_supervisa")){_tp.setActiveTab(3);fext_MsgA("Debe indicar a quien corresponde dar la Conformidad del "+(_tpi==5006?"Bien":"del Servicio y/o Consultoría"),_t3.down("#pedettr_supervisa"));return false;}
	//if(fext_IE(_t3,"pedettr_penalidad")){_tp.setActiveTab(3);fext_MsgA("Debe indicar las Penalidades",_t3.down("#pedettr_penalidad"));return false;}
	if(!_frm.getForm().isValid()){return false;}
	Ext.Msg.confirm(trnslt.cnf,trnslt.msg_qst_save,function(b){if(b=="yes"){
		_frm.getForm().submit({method:"POST",url:"php/logistics_pedidos_ettr_save.php",waitMsg:trnslt.msg_wait_save,params:{xx0005:"YES",xxPed_key:_w.getCK(),xxType_edit:_TE,xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){var _res=fext_DJ(act);if(_res.success){if(_w.getCS()!==null){_w.getCS().load();}_w.close();}else{fext_MsgE(_res.msg);}},failure:function(frm,act){fext_MsgFS(act);}
		});
	}});
}
});