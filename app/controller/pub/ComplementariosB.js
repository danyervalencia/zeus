Ext.define("Siace.controller.pub.ComplementariosB",{extend:"Ext.app.Controller",stores:["array.Bst","array.YearsAB"],views:["pub.ComplementariosB"],
init:function(application){this.control({
"pub_complb":{beforerender:this.pcb_BR},"pub_complb #panPC #opc_id":{change:this.pcb_pan_oiChg},"pub_complb #panPC #btnNew":{click:this.pcb_pan_btn},"pub_complb #panPC #btnModify":{click:this.pcb_pan_btn},"pub_complb #panPC #btnQuery":{click:this.pcb_pan_btn},"pub_complb #panPC #btnDelete":{click:this.pcb_pan_btn},
"pub_complb #panPC #compl_nombre":{change:this.pcb_pan_Chg,keypress:this.pcb_pan_KP},"pub_complb #panPC #grdPC":{cellclick:this.pcb_pan_grdCellClk,selectionchange:this.pcb_pan_grdSelChg},
"pub_complb #tabC":{activate:this.pcb_tabsAct},"pub_complb #tabC #btnAdd":{click:this.pcb_t1_btn},"pub_complb #tabC #btnModify":{click:this.pcb_t1_btn},"pub_complb #tabC #btnQuery":{click:this.pcb_t1_btn},
"pub_complb #tabC #grdC":{selectionchange:this.pcb_t1_grdCSelChg},
});},
pcb_BR:function(comp,opt){var _mi=comp.getMI();_pan=comp.down("#panPC");_t1=comp.down("#tabC");var _grd=_pan.down("#grdPC");var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});
	
	var _str1=fext_CS("pub.Bienes_Servs_Clases_ComplementariosPCB");fext_BSGP(_t1,_str1);_str1.sort("bsc_codigo","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"",["btnModify","btnQuery"]);var _r=fext_grdSR(_grd);fext_PSEP(str,["xxCompl_key","xxType_record","xxPag"],[_r.data.compl_key,"grdPCB",1]);});

	var _str=fext_CS("pub.ComplementariosB");fext_BSGP(_pan,_str);_str.sort("compl_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete"]);fext_PSEP(str,["xxCompl_nombre","xxType_record","xxPag"],["","grd",1],_pan,["compl_nombre","",""]);});_str.load();
},
pcb_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("pub_complb"),"grdC")){return false;}fext_GS(comp).load();},
pcb_tabsClean:function(poC,pb){var _t=poC.down("#tabC");fext_grdOC(_t,pb);fext_SDO(_t,"btnAdd","",13,pb);fext_Dsb(_t,"",["btnModify","btnQuery"]);},
pcb_pan_Chg:function(cbo,newV,oldV,o){this.pcb_pan_Clean(cbo.up("panel"));},
pcb_pan_Clean:function(poC){fext_grdOC(poC);fest_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);this.pcb_tabsClean(poC.up("pub_complb"),true);},
pcb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"panPC");},
pcb_pan_oiChg:function(cbo,newV,oldV,o){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
pcb_pan_btn:function(btn,e,opt){fext_CC("pub.ComplBB").pcb(btn);},
pcb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("pub_complb"));},
pcb_pan_grdSelChg:function(mod,r,o){fext_CC("pub.ComplB").pcb_sc(mod,r);},
pcb_t1_btn:function(btn,e,opt){},
pcb_t1_grdCSelChg:function(mod,r,o){fext_CC("pub.ComplBT1").pab_sc(mod,r);}
});