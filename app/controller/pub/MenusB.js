Ext.define("Siace.controller.pub.MenusB",{extend:"Ext.app.Controller",views:["pub.MenusB"],
init:function(application){this.control({
"pub_menub":{beforerender:this.pmb_BR},"pub_menub #pan #opc_id":{change:this.pmb_pan_oiChg},"pub_menub #pan #btnQuery":{click:this.pmb_pan_btn},
"pub_menub #grdPM":{cellclick:this.pmb_pan_grdCellClk,selectionchange:this.pmb_pan_grdSelChg},
"pub_menub #grdO":{selectionchange:this.pmb_p1_grdSelChg},"pub_menub #grdU":{selectionchange:this.pmb_p2_grdSelChg},
});},
pmb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _p1=comp.down("#panO");var _p2=comp.down("#panU");var _grd=_p.down("#grdPM");var _me=this;var _vs=fextpub_sessVar();
	fextpub_uamoPerm({comp:_p2});
	var _str1=fext_CS("pub.Menus_OpcionesPMB");fext_BSGP(_p1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxMenu_id","xxType_record","vs"],[_r.data.menu_id,"grdPMB",fext_JE(_vs)],_p1,["","",""]);});
	var _str2=fext_CS("pub.Usuarios_Accesos_Menus_OpcionesPMB");fext_BSGP(_p2,_str2);_str2.sort("indiv_apenom","ASC");
	_str2.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_p1,"");fext_PSEP(str,["xxMenuopc_id","xxType_record","xxPag","vs"],[_r.data.menuopc_id,"grdPMB",1,fext_JE(_vs)],_p1,["","","",""]);});
	var _str=fext_CS("pub.MenusB");fext_BSGP(_p,_str);
	_str.on("beforeload",function(str,oper,opt){_me.pmb_tabsClean(comp,true);fext_PSEP(str,["xxMenu_id","xxType_record","xxPag","vs"],["","grd",1,fext_JE(_vs)],_p,["menu_parent","","",""]);});_str.load();
},
pmb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("pub_menub"),"grdBP")){return false;}fext_GS(comp).load();},
pmb_tabsClean:function(poC,pb){var _md=fext_CM("pub.MenuW");
	var _p=poC.down("#panO");fext_grdOC(_p,pb,_md);var _p=poC.down("#panU");fext_grdOC(_p,pb,_md);fext_Dsb(_p,"",["btnH","btnD"]);
},
pmb_tabs_oiChg:function(cbo,newV,oldV,o){fext_TS(cbo);},
pmb_pan_Chg:function(txtf,newV,oldV,o){this.pmb_pan_Clean(txtf.up("#pan"));},
pmb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo,"",3);this.pmb_pan_Clean(_p);},
pmb_pan_Clean:function(poC){fext_grdOC(poC);this.pmb_tabsClean(poC.up("panel"),true);},
pmb_pan_KP:function(txtf,e,o){fext_KPL(txtf,e,"pan");},
pmb_pan_oiChg:function(cbo,newV,oldV,opt){},
pmb_pan_btn:function(btn,e,o){fext_CC("siaf.ExpeB").pmb_btn(btn);},
pmb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){},
pmb_pan_grdSelChg:function(mod,r,o){fext_CC("pub.MenuB").pmb_sc(mod,r);},
pmb_p1_grdSelChg:function(mod,r,o){if(r.length==1){var _p=mod.view.up("pub_menub").down("#panU");fext_GS(_p,"grdU").load();_p.down("#pagU").enable();fext_Dsb(_p,"",["btnH","btnD"]);}},
pmb_p2_btn:function(btn,e,o){fext_CC("bud.ProyBT2").pmb_btn(btn);},
pmb_p2_grdSelChg:function(mod,r,o){fext_CC("pub.MenuBP2").pmb_sc(mod,r);},
});