Ext.define("Siace.controller.bud.Tareas_FftredSA",{extend:"Ext.app.Controller",views:["bud.Tareas_FftredSA"],
init:function(application){this.control({
"bud_tareaftesa":{activate:this.btfsa_Act,beforerender:this.btfsa_BR},
"bud_tareaftesa #btnAccept":{click:this.btfsa_btnAcc},"bud_tareaftesa #btnCancel":{click:this.btfsa_btnCan},
"bud_tareaftesa #grdBTF":{itemdblclick:this.btfsa_grdItemDblClk,selectionchange:this.btfsa_grdSelChg},
"bud_tareaftesa #meta_id":{change:this.btfsa_meta_idChange},"bud_tareaftesa #tarea_key":{change:this.btfsa_tarea_keyChange} //"bud_tareaftesa #fuefin_idx":{change:this.btfsa_fuefin_idxChange},
});},
btfsa_Act:function(comp,opt){if(comp.getF()){var _yi=comp.getYI()*1;var _mei=comp.getMEI()*1;var _tk=comp.getTK();_ffi=comp.getFFI()*1;var _ak=comp.getAK();comp.setF(false);	
	fextbud_fuefinFilt({pan:comp,obj:comp.down("#fuefin_idx"),ffi:_ffi,val:_ffi,dsb:(_ffi>0?true:false)});fextpub_areasFilt({obj:comp.down("#area_keyx"),filt:false,TR:"cbo",nuk:"NoT"});
	//if(Ext.isEmpty(_area)){comp.setFiltArea(true);fextbud_tareas_areasParameters({"panel":comp,"type_record":"combo_area_abrev","order_by":"area_abrev"});}
	//else{fextpub_areasFilter({"objeto":comp.down("#area_key"),"area_key":_area,"no_usk":"NoT","value":_area,"disabled":true});}
	if(Ext.isEmpty(_tk)){comp.setFT(true);fextbud_tareasParam({pan:comp});}
	else{fextbud_tareasFilt({pan:comp,tk:_tk,TR:"cbo",val:_tk,dsb:true});}
	fextbud_metasFilt({pan:comp,mei:_mei,yi:_yi,TR:"cbo",val:_mei,dsb:(_mei>0?true:false)});
}},
btfsa_BR:function(comp,opt){var _str=fext_CS("bud.Tareas_FftredSBalances");fext_BSG(comp,_str);fext_BSP(comp,_str);_str.sort("espedet_codigo","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxMeta_id","xxTarea_key","xxFuefin_id","xxType_record","xxPag","vs","ssNO_USK"],["","","","grdSearchBalances",1,fext_JE(fextpub_sessVar()),"NoT"],comp,["meta_id","tarea_key","fuefin_idx","","","",""])});
},
btfsa_btnAcc:function(btn,e,opt){fext_CC("bud.TareaFteSA").btfs(btn);
},
btfsa_btnCan:function(btn,e,opt){var _w=btn.up("window");_w.close();if(_w.getAD()){_w.destroy();}},
//btfsa_fuefin_idxChange:function(combo,newVue,oldVue,opt){ this.btfsa_grdStatus(combo.up("window")); },
btfsa_grdItemDblClk:function(comp,rec,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
btfsa_grdSelChg:function(mod,rec,opt){if(rec.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",rec[0].data.tareafte_key==_w.getCK()?true:false);}},
btfsa_grdStatus:function(poC){var _pag=fext_DP(poC);
	if(fext_GV(poC,"meta_id")*1>0&&!fext_IE(poC,"tarea_key")){fext_GS(poC,"grdBTF").load();_pag.setDisabled(false);}else{fext_gridClean(_pag.getStore(),_pag);_pag.setDisabled(true);}
},
btfsa_meta_idChange:function(cbo,newV,oldV,opt){if(cbo.up("window").getFT()){fextbud_tareasLoad({pan:cbo.up("panel")});}this.btfsa_grdStatus(cbo.up("window"));},
btfsa_tarea_keyChange:function(cbo,newV,oldV,opt){if(cbo.up("window").getFA()){fextbud_tareas_areasLoadA({pan:cbo.up("panel")});}this.btfsa_grdStatus(cbo.up("window"));}
});