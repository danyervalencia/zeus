Ext.define("Siace.controller.bud.EgresosE",{extend:"Ext.app.Controller",stores:["array.YearsDAB","array.DocEgre","array.TipDocIdentVenta","array.DocOrdenAB"],views:["bud.EgresosE"],
init:function(application){this.control({
"bud_egree":{beforeshow:this.bee_BS,show:this.bee_S},"bud_egree #btnSave":{click:this.bee_btn},"bud_egree #btnUndo":{click:this.bee_btn},"bud_egree #btnExit":{click:this.bee_btn},
"bud_egree #btnPIS":{click:this.bee_btn},"bud_egree #btnPPS":{click:this.bee_btn},
"bud_egree #btnAdd":{click:this.bee_btnAdd},"bud_egree #btnSuppress":{click:this.bee_btnSup},
"bud_egree #grdBETF":{selectionchange:this.bee_grdBETFSelChg},
"bud_egree #area_keyx":{change:this.bee_area_keyxChange},"bud_egree #fuefin_id":{change:this.bee_fuefin_idChange},"bud_egree #meta_id":{change:this.bee_meta_idChange},"bud_egree #tarea_key":{change:this.bee_tarea_keyChange},
"bud_egree #indiv_dni":{blur:this.bee_idBlur,focus:this.bee_idFocus,keypress:this.bee_idKP},
"bud_egree #pers_ruc":{blur:this.bee_prBlur,focus:this.bee_prFocus,keypress:this.bee_prKP},
"bud_egree #tipdocident_id":{change:this.bee_tdiChg},"bud_egree #tipegre_id":{change:this.bee_tiChg}
});},
bee_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _grd=comp.down("#grdBETF");var _txtEM=comp.down("#egre_monto");var _me=this; 
	comp.down("#cntIndiv").setFieldLabel("");comp.down("#cntPers").setFieldLabel("");
	fextpub_tabgenFilt({obj:comp.down("#tipegre_id"),tgp:2050,OB:"tabgen_nombre",AB:"NO",setVal:false,dsb:(_TE==1?false:true)});
	fextbud_metasParam({pan:comp,TR:"cboCN"});fextbud_tareasParam({pan:comp,TR:"cboCN"});
	if(fjsIn_array(_TE,[1,2])){
		if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Egreso Presupuestal ::.";fext_SV(comp,"egre_fecha",fjsDateCurrent(""));}else{var _ico="icon_Modify_90";var _tit="Modificar Egreso Presupuestal ::.";}
		var _str=Ext.create("Siace.store.bud.Egresos_Tareas_FftredE",{listeners:{update:function(str,rec,oper){var _m=0;str.each(function(r){_m+=r.data.egretareafte_monto;});_txtEM.setValue(_m);}}});
		var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){}}});_ce.init(_grd);
		if(_TE==1){fextbud_metasLoad({pan:comp});fext_SV(comp,"tipdocident_id",3);}comp.down("#btnAdd").enable();
	}else{var _ico="icon_Query_90";var _tit="Consulta de Egreso Presupuestal ::.";var _str=fext_CS("bud.Egresos_Tareas_FftredE");}
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("egretareafte_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});
	fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fuefin_id"),nuk:"NoT",TQ:"FF",OB:"fuefin_codename",AB:"NO"});
	if(fjsIn_array(_TE,[2,3])){comp.setFFF(false);
		_frm.load({method:"POST",url:"php/budget_egresos_json_records.php",waitMsg: "Loading...",params:{xxEgre_key:comp.getCK(),ssNO_USK:comp.getNUK(),xxType_record:"frm",xxMenu_id:comp.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){
				try{var _mod=fext_CM("bud.EgresoE");var _res=fext_DJ(act);var _d=_res.data[0];
					if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"year_id",_d.year_id*1);fext_SV(comp,"egre_nro",fjsLpad(_d.egre_nro,6,0));fext_SV(comp,"egre_monto",_d.egre_monto);
						if(_d.tipdocident_id==1){fext_SV(comp,"indiv_key",_d.pers_key);fext_SV(comp,"indiv_dni",_d.pers_ruc);fext_SV(comp,"indiv_apenom",_d.pers_nombre);}
						else{fext_SV(comp,"pers_key",_d.pers_key);fext_SV(comp,"pers_ruc",_d.pers_ruc);fext_SV(comp,"pers_nombre",_d.pers_nombre);}
						fextbud_metasLoad({pan:comp,dsb:true,mei:_d.meta_id});fextbud_tareasLoad({pan:comp,dsb:true,filtForce:true,tk:_d.tarea_key});
						fext_GS(comp).load({params:{xxEgre_key:_d.egre_key},callback:function(rec){fext_SV(comp,"egretareafte_item",rec[rec.length-1].data.egretareafte_item);}});
					}
				}catch(x){fext_MsgC(x.Message);}
			},failure:function(frm,act){fext_MsgFL(act);}
		});
		fext_Dsb(comp,"tipdocident_id");
		if(_TE==3){fext_Dsb(comp,"",["egre_fecha","indiv_dni","btnPIS","pers_ruc","btnPPS","btnAdd","btnSave","btnUndo"]);fext_SRO(comp,"egre_observ");comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);if(_tit!==""){comp.setTitle(_tit);}
},
bee_S:function(comp,opt){comp.setFFF(true);},
bee_btn:function(btn,e,o){fext_CC("bud.EgreEB").bee(btn);},

