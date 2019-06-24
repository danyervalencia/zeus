Ext.define("Siace.controller.log.PedEBCB",{extend:"Ext.app.Controller",
lpe:function(btn,opt){var _w=btn.up("window");var _TE=fext_btnTE(btn);var _mi=_w.getMI();
	if(_TE==2){var _r=fext_grdSR(_w,"grdLPD");if(!_r){return false;}var _d=_r.data;
		fext_CC("pub.Bienes_ServsSE");_w.setCompPBSS(fext_compSearch({cc:_w,os:_w.getCompPBSS(),v:"Siace.view.pub.Bienes_ServsSE",tit:"Editar detalle de requerimiento ::.",TQ:"espedet_id",TRE:"WLPE"}));var _wB=_w.getCompPBSS();var _t=_wB.down("#tab02");
		_wB.setType("T2");_wB.setBst(fext_GV(_w,"tipped_id")==5006?1:2);fext_SV(_wB,"bst_id",_wB.getBst()*1);fext_Dsb(_wB,"bst_id");
		_wB.setTK(fext_GV(_w,"tarea_key"));_wB.setFFI(fext_GV(_w,"fftr_id").substr(0,3)*1);_wB.setTRI(fext_GV(_w,"fftr_id").substr(4)*1);_wB.setEDT(fext_GV(_w,"tipped_id")==5006?"B":"S");
		fext_SV(_t,"item",_d.peddet_item);fext_SV(_t,"bs_key",_d.bs_key);fext_SV(_t,"bs_codigo",_d.bs_codigo);fext_SV(_t,"bs_nombre",_d.bs_nombre);fext_SV(_t,"unimed_nombre",_d.unimed_nombre);
		fext_SV(_t,"detalle",_d.peddet_detalle);fext_SV(_t,"cantid",_d.peddet_cantid);fext_SV(_t,"preuni",_d.peddet_preuni);fext_SV(_t,"pretot",_d.peddet_pretot);
		fext_GSR(_t,"espedet_id");fext_GS(_t,"espedet_id").load({callback:function(r){fext_SV(_t,"espedet_id",_d.espedet_id*1);}});
		_t.enable();_wB.down("#btnAccept").enable();_wB.down("#tab").setActiveTab(1);
	}else if(_TE=="Sup"){var _r=fext_grdSR(_w,"grdLPD");if(!_r){return false;}fext_SD(_w,"",true,["btnModify","btnSuppress"]);fext_GS(_w,"grdLPD").remove(_r);var _rec=false;
		fext_GS(_w,"grdLPTF").findBy(function(r,id){if(r.data.espedet_id==_r.data.espedet_id){r.set("pedtareafte_monto",fjsRound(r.data.pedtareafte_monto*1 - _r.data.peddet_pretot*1,2));r.commit();if(r.data.pedtareafte_monto*1<=0){_rec=r;}return true;}});
		if(_rec){fext_GS(_w,"grdLPTF").remove(_rec);}fext_CC("log.PedidosEBC").lpe_montoU(_w,_r.data.peddet_pretot*(-1));
	}else if(_TE=="Bud"){
		var _w=btn.up("window");var _r=fext_grdSR(_w,"grdLPD");if(!_r){return false;}var _d=_r.data;fext_CC("log.Pedidos_Det_Tareas_FftredE");var _wE=fext_CW("log.Pedidos_Det_Tareas_FftredE");_wE.setCC(_w);_wE.setMI(_w.getMI());_wE.setTE(_w.getTE());
		var _str=fext_GS(_w,"grdLPDTF");_str.filter("peddet_id",_d.peddet_item);
		fext_SV(_wE,"peddet_id",_d.peddet_item);fext_SV(_wE,"area",fext_GV(_w,"area_key"));fext_SV(_wE,"meta",fext_GV(_w,"meta_id")*1);fext_SV(_wE,"tarea",fext_GV(_w,"tarea_key"));fext_SV(_wE,"fftr",fext_GV(_w,"fftr_id"));fext_SV(_wE,"espedet",_d.espedet_id);_wE.setCS(_str);
		if(fext_GV(_w,"ped_nro")*1>0){_wE.down("#ped_documento").setValue(fext_GV(_w,"ped_nro"));}fext_SV(_wE,"peddet_pretot",_d.peddet_pretot);
		_wE.down("#bs_codename").setFieldLabel(fext_GV(_w,"tipped_id")*1==5006?"Bien":"Servicio");fext_SV(_wE,"bs_codename",_d.bs_codigo.substr(2)+" - "+_d.bs_nombre);fext_SV(_wE,"espedet_codename",_d.espedet_codigo+" - "+_d.espedet_nombre);
		_wE.show();		
	}
}
});