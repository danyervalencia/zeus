Ext.define("Siace.controller.rrhh.Record_LaboralQ",{extend:"Ext.app.Controller",views:["rrhh.Record_LaboralQ"],
init:function(application){this.control({
"rrhh_reclabq":{beforerender:this.rrlq_BR},"rrhh_reclabq #panRRL #btnPrinter":{click:this.rrlq_pan_btnPr},"rrhh_reclabq #panRRL #btnPIS":{click:this.rrlq_pan_btnPIS},
"rrhh_reclabq #panRRL #grdRRL":{cellclick:this.rrlq_pan_grdRRLCellClick,selectionchange:this.rrlq_pan_grdRRLSelectionChange},
"rrhh_reclabq #panRRL #indiv_dni":{blur:this.rrlq_pan_indiv_dniBlur,change:this.rrlq_pan_indiv_dniChange,focus:this.rrlq_pan_indiv_dniFocus,keypress:this.rrlq_pan_indiv_dniKeypress},"rrhh_reclabq #panRRL #indiv_apenom":{change:this.rrlq_pan_indiv_apenomChange},
"rrhh_reclabq #tabrrhh_record_laboral_procedencias #opc_id":{change:this.rrlq_tlop_opc_idChange},"rrhh_reclabq #tabrrhh_record_laboral_procedencias #btnQuery":{click:this.rrlq_tlop_btnQueryClick},"rrhh_reclabq #tabrrhh_record_laboral_procedencias #btnPrinter":{click:this.rrlq_tlop_btnPrinterClick},
"rrhh_reclabq #tabrrhh_record_laboral_procedencias #grdrrhh_record_laboral_procedencias":{selectionchange:this.rrlq_tlop_grdrrhh_record_laboral_procedenciasSelectionChange},
});},
rrlq_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#panRRL");var _t1=comp.down("#tabRRLD");var _grd=_pan.down("#grdRRL");var _me=this;
	fextpub_uamoPerm({obj:_pan.down("#opc_id"),mi:_mi});
	var _str1=fext_CS("rrhh.Record_LaboralGrid_Detail");fext_BSGP(_t1,_str1);_str1.sort("reclab_fecha", "ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxIndiv_dni","xxYear_ini","xxYear_fin","xxType_record","xxPag"],["",_r.data.year_id,_r.data.year_id,"grdDetail",1],_pan,["indiv_dni","","","",""]);});
	var _str=fext_CS("rrhh.Record_LaboralGrid_Head");fext_BSGP(_pan,_str);_str.sort("year_id","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnPrinter","btnExcel"]);_me.rrlq_tabsClean(comp,true);fext_PSEP(str,["xxIndiv_dni","xxType_record","xxPag","xxMenu_id","vs"],["","grdHead",1,_mi,fext_JE(fextpub_sessVar())],_pan,["indiv_dni","","","",""]);});
},
rrlq_tabsClean:function(poC,pbB){var _tab=poC.down("#tabRRLD");var _pag=_tab.down("#pagRRLD");fext_gridClean(_pag.getStore(),_pag);_pag.setDisabled(pbB);},
rrlq_pan_Clean:function(poC){var _pag=poC.down("#pagRRL");fext_gridClean(_pag.getStore(),_pag);
	_pag.setDisabled(!fext_IE(poC.down("#indiv_key"))&& poC.down("#indiv_dni").getValue()==poC.down("#INDIV_DNI").getValue()?false:true);
	fext_SD(poC,"btnPrinter",!fext_IE(poC.down("#indiv_key"))&&fext_GV(poC,"indiv_dni")==fext_GV(poC,"INDIV_DNI")?fextpub_uamoBtn(poC.down("#opc_id"),8):true);
	fext_SD(poC,"btnExcel",!fext_IE(poC.down("#indiv_key"))&&fext_GV(poC,"indiv_dni")==fext_GV(poC,"INDIV_DNI")?fextpub_uamoBtn(poC.down("#opc_id"),32):true);
},
rrlq_pan_btnPr:function(btn,e,opt){var _panRRL=btn.up("#panRRL");var _mi=_panRRL.up("panel").getMI();var _vs=fextpub_sessVar();
	if(fext_IE(_panRRL.down("#indiv_key"))){return false;} if(fextpub_uamoBtn(_panRRL.down("#opc_id"),8)){return false;}
	fext_pdf("","R.L. "+_panRRL.down("#indiv_dni").getValue(), "php/pdf/pdf_rrhh_record_laboral_printer.php?xxIndiv_dni="+_panRRL.down("#indiv_dni").getValue()+"&xxIndiv_apenom="+_panRRL.down("#indiv_apenom").getValue()+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id="+_mi+"&xxOpc_id=8");
},
rrlq_pan_btnPIS:function(btn,e,opt){var _p=btn.up("#panRRL"); var _pan=_p.up("panel");fext_CC("pub.IndividuosS");
	_pan.setCompPIS(fext_compSearch({cc:_p,os:_pan.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Trabajador ::.",ck:fext_GV(_p,"indiv_key")}));
},
rrlq_pan_grdRRLCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){cell.up("rrhh_reclabq").down("#grdRRLD").getStore().load();},
rrlq_pan_grdRRLSelectionChange:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.panel.up("#panRRL");var _cbo=_pan.down("#opc_id");this.rrlq_tabsClean(_pan.up("panel"),false);}},
rrlq_pan_indiv_dniBlur:function(txtf,The,opt){this.rrlq_pan_indiv_dniSearch(txtf.up("panel"),0);},
rrlq_pan_indiv_dniChange:function(txtf,newVal,oldVal,opt){this.rrlq_pan_Clean(txtf.up("panel"));},
rrlq_pan_indiv_dniFocus:function(txtf,The,opt){this.rrlq_pan_indiv_dniSearch(txtf.up("panel"),1);},
rrlq_pan_indiv_dniKeypress:function(txtf,e,opt){if(e.getCharCode()==13){this.rrlq_pan_indiv_dniSearch(txtf.up("panel"),13);}},
rrlq_pan_indiv_dniSearch:function(poCallWin,pcType){fext_fieldSearch(pcType,poCallWin,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],"0",["","","","","",""],"");},
rrlq_pan_indiv_apenomChange:function(txtf,newVal,oldVal,opt){var _pan=txtf.up("#panRRL");var _cbo=_pan.down("#opc_id");
	_pan.down("#pagRRL").setDisabled(Ext.isEmpty(newVal)?true:false);if(!Ext.isEmpty(newVal)){_pan.down("#pagRRL").getStore().load();}
	fext_SDO(_pan,"btnPrinter",_cbo,8,Ext.isEmpty(newVal)?true:"");fext_SDO(_pan,"btnExcel",_cbo,32,Ext.isEmpty(newVal)?true:"");
},
rrlq_tlop_opc_idChange:function(cbo,newVal,oldVal,opt){if(!fextpub_uamoBtn(cbo,0)){cbo.up("tabpanel").child("#tabrrhh_ordenes_procedencias").tab.show();}},
rrlq_tlop_btnQueryClick:function(btn,e,opt){if(fextpub_uamoBtn(btn.up("panel").down("#opc_id"),3)){return false;}
	var _r=fext_grdSR(btn.up("panel").down("#grdrrhh_ordenes_procedencias"));if(!_r){return false;}
	if(_r.data.tablex==5000&&_r.data.doc_id==501){var _w=fext_CW("rrhh.PedidosEdit");_w.setTE(23);_w.setCK(_r.data.tablex_key);_w.setNoUsk("NOT");_w.show();
	}else if(_r.data.tablex==5010){var _w=fext_CW("rrhh.CotizacionesEdit");_w.setTE(13);_w.setMenuId(btn.up("rrhh_reclabq").getMI());_w.setCK(_r.data.tablex_key);_w.show();
	}else if(_r.data.tablex==5020){var _w=fext_CW("rrhh.Buena_ProEdit");
		_w.setTE(3);_w.setMenuId(btn.up("rrhh_reclabq").getMI());_w.setCK(_r.data.tablex_key);_w.show();
	}
},
rrlq_tlop_btnPrinterClick:function(btn,e,opt){if(fextpub_uamoBtn(btn.up("panel").down("#opc_id"),8)){return false;} 
	var _r=fext_grdSR(btn.up("panel").down("#grdrrhh_ordenes_procedencias"));if(!_r){return false;}var _vs=fextpub_sessVar();
	if(_r.data.tablex==5000&&_r.data.doc_id==501){
		fext_pdf("",_r.data.tablex_documento,"php/pdf/pdf_rrhh_pedidos_printer.php?xxPed_key="+_r.data.tablex_key+"&xxType_record=printer");
	}else if(_r.data.tablex==5010){
		fext_pdf("",_r.data.tablex_documento,"php/pdf/pdf_rrhh_cotizaciones_printer.php?xxCoti_key="+_r.data.tablex_key+"&xxType_record=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]+"&xxMenu_id=5118&xxOpc_id=8");
	}
},
rrlq_tlop_grdrrhh_ordenes_procedenciasSelectionChange:function(mod,rec,opt){	
	if(rec.length==1){var _pan=model.view.panel.up("panel");var _cbo=_pan.down("#opc_id");fext_SDO(_pan,"btnQuery",_cbo,3);fext_SDO(_pan,"btnPrinter",_cbo,8,rec[0].data.tablex==5020?true:"");}
},
});