bee_btnAdd:function(btn,e,opt){fext_CC("bud.EgreE").bee_Add({w:btn.up("window")});},
bee_btnSup:function(btn,e,opt){var _w=btn.up("window");var _r=fext_grdSR(_w,"");if(_r){btn.disable();fext_GS(_w,"grdBETF").remove(_r);this.bee_egretareafte_montoUpdate(_w,_r.data.egretareafte_monto*(-1));}},

bee_area_keyxChange:function(cbo,newV,oldV,opt){cbo.up("window").setF(true);},
bee_egretareafte_montoUpdate:function(poC,pnMonto){fext_SV(poC,"egre_monto",fext_GV(poC,"egre_monto")*1 + pnMonto*1);
	var _dsb=(fext_GS(poC,"grdBETF").getCount()*1>0?true:false);fextSD(poC,"",_dsb,["meta_id","tarea_key","fuefin_id","area_keyx"]);
},
bee_fuefin_idChange:function(cbo,newV,oldV,opt){cbo.up("window").setF(true);},

bee_grdBETFSelChg:function(mod,rec,opt){if(rec.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])&&rec[0].data.viatdet_item!=1){_w.down("#btnSuppress").enable();}}},
bee_grdBETFAdd:function(poC,poR,poP){var _d=poR.data;var _str=fext_GS(poC);var _mod=_str.findRecord("tareafte_key",_d.tareafte_key);var _close=false;
	if(_mod==null){fext_SV(poC,"egretareafte_item",fext_GV(poC,"egretareafte_item")*1 + 1);
		_str.add({egretareafte_item:fext_GV(poC,"egretareafte_item"),tareafte_key:_d.tareafte_key,tarea_key:_d.tarea_key,tarea_codigo:_d.tarea_codigo,fftr_code:_d.fftr_code,espedet_codigo:_d.espedet_codigo,espedet_nombre:_d.espedet_nombre,area_key:poP["area_key"],area_abrev:poP["area_abrev"]});
		_close=true;fext_Dsb(poC,"",["meta_id","tarea_key","fuefin_id","area_keyx"]);poC.setF(false);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el documento");}
	return _close;
},
bee_idBlur:function(txtf,The,opt){this.bee_idS(txtf.up("window"),0);},
bee_idFocus:function(txtf,The,opt){this.bee_idS(txtf.up("window"),1);},
bee_idKP:function(txtf,e,opt){if(e.getCharCode()==13){this.bee_idS(txtf.up("window"),13);}},
bee_idS:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],1,["Siace.view.pub.IndividuosE","Nuevo Registro de Identidad ::.",["indiv_dni"],"","pub.IndividuosE",poCW.getMI()]);},
bee_prBlur:function(txtf,The,opt){this.bee_prS(txtf.up("window"),0);},
bee_prFocus:function(txtf,The,opt){this.bee_prS(txtf.up("window"),1);},
bee_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.bee_prS(txtf.up("window"),13);}},
bee_prS:function(poCW,pcType){fext_fieldSearch(pcType,poCW,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],1,["Siace.view.pub.PersonasEdit","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasEdit",poCW.getMI()],"");},
bee_meta_idChange:function(cbo,newV,oldV,opt){var _w=cbo.up("window");_w.setF(true);if(fjsIn_array(_w.getTE(),[1,2])&&_w.getFFF()){fextbud_tareasLoad({pan:_w,dsb:!_w.getFFF(),fftr:"YES",type:"fuefin",fftr_all:"YES"});}},
bee_tarea_keyChange:function(cbo,newV,oldV,opt){var _w=cbo.up("window");_w.setF(true);if(_w.getFFF()){fextbud_tareas_fftredLoad({pan:_w,obj:_w.down("#fuefin_id"),setVal:false});}},
bee_trabj_keyChange:function(txtf,newV,oldV,opt){/*this.bee_viat_calcularTime(txtf.up("window"));*/},
bee_tdiChg:function(cbo,newV,oldV,opt){fext_CC("bud.EgreE").bee_tdiChange({w:cbo.up("window"),"newV":newV});},
bee_tiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _TE=_w.getTE();if(fjsIn_array(_TE,[1,2])){
	if(newV==2058){fext_SD(_w,"",false,["tabley_year","tabley_doc","tabley_nro"]);}
	else{fext_Dsb(_w,"",["tabley_year","tabley_doc","tabley_nro"]);fext_SV(_w,"",0,["tabley_year","tabley_doc"]);fext_SV(_w,"tabley_nro","");}
}}
});