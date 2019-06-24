Ext.define("Siace.controller.log.ViaticosER",{extend:"Ext.app.Controller",views:["log.ViaticosER"],
init:function(application){this.control({
"log_viater":{beforeshow:this.lver_BS},"log_viater #btnSave":{click:this.lver_btnSav},"log_viater #btnUndo":{click:this.lver_btnExt},"log_viater #btnCalc":{click:this.lver_btnCalc},
});},
lver_BS:function(comp,opt){comp.setIconCls("icon_Modify_90");comp.setTitle("Rebaja Solicitud de Viático ::.");comp.down("#cntPdpd").setStores(true);fext_CC("pub.PaisDptoPrvnDstt");comp.down("comprrhh_trabjs").setFieldLabel("Comisionado");var _frm=comp.down("form");var _grd=comp.down("#grdLVD");var _op=comp.down("#orig_prvn");var _txtVR=comp.down("#viat_rendido");var _mi=comp.getMI();
	fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fftr_id"),nuk:"NoT",TQ:"T_FF_TR",OB:"fftr_codename",AB:"NO"});
	var _str=Ext.create("Siace.store.log.Viaticos_DetE",{listeners:{update:function(str,r,oper,opt){if(r.data.viatdet_rendido*1>r.data.viatdet_pretot*1){Ext.Msg.alert(trnslt.msg,"Importe de Rendición no pueder ser mayor que importe de viático",function(){rec.set("viatdet_rendido",r.data.viatdet_pretot);});return false;}var _rend=0;str.each(function(rec){_rend+=rec.data.viatdet_rendido;});_txtVR.setValue(_rend);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("viatdet_item","ASC");_str.on("beforeload",function(str,oper,opt){str.getProxy().setExtraParam("xxType_record","frm")});
	_frm.load({method:"POST",url:"php/logistics_viaticos_json_records.php",waitMsg: "Loading...",params:{xxViat_key:comp.getCK(),ssNO_USK:comp.getNUK(),xxType_record:"frm",xxMenu_id:comp.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _md=fext_CM("log.ViaticoE");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);
			fext_SV(comp,"year_id",_d.year_id*1);fext_SV(comp,"viat_monto",_d.viat_monto);
			comp.down("#cntPdpd").fireEvent("loaddata",comp.down("#cntPdpd"),true,_d.pais_id,_d.dpto_id,_d.prvn_id,_d.dstt_id);
			fextpub_areasFilt({obj:comp.down("#area_key"),ak:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});fextbud_metasFilt({pan:comp,mei:_d.meta_id,val:_d.meta_id,TR:"cboCN",OB:"secfunc_codename",dsb:true});fextbud_tareasFilt({pan:comp,tk:_d.tarea_key,TR:"cboCN",OB:"tarea_codename",AB:"N",dsb:true});
			fext_GS(comp,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(r,oper,succ){fext_SV(comp,"fftr_id",_d.fftr_id);comp.down("#fftr_id").disable();}});
			fext_GS(comp,"grdLVD").load({params:{xxViat_key:comp.getCK()},callback:function(r,oper,succ){fext_SV(comp,"viatdet_item",r[r.length-1].data.viatdet_item);}});
			_op.bindStore(fext_CS("log.Viaticos_OrigenesCbo"));_op.getStore().load({params:{xxType_record:"cboDP"},callback:function(r){if(r.length>0){_op.setValue(_d.orig_prvn*1)}}});
			fextpub_tabgenFilt({obj:comp.down("#transp_id"),tgp:1180,val:_d.transp_id,AB:"NO",dsb:true});fextlog_motviatFilt({obj:comp.down("#motviat_id"),val:_d.motviat_id,AB:"NO",dsb:true});
			fext_CC("log.ViatETC").lve(comp);comp.setC(true);
		}}catch(x){fext_MsgC(x.Message);}},
		failure:function(frm,act){fext_MsgFL(act);}
	});
	fext_Dsb(comp,"",["btnRTS","orig_prvn","viat_fechaini","viat_horaini","viat_fechafin","viat_horafin","btnCalc"]);fext_SRO(comp,"viat_observ");comp.down("tabpanel").setActiveTab(1);
},
lver_ValidDT:function(poC){fext_CC("log.ViatE").lve_ValidDT(poC.up("window"));},
lver_btnSav:function(btn,e,opt){fext_CC("log.ViatERS").lvers_Save(btn);},
lver_btnExt:function(btn,e,opt){btn.up("window").close();}
});