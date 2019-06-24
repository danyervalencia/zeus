Ext.define("Siace.controller.log.DonacionesB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.DonacionesB"],refs:[{ref:"ldb",selector:"log_donab"}],
init:function(application){this.control({
"log_donab":{beforerender:this.ldb_BR},"log_donab #panLD #opc_id":{change:this.ldb_pan_oiChg},"log_donab #panLD #btnNew":{click:this.ldb_pan_btn},"log_donab #panLD #btnModify":{click:this.ldb_pan_btn},"log_donab #panLD #btnQuery":{click:this.ldb_pan_btn},"log_donab #panLD #btnDelete":{click:this.ldb_pan_btn},"log_donab #panLD #btnPrinter":{click:this.ldb_pan_btn},"log_donab #panLD #btnPers_search":{click:this.ldb_pan_btn},
"log_donab #panLD actioncolumn":{click:this.ldb_pan_acDow},"log_donab #panLD #doc_id":{change:this.ldb_pan_ChgCbo},"log_donab #panLD #fechaini":{change:this.ldb_pan_Chg},"log_donab #panLD #fechafin":{change:this.ldb_pan_Chg},"log_donab #panLD #dona_nro":{change:this.ldb_pan_Chg},"log_donab #panLD #dona_serie":{change:this.ldb_pan_Chg},
"log_donab #panLD #grdLD":{cellclick:this.ldb_pan_grdCellClk,selectionchange:this.ldb_pan_grdSelChg},
"log_donab #panLD #pers_ruc":{blur:this.ldb_pan_prBlur,change:this.ldb_pan_Chg,focus:this.ldb_pan_prFocus,keypress:this.ldb_pan_prKP},
"log_donab #tabLDD #btnAdd":{click:this.ldb_t1_btn},"log_donab #tabLDD #btnModify":{click:this.ldb_t1_btn},"log_donab #tabLDD #btnQuery":{click:this.ldb_t1_btn},"log_donab #tabLDD #btnDelete":{click:this.ldb_t1_btn},
"log_donab #tabLDD #grdLDD":{selectionchange:this.ldb_t1_grdSelChg},

});},
ldb_BR:function(comp,opt){var _mi=comp.getMI();if(!fjsIn_array(_mi,[5167])){return false;}var _pan=comp.down("#panLD");var _grd=_pan.down("#grdLD");var _t1=comp.down("#tabLDD");var _me=this;
	fextpub_uamoPerm({comp:comp,mi:_mi});fextpub_docFilt({obj:comp.down("#doc_id"),TQ:"DONACION"});
	var _str1=fext_CS("log.Donaciones_DetB");fext_BSG(_t1,_str1);fext_BSP(_t1,_str1);_str1.sort("donadet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery","btnDelete"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxDona_key","xxType_record","xxPag"],[_r.data.dona_key,"grd",1]);});
	var _str=fext_CS("log.DonacionesB");fext_BSG(_pan,_str);fext_BSP(_pan,_str);_str.sort("dona_fecha","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete","btnPrinter"]);_me.ldb_tabsClean(comp,true);fext_PSEP(str,["xxDona_nro","xxFechaini","xxFechafin","xxPers_key","xxType_record","vs","xxMenu_id","xxPag"],["","","","","grd",fext_JE(fextpub_sessVar()),_mi,1],_pan,["dona_nro","fechaini","fechafin","pers_key","","","",""]);});
},
ldb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("log_donab"),"grdLD")){return false;}fext_GS(comp).load();},
ldb_tabsClean:function(poC,pb){var _md=fext_CM("log.DonacionW");var _t=poC.down("#tabLDD");fext_grdOC(_t,pb,_md);fext_SDO(_t,"btnAdd",poC.down("#panLD").down("#opc_id"),1,pb?true:"");fext_Dsb(_t,"",["btnModify","btnQuery","btnDelete"]);},
ldb_pan_Chg:function(txtf,newV,oldV,opt){this.ldb_pan_Clean(txtf.up("#panLD"));},
ldb_pan_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.ldb_pan_Clean(cbo.up("#panLD"));}},
ldb_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete","btnPrinter"]);this.ldb_tabsClean(this.getLdb(),true);},
ldb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
ldb_pan_btn:function(btn,e,opt){fext_CC("log.DonaBB").ldb(btn,opt);},
ldb_pan_acDow:function(grid,cell,row,col,e,rec,t){fext_CC("log.Donaciones").ld_DF(rec);},
ldb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){if(!(cellI==5&&r.data.dona_file1!="")){fext_GS(cell.up("log_donab"),"grdLDD").load();}},
ldb_pan_grdSelChg:function(mod,r,o){fext_CC("log.DonaB").ldb_sc(mod,r);},
ldb_pan_prBlur:function(txtf,The,opt){this.ldb_pan_prS(txtf.up("#panLD"),0);},
ldb_pan_prFocus:function(txtf,The,opt){this.ldb_pan_prS(txtf.up("#panLD"),1);},
ldb_pan_prKP:function(txtf,e,opt){if(e.getCharCode()==13){this.ldb_pan_prS(txtf.up("#panLD"),13);}},
ldb_pan_prS:function(poC,pc){fext_CC("log.Donaciones").ld_SP(poC,pc);},
ldb_t1_btn:function(btn,e,opt){fext_CC("log.DonaBT1B").ldb(btn);},
ldb_t1_grdSelChg:function(mod,r,o){fext_CC("log.DonaBT1").ldb_sc(mod,r);},
});