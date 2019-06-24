Ext.define("Siace.controller.pub.Bienes_ServsSA",{extend:"Ext.app.Controller",stores:["array.Bst"],views:["pub.Bienes_ServsSA"],
init:function(application){this.control({
"pub_bssa":{beforerender:this.pbss_BeforeRender},"pub_bssa #btnAccept":{click:this.pbss_btnAcceptClick},"pub_bssa #btnCancel":{click:this.pbss_btnCancelClick},
"pub_bssa #tab01 #bs_nombre":{change:this.pbss_t1_bs_nombreChange,keypress:this.pbss_t1_bs_nombreKeypress},"pub_bssa #tab01 #bsc_id":{change:this.pbss_t1_bsc_idChange},"pub_bssa #tab01 #bsg_id":{change:this.pbss_t1_bsg_idChange},"pub_bssa #tab01 #bst_id":{change:this.pbss_t1_bst_idChange},
"pub_bssa #tab01 #grdPBS":{itemdblclick:this.pbss_t1_grdPBSItemdblclick,selectionchange:this.pbss_t1_grdPBSSelectionchange},
"pub_bssa #tab02 #cantid":{change:this.pbss_t2_cantidChange},"pub_bssa #tab02 #pretot":{change:this.pbss_t2_pretotChange},"pub_bssa #tab02 #preuni":{change:this.pbss_t2_preuniChange},
"pub_bssa #tabSearch":{tabchange:this.pbss_tabSearchTabChange}
});},
pbss_BeforeRender:function(comp,opt){var _grd=comp.down("#grdPBS");var _pag=comp.down("#pagPBS");var _tab=comp.down("#tabSearch"); var _me=this;
	fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});
	comp.down("#bst_id").setValue(comp.getBst_id()==""?1:comp.getBst_id()*1);if(comp.getBst_id()!=""){comp.down("#bst_id").disable();}
	fextbud_espedetFilt({pan:comp,TQ:"SOLO_BS"});
	
	var _str=fext_CS("pub.Bienes_ServsSearch"); _grd.bindStore(_str); _pag.bindStore(_str); _str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){comp.down("#btnAccept").disable(); comp.down("#tab02").disable(); var _prx=str.getProxy();
		_prx.setExtraParam("xxBst_id",comp.down("#bst_id").getValue()); _prx.setExtraParam("xxBsg_id",comp.down("#bsg_id").getValue()); _prx.setExtraParam("xxBsc_id",comp.down("#bsc_id").getValue()); _prx.setExtraParam("xxBsf_id",comp.down("#bsf_id").getValue()); _prx.setExtraParam("xxBs_nombre",comp.down("#bs_nombre").getValue()); _prx.setExtraParam("xxBs_estado",comp.getE());
		_prx.setExtraParam("xxType_record",comp.getTypeRecord()==""?"grdSearch":comp.getTypeRecord()); _prx.setExtraParam("xxType_query",comp.getTypeQuery());_prx.setExtraParam("xxPag",1);
	});
},
pbss_Clean:function(poComp){var _pag=poComp.down("#pagPBS"); var _str=_pag.getStore(); fext_gridClean(_str,_pag); poComp.down("#btnAccept").disable(); poComp.down("#tab02").disable();},
pbss_btnAcceptClick:function(btn,e,opt){var _win=btn.up("window"); var _grd=_win.down("#grdPBS"); var _close=true; var _rec=fext_grdSR(_grd); if(!_rec||(_rec.data.bs_key==_win.getCallKey())){return false;} var _wc=_win.getCallWindow();
	if(_wc!==null){
		if(_win.getTypeReturn()=="ADD_WLOEP"){_close=fext_CC("log.OrdenesEditP").loep_grdLODAdd(_wc,_rec,{"detalle":_win.down("#detalle").getValue(),"cantid":_win.down("#cantid").getValue()*1,"preuni":_win.down("#preuni").getValue()*1,"pretot":_win.down("#pretot").getValue()*1,"detalle":_win.down("#detalle").getValue(),"espedet_id":_win.down("#espedet_id").getValue(),"espedet_codigo":_win.down("#espedet_id").getRawValue().substr(0,15)});
			if(_close){_win.down("#tabSearch").setActiveTab(0);_win.down("#btnAccept").disable();_win.down("#cantid").setValue("");_win.down("#preuni").setValue("");_win.down("#pretot").setValue("");_win.down("#pretot").setValue("");_win.down("#detalle").setValue("");_win.down("#espedet_id").setValue(0);}
		}else{_wc.down("#bs_key").setValue(_rec.data.bs_key); _wc.down("#bs_codigo").setValue(_rec.data.bs_codigo); _wc.down("#bs_nombre").setValue(_rec.data.bs_nombre);}
	}
	if(_close){_win.close(); if(_win.getActionDestroy()==true){_win.destroy();}}
},
pbss_btnCancelClick:function(btn,e,opt){var _win=btn.up("window"); _win.close(); if(_win.getActionDestroy()==true){_win.destroy();}},
pbss_t1_bs_nombreChange:function(txtf,newVal,oldVal,opt){this.pbss_Clean(txtf.up("window"));},
pbss_t1_bs_nombreKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("window").down("#grdPBS").getStore().load();}},
pbss_t1_bsc_idChange:function(combo,newVal,oldVal,opt){if(oldVal!==undefined){this.pbss_Clean(combo.up("window"));}fextpub_bsfLoad({pan:combo.up("window")});},
pbss_t1_bsg_idChange:function(combo,newVal,oldVal,opt){if(oldVal!==undefined){this.pbss_Clean(combo.up("window"));}fextpub_bscLoad({pan:combo.up("window")});},
pbss_t1_bst_idChange:function(combo,newVal,oldVal,opt){if(oldVal!==undefined){this.pbss_Clean(combo.up("window"));}fextpub_bsgLoad({pan:combo.up("window")});},
pbss_t1_grdPBSItemdblclick:function(comp,rec,item,index,e,opt){var _btnA=comp.up("window").down("#btnAccept"); if(!_btnA.isDisabled){_btnA.fireEvent("click",_btnA,e,opt);}},
pbss_t1_grdPBSSelectionchange:function(mod,rec,opt){if(rec.length==1){var _win=mod.view.panel.up("window");_win.down("#tab02").enable(); _win.down("#btnAccept").setDisabled(rec[0].data.bs_key==_win.getCallKey()?true:false);}},
pbss_t2Subtotal:function(poComp,pcType){var _cantid=poComp.down("#cantid").getValue()*1; var _preuni=poComp.down("#preuni").getValue()*1; var _pretot=poComp.down("#pretot").getValue()*1;
	if(pcType=="CA"){if(_preuni>0){ poComp.down("#pretot").setValue(fjsRound(_cantid*_preuni,2)); }else if(_pretot>0){ poComp.down("#preuni").setValue(fjsRound(_pretot*_cantid,6)); }}
	else if(pcType=="PU"){if(_cantid>0){ poComp.down("#pretot").setValue(fjsRound(_cantid*_preuni,2)); }else if(_pretot>0){ poComp.down("#cantid").setValue(fjsRound(_pretot/_preuni,3)); }}
	else if(pcType=="PT"){if(_cantid>0){ poComp.down("#preuni").setValue(fjsRound(_pretot/_cantid,6)); }else if(_preuni>0){ poComp.down("#cantid").setValue(fjsRound(_pretot/_preuni,3)); }}
},
pbss_t2_cantidChange:function(txtf,newVal,oldVal,eopt){if(newVal*1!==oldVal*1){this.pbss_t2Subtotal(txtf.up("panel"),"CA");}},
pbss_t2_pretotChange:function(txtf,newVal,oldVal,eopt){if(newVal*1!==oldVal*1){this.pbss_t2Subtotal(txtf.up("panel"),"PT");}},
pbss_t2_preuniChange:function(txtf,newVal,oldVal,eopt){if(newVal*1!==oldVal*1){this.pbss_t2Subtotal(txtf.up("panel"),"PU");}},
pbss_tabSearchTabChange:function(tabPan,newCard,oldCard,eopt){if(newCard.itemId=="tab02"){var _win=tabPan.up("window"); var _rec=fext_grdSR(_win.down("#grdPBS")); if(!_rec){return false;} if(_rec.data.bs_key!==_win.down("#tab02").down("#bs_key").getValue()){
	_win.down("#tab02").down("#bs_key").setValue(_rec.data.bs_key);
	_win.down("#tab02").down("#bs_codigo").setValue(_rec.data.bs_codigo);
	_win.down("#tab02").down("#bs_nombre").setValue(_rec.data.bs_nombre);
	_win.down("#tab02").down("#unimed_nombre").setValue(_rec.data.unimed_nombre);
	//_win.down("#tab02").down("#espedet_id").getStore().removeAll();
	//_win.down("#tab02").down("#espedet_id").getStore().load({ });
}}}
});