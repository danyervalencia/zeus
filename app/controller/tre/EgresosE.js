Ext.define("Siace.controller.tre.EgresosE",{extend:"Ext.app.Controller",stores:["array.DocPago","array.DocPagoProc","array.TipDocIdentVenta"],views:["tre.EgresosE"],
init:function(application){this.control({
"tre_egree":{beforeshow:this.tee_BS},"tre_egree #btnSave":{click:this.tee_btn},"tre_egree #btnUndo":{click:this.tee_btn},"tre_egree #btnExit":{click:this.tee_btn},"tre_egree #btnPIS":{click:this.tee_btn},"tre_egree #btnPPS":{click:this.tee_btn},
"tre_egree #indiv_dni":{blur:this.tee_indiv_dniBlur,focus:this.tee_indiv_dniFocus,keypress:this.tee_indiv_dniKP},"tre_egree #pers_ruc":{blur:this.tee_pers_rucBlur,focus:this.tee_pers_rucFocus,keypress:this.tee_pers_rucKP},
"tre_egree #tablex_doc":{change:this.tee_tablex_docChg},"tre_egree #tablex_nro":{blur:this.tee_tablex_nroBlur,focus:this.tee_tablex_nroFocus,keypress:this.tee_tablex_nroKP},"tre_egree #tipdocident_id":{change:this.tee_tdiChg}
});},
tee_BS:function(comp,opt){var _TE=comp.getTE();if(!fjsIn_array(comp.getMI(),[4119,2129])){return false;}if(!fjsIn_array(_TE,[1,11,2,3])){return false;}comp.down("#cntPers").setFieldLabel("");comp.down("#cntIndiv").setFieldLabel("");var _cboCB=comp.down("#cuebanc_key");var _grdTE=comp.down("#grdTE");
	_cboCB.bindStore(fext_CS("tre.Cuentas_BancariasCboComprob"));comp.down("#meta_id").bindStore(fext_CS("bud.MetasCbo"));comp.down("#tarea_key").bindStore(fext_CS("bud.TareasCbo")); comp.down("#fuefin_id").bindStore(fext_CS("bud.Fuentes_FinanciamientoCbo"));
	var _strTE=fext_CS("tre.EgresosB");_grdTE.bindStore(_strTE);_strTE.sort("egre_documento","ASC");
	_strTE.on("beforeload",function(str,oper,opt){var _prx=str.getProxy();_prx.setExtraParam("xxType_record","grd");_prx.setExtraParam("xxPag",1);_prx.setExtraParam("vs",fext_JE(fextpub_sessVar()));_prx.setExtraParam("ssNO_USK","NoT");});
	fext_CC("tre.EgreE"+fjsLpad(_TE,2,"0")).tee(comp);


	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,});_ce.init(_grdTE);
},
tee_btn:function(btn,e,opt){fext_CC("tre.EgreEB").tee(btn);},
tee_indiv_dniBlur:function(txtf,The,opt){this.tee_indiv_dniS(txtf.up("window"),0);},
tee_indiv_dniFocus:function(txtf,The,opt){this.tee_indiv_dniS(txtf.up("window"),1);},
tee_indiv_dniKP:function(txtf,e,opt){if(e.getCharCode()==13){this.tee_indiv_dniS(txtf.up("window"),13);}},
tee_indiv_dniS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],1,["Siace.view.pub.IndividuosEdit","Nuevo Registro de Identidad ::.",["indiv_dni"],"","pub.IndividuosEdit",poCC.getMI()]);},
tee_pers_rucBlur:function(txtf,The,opt){this.tee_pers_rucS(txtf.up("window"),0);},
tee_pers_rucFocus:function(txtf,The,opt){this.tee_pers_rucS(txtf.up("window"),1);},
tee_pers_rucKP:function(txtf,e,opt){if(e.getCharCode()==13){this.tee_pers_rucS(txtf.up("window"),13);}},
tee_pers_rucS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["pers_key","PERS_RUC","pers_ruc","pers_nombre"],["php/public_personas_json_records.php","xxPers_ruc","textfield_search",""],1,["Siace.view.pub.PersonasEdit","Nuevo Proveedor ::.",["pers_ruc"],"","pub.PersonasEdit",poCC.getMI()],"")},
tee_tablexS:function(poC){fext_CC("tre.EgreETS").teets_Search({w:poC});},
tee_tablex_docChg:function(cbo,newV,oldV,opt){if(oldV!==undefined){this.tee_tablexS(cbo.up("window"));}},
tee_tablex_nroBlur:function(txtf,The,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),6,0));}if(txtf.getValue()*1!=txtf.up("window").down("#TABLEX_NRO").getValue()*1){this.tee_tablexS(txtf.up("window"));}},
tee_tablex_nroFocus:function(txtf,The,opt){fext_SV(txtf.up("window"),"TABLEX_NRO",txtf.getValue());},
tee_tablex_nroKP:function(txtf,e,opt){if(e.getCharCode()==13){this.tee_tablexS(txtf.up("window"));}},
tee_tdiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _TE=_w.getTE();var _dsb=fjsIn_array(_TE,[1,2])?false:true;
	if(newV==1){fext_SVI(_w,"cntPers",false);fext_SVI(_w,"cntIndiv",true);fext_SD(_w,"",_dsb,["indiv_dni","btnPIS"]);fext_SV(_w,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre"]);}
	else if(newV==3){fext_SVI(_w,"cntPers",true);fext_SVI(_w,"cntIndiv",false);fext_SD(_w,"",_dsb,["pers_ruc","btnPPS"]);fext_SV(_w,"","",["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
	else{fext_Dsb(_w,"",["pers_ruc","btnPPS","indiv_dni","btnPIS"]);if(fjsIn_array(_TE,[1,2])){fext_SV(_w,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre","indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}}
}
});