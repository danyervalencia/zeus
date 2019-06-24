Ext.define("Siace.controller.rrhh.Registros_LaboralesR",{extend:"Ext.app.Controller",views:["rrhh.Registros_LaboralesR"],
init:function(application){this.control({
"rrhh_reglabr":{beforerender:this.rrl_BeforeRender},"rrhh_reglabr #panRL #btnPdf":{click:this.rrl_btnPdfClick},"rrhh_reglabr #panRL #btnExcel":{click:this.rrl_btnExcelClick},
"rrhh_reglabr #btnIndiv_search":{click:this.rrl_btnIndiv_searchClick},
"rrhh_reglabr #area_key":{change:this.rrl_area_keyChange},
"rrhh_reglabr #meta_id":{change:this.rrl_meta_idChange},"rrhh_reglabr #tarea_key":{change:this.rrl_tarea_keyChange},
"rrhh_reglabr #indiv_dni":{blur:this.rrl_indiv_dniBlur,focus:this.rrl_indiv_dniFocus,keypress:this.rrl_indiv_dniKeypress}
});},
rrl_BeforeRender:function(comp,opt){var _mi=comp.getMI();var _panRL=comp.down("#panRL");var _otr=comp.down("#type_record");
	var _str=Ext.create("Ext.data.Store",{fields:[{name:"typrec_id",type:"string"},{name:"typrec_nombre",type:"string"}],
		data:[{typrec_id:"REGLAB",typrec_nombre:"Registros Laborares - Consolidadado"},{typrec_id:"REGLABDET",typrec_nombre:"Registros Laborares - Detallado"}]
	});
	_otr.bindStore(_str);_otr.getStore().load({callback:function(rec,oper,succ){_otr.setValue("REGLAB");}});
	//fextbud_tareasAMParameters({panel:_panRL,menu_id:_mi,type_record:"combo_codename"});fextbud_tareasATParameters({panel:_panRL,menu_id:_mi,type_record:"combo_codename"});
	//fextbud_tareas_fftredParameters({panel:_panRL,objeto:_panRL.down("#fuefin_id"),type_record:"FF_codename",menu_id:_mi,type:"fuefin"});
	fextpub_areasFilt({obj:_panRL.down("#area_key"),filt:false,mi:_mi,TR:"cbo",nuk:"NoT"});
},
rrl_ViewReport:function(poC,pcOI){var _mi=poC.up("rrhh_reglabr").getMI();var _tr=poC.down("#type_record").getValue();var _vs=fextpub_sessVar();
	if(!poC.down("#fechaini").isValid()){fext_msgA("Fecha Inicial NO es Válida",poC.down("#fechaini"));return false;}
	if(!poC.down("#fechafin").isValid()){fext_msgA("Fecha Final NO es Válida",poC.down("#fechafin"));return false;}
	var _ak=poC.down("#area_key").getValue();var _mei=poC.down("#meta_id").getValue();var _tk=poC.down("#tarea_key").getValue();var _ffi=poC.down("#fuefin_id").getValue();
	var _fechaini=poC.down("#fechaini").getSubmitValue();var _fechafin=poC.down("#fechafin").getSubmitValue();

	var _param="&xxFechaini="+_fechaini+"&xxFechafin="+_fechafin+"&xxArea_key="+(Ext.isEmpty(_ak)?"":_ak)+"&xxArea_nombre="+poC.down("#area_key").getRawValue()+"&xxMeta_id="+(Ext.isEmpty(_mei)?"":_mei)+"&xxSecfunc_codename="+poC.down("#meta_id").getRawValue()+"&xxTarea_key="+(Ext.isEmpty(_tk)?"":_tk)+"&xxTarea_codename="+poC.down("#tarea_key").getRawValue()+"&xxFuefin_id="+(Ext.isEmpty(_ffi)?"0":_ffi)+"&xxFuefin_codename="+poC.down("#fuefin_id").getRawValue();
	var _sess="&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id="+pcOI;

	if(fjsIn_array(_tr,["REGLAB"])){var _tit="Registros Laborales";
		fext_pdf("",_tit,"php/pdf/pdf_rrhh_registros_laborales_report.php?xxType_record="+_tr+_param+_sess,poC.up("rrhh_reglabr").down("#tab01"));
	}else if(fjsIn_array(_tr,["REGLABDET"])){var _tit="Registros Laborales Detallado";
		fext_pdf("",_tit,"php/pdf/pdf_rrhh_registros_laborales_report.php?xxType_record="+_tr+_param+_sess,poC.up("rrhh_reglabr").down("#tab01"));
	}
},
rrl_btnPdfClick:function(btn,e,opt){this.rrl_ViewReport(btn.up("#panRL"),32);},
rrl_btnExcelClick:function(btn,e,opt){this.rrl_ViewReport(btn.up("#panRL"),33);},
rrl_btnIndiv_searchClick:function(btn,e,opt){fext_CC("pub.IndividuosSearch");var _p=btn.up("rrhh_reglabr");_p.setCompPIS(fext_compSearch({cc:_p,os:_p.getCompPIS(),v:"Siace.view.pub.IndividuosSearch",tit:"Búsqueda de Persona ::.",ck:_p.down("#indiv_key").getValue()}));},
rrl_area_keyChange:function(cbo,newVal,oldVal,opt){},
rrl_fuefin_idChange:function(cbo,newVal,oldVal,opt){},
rrl_indiv_dniBlur:function(txtf,The,opt){this.rrl_indiv_dniSearch(txtf.up("window"),0);},
rrl_indiv_dniFocus:function(txtf,The,opt){this.rrl_indiv_dniSearch(txtf.up("window"),1);},
rrl_indiv_dniKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.rrl_indiv_dniSearch(txtf.up("window"),13);}},
rrl_indiv_dniSearch:function(poCallWin,pcType){fext_fieldSearch(pcType,poCallWin,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],1,["Siace.view.pub.IndividuosEdit","Nuevo Registro de Identidad ::.",["indiv_dni"],"","pub.IndividuosEdit",poCallWin.getMI()]);},
rrl_meta_idChange:function(cbo,newVal,oldVal,opt){},
rrl_tarea_keyChange:function(cbo,newVal,oldVal,opt){},
});