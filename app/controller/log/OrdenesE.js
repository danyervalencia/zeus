Ext.define("Siace.controller.log.OrdenesE",{extend:"Ext.app.Controller",stores:["array.DocOrden","array.Mes","array.Years"],views:["log.OrdenesE"],
init:function(application){this.control({
"log_ordene":{beforeshow:this.loe_BS},"log_ordene #btnSave":{click:this.loe_btnSaveClick},"log_ordene #btnUndo":{click:this.loe_btnUndoClick},"log_ordene #btnExit":{click:this.loe_btnExitClick},
"log_ordene #btnAdd":{click:this.loe_tlp_btnAddClick},"log_ordene #tabLogistics_ordenes #btnSuppress":{click:this.loe_tlp_btnSuppressClick},
"log_ordene #grdLOD":{selectionchange:this.loe_tlp_grdLODSelChg},
"log_ordene #meta_id":{change:this.loe_tlp_meta_idChange},"log_ordene #tarea_key":{change:this.loe_tlp_tarea_keyChange},
});},
loe_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _grdLOP=comp.down("#grdLOP");var _grdLOD=comp.down("#grdLOD");var _grdLOTF=comp.down("#grdLOTF");var _txtOM=comp.down("#orden_monto");var _me=this;var _vs=fextpub_sessVar();
	fextpub_tippagFilt({obj:comp.down("#tippag_id"),tpec:1,add_blank:"NO"});
	if(fjsIn_array(_TE,[1,2])){var _strLOD=Ext.create("Siace.store.log.Ordenes_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.ordendet_pretot;});_txtOM.setValue(_m);}}});
		var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("ordendet_pretot",fjsRound(_r.data.ordendet_cantid*_r.data.ordendet_preuni,2));}}});_ce.init(_grdLOD);
	}else{var _strLOP=Ext.create("Siace.store.log.Ordenes_ProcedenciasE");var _strLOD=fext_CS("log.Ordenes_DetE");var _strLOTF=fext_CS("log.Ordenes_Tareas_FftredE");}
	_grdLOP.bindStore(_strLOP);_grdLOP.getView().refresh();_grdLOD.bindStore(_strLOD);_grdLOD.getView().refresh();_grdLOTF.bindStore(_strLOTF);_grdLOTF.getView().refresh();
	if(fjsIn_array(_TE,[1,2])){
		_strLOP.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxType_record","xxOrder_by"],["frm","ordendet_item"]);});
		_strLOD.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxType_record","xxOrder_by"],["frm","ordendet_item"]);});
		_strLOTF.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxType_record","xxOrder_by"],["frm","ordendet_item"]);});
	}else if(_TE==11){var _txk=fext_GV(comp,"tablex_key");
		_strLOP.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record"],[5030,_txk,"Generate_of_5020"]);});
		_strLOD.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record","xxOrder_by"],[5020,_txk,"Generate_of_5020","bpdet_item"]);});
		_strLOTF.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxTablex","xxTablex_key","xxType_record","xxOrder_by"],[5015,_txk,"Generate_of_5020","bptareafte_item"]);});
	}

	fextbud_tareas_fftredParam({pan:comp,obj:comp.down("#fuefin_id"),nuk:"NoT",TQ:"FF",OB:"fuefin_codename",AB:"NO"});fextbud_tiprecurParam({pan:comp,AB:"NO"})
	if(fjsIn_array(_TE,[1,2])){
		if(_TE==1){var _ico="icon_New_90";var _tit="Nuevo Orden";fext_SV(comp,"ped_fecha",fjsDateCurrent(""));}
		else if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Orden";}
		else if(_TE==12){var _ico="icon_Modify_90";var _tit="";comp.down("tabpanel").setActiveTab(1);}
		fextbud_tareasATParam({pan:_tabLP,TR:"cboCN",AB:"NO"});fextpub_areasFilt({obj:_tabLP.down("#area_key"),ak:_vs.a,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});fextbud_tareasAMParam({pan:_tabLP,TR:"cboCN",AB:"NO"}); 
		if(_TE==1){fextbud_tareasAMLoad({pan:_tabLP});}_tabLP.down("#btnAdd").enable();
	}else if(fjsIn_array(_TE,[3])){var _ico="icon_Query_90";var _tit="Consulta de Requerimiento";
	}else if(fjsIn_array(_TE,[11])){var _ico="icon_New_90";var _tit="Generar Nueva Orden ::.";fext_SV(comp,"orden_fecha",fjsDateCurrent(""));
		fext_GS(comp,"grdLOP").load();fext_GS(comp,"grdLOD").load();fext_GS(comp,"grdLOTF").load();
		_frm.load({method:"POST",url: "php/logistics_buena_pro_json_records.php",waitMsg:"Loading...",params:{xxBp_key:comp.down("#tablex_key").getValue(),xxType_record:"frmOrden",xxMenu_id:comp.getMI(),vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){
				try{var _mod=fext_CM("log.Buena_ProLOE");var _res=fext_DJ(act);var _d=_res.data[0];
					if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(comp,"year_id",_d.year_id*1);fext_SV(comp,"doc_id",_d.tipped_id==5006?516:517);fext_SV(comp,"tiprecur_idx",_d.tiprecur_id);
						fextpub_areasFilt({obj:comp.down("#area_key"),ak:_d.area_key,TR:"cbo",nuk:"NoT",AB:"NO",dsb:true});
						fextbud_metasParam({pan:comp,mei:_d.meta_id,TR:"cboCN",add_blank:"NO"});fextbud_metasLoad({pan:comp,dsb:true,val:_d.meta_id});
						fextbud_tareasParam({pan:comp,tk:_d.tarea_key,TR:"cboCN",OB:"tarea_codename",AB:"NO"});fextbud_tareasLoad({pan:comp,dsb:true,filtForce:true,tk:_d.tarea_key});
						fext_GS(comp,"fuefin_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(rec){fext_SV(comp,"fuefin_id",_d.fuefin_id*1);fextbud_tiprecurLoad(comp.down("#tiprecur_id"),true);}});
						fext_SV(comp,"tippag_id",_d.tippag_id*1);fext_SV(comp,"orden_monto",_d.bp_monto);fext_SV(comp,"orden_observ",_d.pedettr_nombre);
					}
				}catch(x){fext_MsgC(x.Message);}
			},failure:function(frm,act){fext_MsgFL(act);}
		});
	}
	if(fjsIn_array(_TE,[2,3,12])){comp.setFilterFFTR(false);
		_frm.load({method:"POST",url:"php/logistics_ordenes_json_records.php",waitMsg: "Loading...",params:{xxOrden_key:comp.getCK(),xxYear_id:fext_GV(comp,"year_id"),xxType_record:"frm",xxMenu_id:comp.getMI()},
			success:function(form,action){
				try {var _mod =fext_CM("log.OrdenE");var _res="";var _d=_res.data[0];
					if(_d){_mod.set(_d);_frm.loadRecord(_mod);
						fext_SV(comp,"orden_nro",_data.orden_nro);fext_SV(comp,"orden_fecha",_d.orden_fecha);fext_SV(comp,"#orden_monto",_d.orden_monto);
						fext_GS(comp,"grdLOD").load({params:{xxOrden_key:_d.orden_key}});fext_GS(comp,"grdLOTF").load({params:{xxOrden_key:_d.orden_key}});
					}
				}catch(x){fext_MsgC(x);}
			},failure:function(frm,act){fext_MsgFL(act);}
		});							
		if(fjsIn_array(_TE,[3,12])){fext_SD(comp,"btnAdd",true);
			if(_TE==3){fext_Dsb(comp,"",["btnSave","btnUndo"]);comp.down("#btnExit").enable();}
		}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
loe_btnSaveClick:function(btn,e,opt){fext_CC("log.OrdenEU").loeu_Save(btn.up("window"));},
loe_btnUndoClick:function(btn,e,opt){btn.up("window").close();},
loe_btnExitClick:function(btn,e,opt){btn.up("window").close();},
loe_tlp_btnAddClick:function(btn,e,opt){var _w=btn.up("window");},
loe_tlp_btnSuppressClick:function(btn,e,opt){},
loe_tlp_grdLODSelChg:function(mod,rec,opt){if(rec.length==1){var _w=mod.view.up("window");if(fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}}},
loe_tlp_grdLOTFEdit:function(poC,poP){},
loe_tlp_meta_idChange:function(cbo,newV,oldV,opt){},
loe_tlp_tarea_keyChange:function(cbo,newV,oldV,opt){},
});