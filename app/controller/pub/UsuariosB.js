Ext.define("Siace.controller.pub.UsuariosB",{extend:"Ext.app.Controller",views:["pub.UsuariosB"],refs:[{ref:"pub",selector:"pub_usurb"}],
init:function(application){this.control({
"pub_usurb":{beforerender:this.pub_BR},"pub_usurb #pan #opc_id":{change:this.pub_pan_oiChg},
"pub_usurb #pan #btnNew":{click:this.pub_pan_btn},"pub_usurb #pan #btnModify":{click:this.pub_pan_btn},"pub_usurb #pan #btnKey":{click:this.pub_pan_btn},
"pub_usurb #pan #grdPU":{cellclick:this.pub_pan_grdCellClk,selectionchange:this.pub_pan_grdSelChg},
"pub_usurb #pan #indiv_apmaterno":{change:this.pub_pan_Chg,keypress:this.pub_pan_KP},"pub_usurb #pan #indiv_appaterno":{change:this.pub_pan_Chg,keypress:this.pub_pan_KP},"pub_usurb #pan #indiv_nombres":{change:this.pub_pan_Chg,keypress:this.pub_pan_KP},"pub_usurb #pan #usur_login":{change:this.pub_pan_Chg,keypress:this.pub_pan_KP},
"pub_usurb #tabPUA #opc_id":{change:this.pub_tabs_oiChg},
"pub_usurb #tabPUA #btnNew":{click:this.pub_t1_btn},"pub_usurb #tabPUA #btnModify":{click:this.pub_t1_btn},"pub_usurb #tabPUA #btnQuery":{click:this.pub_t1_btn},"pub_usurb #tabPUA #btnTarea":{click:this.pub_t1_btn},"pub_usurb #tabPUA #btnMenu":{click:this.pub_t1_btn},"pub_usurb #tabPUA #btnConstancy":{click:this.pub_t1_btn},
"pub_usurb #tabPUA #grdPUA":{selectionchange:this.pub_t1_grdSelChg}
});},
pub_BR:function(comp,opt){var _mi=comp.getMI();_pan=comp.down("#pan");var _t1=comp.down("#tabPUA");var _grd=_pan.down("#grdPU");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});
	var _str1=fext_CS("pub.Usuarios_AccesosPUB");fext_BSGP(_t1,_str1);_str1.sort("year_id","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery","btnTarea","btnMenu"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxUsur_key","xxType_record","xxPag"],[_r.data.usur_key,"grdPUB",1]);});
	var _str=fext_CS("pub.UsuariosB");fext_BSGP(_pan,_str);_str.sort("indiv_apenom","ASC");
	_str.on("beforeload",function(str,oper,opt){_me.pub_pan_DB(_pan);_me.pub_tabsClean(comp,true);fext_PSEP(str,["xxUsur_login","xxIndiv_appaterno","xxIndiv_apmaterno","xxIndiv_nombres","xxType_record","xxPag"],["","","","","grd",1],_pan,["usur_login","indiv_appaterno","indiv_apmaterno","indiv_nombres","",""]);});_str.load();
},
pub_tabsClean:function(poC,pb){var _md=fext_CM("pub.UsuarioW");var _t=poC.down("#tabPUA");var _cbo=_t.down("#opc_id");fext_grdOC(_t,pb?true:fextpub_uamoBtn(_cbo,0),_md);fext_SDO(_t,"btnNew","",1,pb);fext_Dsb(_t,"",["btnModify","btnQuery","btnTarea","btnMenu","btnConstancy"]);_t.down("#indiv_foto").setSrc("");},
pub_tabs_oiChg:function(cbo,newV,oldV,opt){fext_TS(cbo);},
pub_pan_Clean:function(poC){fext_grdOC(poC);this.pub_pan_DB(poC);this.pub_tabsClean(poC.up("panel"),true);},
pub_pan_Chg:function(txtf,newV,oldV,opt){this.pub_pan_Clean(txtf.up("panel"));},
pub_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnDelete","btnKey"]);},
pub_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
pub_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
pub_pan_btn:function(btn,e,opt){fext_CC("pub.UsurBB").pub(btn);},
pub_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){var _t=this.getPub().down("#tabPUA");var _cbo=_t.down("#opc_id");if(!fextpub_uamoBtn(_cbo,0)){fext_GS(_t).load();}},
pub_pan_grdSelChg:function(mod,r,o){fext_CC("pub.UsurB").pub_sc(mod,r);},
pub_t1_btn:function(btn,e,opt){fext_CC("pub.UsurBT1B").pub(btn);},
pub_t1_grdSelChg:function(mod,r,o){fext_CC("pub.UsurBT1").pub_sc(mod,r);},
});