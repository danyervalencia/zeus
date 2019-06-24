Ext.define("Siace.controller.rrhh.TrabajadoresB",{extend:"Ext.app.Controller",stores:["array.Years","array.TipDocIdentVentaAB"],views:["rrhh.TrabajadoresB"],
init:function(application){this.control({
"rrhh_trabjb":{beforerender:this.rtb_BR},"rrhh_trabjb #pan #opc_id":{change:this.rtb_pan_oiChg},
"rrhh_trabjb #pan #btnNew":{click:this.rtb_pan_btn},"rrhh_trabjb #pan #btnQuery":{click:this.rtb_pan_btn},"rrhh_trabjb #pan #btnPrinter":{click:this.rtb_pan_btn},
"rrhh_trabjb #grdPI":{cellclick:this.rtb_pan_grdCellClk,selectionchange:this.rtb_pan_grdSelChg},
"rrhh_trabjb #indiv_apmaterno":{change:this.rtb_pan_Chg,keypress:this.rtb_pan_KP},"rrhh_trabjb #indiv_appaterno":{change:this.rtb_pan_Chg,keypress:this.rtb_pan_KP},"rrhh_trabjb #indiv_dni":{change:this.rtb_pan_Chg,keypress:this.rtb_pan_KP},"rrhh_trabjb #panPI #indiv_nombres":{change:this.rtb_pan_Chg,keypress:this.rtb_pan_KP},"rrhh_trabjb #panPI #tipdocident_id":{change:this.rtb_pan_ChgCbo},
"rrhh_trabjb #tabRT":{activate:this.rtb_tabsAct},"rrhh_trabjb #tabRT #btnNew":{click:this.rtb_t1_btn},"rrhh_trabjb #tabRT #btnModify":{click:this.rtb_t1_btn},"rrhh_trabjb #tabRT #btnQuery":{click:this.rtb_t1_btn},"rrhh_trabjb #tabRT #btnDelete":{click:this.rtb_t1_btn},
"rrhh_trabjb #tabRT #grdRT":{selectionchange:this.rtb_t1_grdSelChg},
});},
rtb_BR:function(comp,opt){var _mi=comp.getMI();if(!fjsIn_array(_mi,[6101])){return false;}var _pan=comp.down("#pan");var _t1=comp.down("#tabRT");var _grd=_pan.down("#grdPI");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_tipdocidentFilt({obj:_pan.down("#tipdocident_id"),tdiei:1});
	
	var _str1=fext_CS("rrhh.TrabajadoresRTB");fext_BSGP(_t1,_str1);_str1.sort("carg_nombre","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxIndiv_key","xxType_record","xxPag"],[_r.data.indiv_key,"grdRTB",1]);});
	var _str=fext_CS("rrhh.TrabajadoresB");fext_BSGP(_pan,_str);_str.sort("indiv_apenom","ASC");	
	_str.on("beforeload",function(str,oper,opt){_me.rtb_pan_DB(_pan);_me.rtb_tabsClean(comp,true);fext_PSEP(str,["xxTipdocident_id","xxIndiv_dni","xxIndiv_appaterno","xxIndiv_apmaterno","xxIndiv_nombres","xxType_record","xxPag"],["","","","","","grd",1],_pan,["tipdocident_id","indiv_dni","indiv_appaterno","indiv_apmaterno","indiv_nombres","",""]);});
},
rtb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("rrhh_trabjb"),"grdPI")){return false;}fext_GS(comp).load();},
rtb_tabsClean:function(poC,pb){var _md=fext_CM("pub.IndividuoW");var _t=poC.down("#tabRT");fext_grdOC(_t,pb,_md);fext_Dsb(_t,"",["btnNew"]);},
rtb_tabs_oiChg:function(cbo,newV,oldV,opt){fext_TS(cbo);},
rtb_pan_Chg:function(txtf,newV,oldV,opt){this.rtb_pan_Clean(txtf.up("#pan"));},
rtb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined||_ii=="are"){this.rtb_pan_Clean(_p);if(_ii=="yea"){fextbud_tareasAMLoad({pan:_p});}else if(_ii=="met"){fextbud_tareasATLoad({pan:_p});}}if(_ii=="are"){fextbud_tareasAMLoad({pan:_p});}},
rtb_pan_Clean:function(poC){fext_grdOC(poC);this.rtb_pan_DB(poC);this.rtb_tabsClean(poC.up("rrhh_trabjb"),true);},
rtb_pan_DB:function(poC){fext_Dsb(poC,"",["btnQuery","btnPrinter"]);fext_Dsb(poC.up("rrhh_trabjb").down("#tabRT"),"",["pagRT","btnNew","btnModify","btnQuery"]);},
rtb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
rtb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
rtb_pan_btn:function(btn,e,opt){fext_CC("rrhh.TrabjBB").rtb(btn,opt);},
rtb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("rrhh_trabjb"));},
rtb_pan_grdSelChg:function(mod,r,o){fext_CC("rrhh.TrabjB").rtb_sc(mod,r);},
rtb_t1_btn:function(btn,e,opt){fext_CC("rrhh.TrabjBT1").rtb_btn(btn);},
rtb_t1_grdSelChg:function(mod,r,o){fext_CC("rrhh.TrabjBT1").rtb_sc(mod,r);}	
});