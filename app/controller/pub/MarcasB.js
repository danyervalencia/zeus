Ext.define("Siace.controller.pub.MarcasB",{extend:"Ext.app.Controller",stores:["array.Bst","array.YearsAB"],views:["pub.MarcasB"],
init:function(application){this.control({
"pub_marcb":{beforerender:this.pmb_BR},"pub_marcb #panM #opc_id":{change:this.pmb_pan_oiChg},"pub_marcb #panM #btnNew":{click:this.pmb_pan_btn},"pub_marcb #panM #btnModify":{click:this.pmb_pan_btn},"pub_marcb #panM #btnQuery":{click:this.pmb_pan_btn},"pub_marcb #panM #btnDelete":{click:this.pmb_pan_btn},
"pub_marcb #panM #marc_nombre":{change:this.pmb_pan_Chg,keypress:this.pmb_pan_KP},"pub_marcb #panM #grdM":{cellclick:this.pmb_pan_grdCellClk,selectionchange:this.pmb_pan_grdSelchg},
"pub_marcb #tabC":{activate:this.pmb_tabsAct},"pub_marcb #tabC #btnAdd":{click:this.pmb_tc_btn},"pub_marcb #tabC #btnModify":{click:this.pmb_tc_btn},"pub_marcb #tabC #btnQuery":{click:this.pmb_tc_btn},
"pub_marcb #tabC #grdC":{selectionchange:this.pmb_tc_grdSelChg},
"pub_marcb #tabMO":{activate:this.pmb_tmo_Activate},"pub_marcb #tabMO #opc_id":{change:this.pmb_tmo_opc_idChange},"pub_marcb #tabMO #btnAdd":{click:this.pmb_tmo_btnAddClick},"pub_marcb #tabMO #btnModify":{click:this.pmb_tmo_btnModifyClick},"pub_marcb #tabMO #btnQuery":{click:this.pmb_tmo_btnQueryClick},
});},
pmb_BR:function(comp,opt){var _mi=comp.getMI();_pan=comp.down("#panM");_t1=comp.down("#tabC");_t2=comp.down("#tabMO");var _grd=_pan.down("#grdM");var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});
	
	var _str1=fext_CS("pub.Bienes_Servs_Clases_MarcasPMB");fext_BSGP(_t1,_str1);_str1.sort("bsc_codigo","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMarc_key","xxType_record","xxPag"],[_r.data.marc_key,"grdPMB",1]);});
	var _str=fext_CS("pub.MarcasB");fext_BSGP(_pan,_str);_str.sort("marc_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete"]);_me.pmb_tabsClean(comp,true);fext_PSEP(str,["xxMarc_nombre","xxType_record","xxPag"],["","grd",1],_pan,["marc_nombre","",""]);});_str.load();
},
pmb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_marcb"),"grdM")){return false;}fext_GS(comp).load();},
pmb_tabsClean:function(poC,pb){var _t=poC.down("#tabC");fext_grdOC(_t,pb);fext_SDO(_t,"btnAdd","",13,pb);fext_Dsb(_t,"",["btnModify","btnQuery"]);},
pmb_pan_Chg:function(cbo,newV,oldV,opt){this.pmb_pan_Clean(cbo.up("panel"));},
pmb_pan_Clean:function(poC){fext_grdOC(poC);fest_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);this.pmb_tabsClean(poC.up("pub_marcb"),true);},
pmb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"panM");},
pmb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
pmb_pan_btn:function(btn,e,opt){fext_CC("pub.MarcBB").pmb(btn);},	
pmb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_marcb"));},
pmb_pan_grdSelchg:function(mod,r,o){fext_CC("pub.MarcB").pmb_sc(mod,r);},
pmb_tc_btn:function(btn,e,opt){},
pmb_tc_grdSelChg:function(mod,r,o){fext_CC("pub.MarcBBT1").pmb_sc(mod,r);}
});