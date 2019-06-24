Ext.define("Siace.controller.pub.Bienes_ServsS",{extend:"Ext.app.Controller",stores:["array.Bst"],views:["pub.Bienes_ServsS"],
init:function(application){this.control({
"pub_bss":{beforerender:this.pbss_BR},"pub_bss #btnAccept":{click:this.pbss_btnAcc},"pub_bss #btnCancel":{click:this.pbss_btnCan},
"pub_bss #tab01 #bs_nombre":{change:this.pbss_t1_Chg,keypress:this.pbss_t1_KP},"pub_bss #tab01 #bsc_id":{change:this.pbss_t1_ChgCbo},"pub_bss #tab01 #bsg_id":{change:this.pbss_t1_ChgCbo},"pub_bss #tab01 #bst_id":{change:this.pbss_t1_ChgCbo},
"pub_bss #tab01 #grdPBS":{itemdblclick:this.pbss_t1_grdItemDblClk,selectionchange:this.pbss_t1_grdSelChg},
"pub_bss #tab02 #cantid":{change:this.pbss_t2_Chg},"pub_bss #tab02 #pretot":{change:this.pbss_t2_Chg},"pub_bss #tab02 #preuni":{change:this.pbss_t2_Chg},
"pub_bss #tab":{tabchange:this.pbss_tabChg}
});},
pbss_BR:function(comp,opt){var _TR=comp.getTR();var _t1=comp.down("#tab01");var _t2=comp.down("#tab02");var _me=this;
	fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});fext_SV(comp,"bst_id",comp.getBst_id()==""?1:comp.getBst_id()*1);if(comp.getBst_id()!=""){fext_Dsb(comp,"bst_id");}
	var _str=fext_CS("pub.Bienes_ServsS");fext_BSGP(_t1,_str);_str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"",["btnAccept","tab02"]);fext_PSEP(str,["xxBst_id","xxBsg_id","xxBsc_id","xxBsf_id","xxBs_nombre","xxBs_estado","xxType_record","xxType_query","xxPag"],["","","","","",1,(_TR==""?"grdSearch":_TR),,comp.getTQ(),1],comp,["bst_id","bsg_id","bsc_id","bsf_id","bs_nombre","","","",""]);});
	var _str2=fext_CS("pub.Bienes_Servs_Especificas_DetBalances");var _cbo=_t2.down("#espedet_id");_cbo.bindStore(_str2);
	_str2.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxBs_key","xxBst_id","xxTarea_key","xxTipgast_code","xxFuefin_id","xxTiprecur_id","xxEspedet_type","xxBsespedet_estado","xxType_record"],["",fext_GV(_t1,"bst_id"),comp.getTK(),comp.getTGC(),comp.getFFI(),comp.getTRI(),comp.getEDT(),1,"cbo"],_t2,["bs_key","","","","","","","",""]);});
},
pbss_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnAccept","tab02"]);fext_GS(poC,"espedet_id").removeAll();fext_SV(poC,"espedet_id","");},
pbss_btnAcc:function(btn,e,opt){fext_CC("pub.BSS").pbss(btn);},
pbss_btnCan:function(btn,e,opt){var _w=btn.up("window");_w.down("#tab").setActiveTab(0);fext_Dsb(_w,"",["btnAccept","tab02"]);_w.close();if(_w.getAD()==true){_w.destroy();}},
pbss_t1_Chg:function(txtf,newV,oldV,opt){this.pbss_Clean(txtf.up("window"));},
pbss_t1_ChgCbo:function(cbo,newV,oldV,opt){var _t=cbo.up("#tab01");var _ii=fext_oii(cbo);if(oldV!=undefined){this.pbss_Clean(cbo.up("window"));}if(_ii=="bst_id"){fextpub_bsgLoad({pan:_t});}else if(_ii=="bsg_id"){fextpub_bscLoad({pan:_t});}else if(_ii=="bsc_id"){fextpub_bsfLoad({pan:_t});}},
pbss_t1_KP:function(txtf,e,opt){fext_KPL(txtf,e,"tab01");},
pbss_t1_grdItemDblClk:function(comp,rec,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");if(!_btn.isDisabled){_btn.fireEvent("click",_btnA,e,opt);}},
pbss_t1_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");if(_w.getTab02()==5)_w.down("#tab02").enable();fext_SD(_w,"btnAccept",r[0].data.bs_key==_w.getCK()?true:false);}},
pbss_tabChg:function(tabP,newC,oldC,o){if(newC.itemId=="tab02"){var _w=tabP.up("window");var _r=fext_grdSR(_w,"grdPBS");if(!_r){return false;}var _t=_w.down("#tab02");var _d=_r.data;if(_d.bs_key!=fext_GV(_t,"bs_key")){
	fext_SV(_t,"bs_key",_d.bs_key);fext_SV(_t,"bs_codigo",_d.bs_codigo);fext_SV(_t,"bs_nombre",_d.bs_nombre);fext_SV(_t,"unimed_nombre",_d.unimed_nombre);fext_GS(_t,"espedet_id").removeAll();fext_GS(_t,"espedet_id").load({});
}}},
pbss_t2ST:function(poC,pcT){var _c=fext_GV(poC,"cantid")*1;var _pu=fext_GV(poC,"preuni")*1;var _pt=fext_GV(poC,"pretot")*1;
	if(pcT=="cantid"){if(_pu>0){fext_SV(poC,"pretot",fjsRound(_c*_pu,2));}else if(_pt>0){fext_SV(poC,"preuni",fjsRound(_pt*_c,6));}}
	else if(pcT=="preuni"){if(_c>0){fext_SV(poC,"pretot",fjsRound(_c*_pu,2));}else if(_pt>0){fext_SV(poC,"cantid",fjsRound(_pt/_pu,3));}}
	else if(pcT=="pretot"){if(_c>0){fext_SV(poC,"preuni",fjsRound(_pt/_c,6));}else if(_pu>0){fext_SV(poC,"cantid",fjsRound(_pt/_pu,3));}}
},
pbss_t2_Chg:function(txtf,newV,oldV,o){if(newV*1!=oldV*1){this.pbss_t2ST(txtf.up("panel"),fext_oii(txtf));}}
});