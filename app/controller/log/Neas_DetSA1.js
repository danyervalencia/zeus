Ext.define("Siace.controller.log.Neas_DetSA1",{extend:"Ext.app.Controller",views:["log.Neas_DetSA1"],
init:function(application){this.control({
"log_neadetsa1":{activate:this.lndsa1_Act,beforerender:this.lndsa1_BR},"log_neadetsa1 #btnAccept":{click:this.lndsa1_btnAcc},"log_neadetsa1 #btnCancel":{click:this.lndsa1_btnCan},
"log_neadetsa1 #doc_id":{change:this.lndsa1_diChg},"log_neadetsa1 #grd":{itemdblclick:this.lndsa1_grdItemDblClk,selectionchange:this.lndsa1_grdSelChg},"log_neadetsa1 #tablex_nro":{change:this.lndsa1_txnChg,keypress:this.lndsa1_txnKP},
});},
lndsa1_Act:function(comp,opt){
	/*if(comp.getFilt()){
		var _year=comp.getYear_id()*1; var _meta=comp.getMeta_id()*1; var _tarea=comp.getTarea_key(); _fuefin=comp.getFuefin_id()*1; var _area=comp.getArea_key(); comp.setFilt(false);
		fextbud_fuentes_financiamientoFilter({"panel":comp,"objeto":comp.down("#fuefin_idx"),"fuefin_id":_fuefin,"value":_fuefin,"disabled":(_fuefin>0?true:false)});
		fextpub_areasFilter({"objeto":comp.down("#area_keyx"),"filter":false,"type_record":"combo","no_usk":"NoT"});
		if(Ext.isEmpty(_tarea)){comp.setFiltTarea(true);fextbud_tareasParameters({"panel":comp});}
		else{fextbud_tareasFilter({"panel":comp,"tarea_key":_tarea,"type_record":"combo","value":_tarea,"disabled":true});}
		fextbud_metasFilter({"panel":comp,"meta_id":_meta,"year_id":_year,"type_record":"combo","value":_meta,"disabled":(_meta>0?true:false)});
	}*/
	console.log("activador");
},
lndsa1_BR:function(comp,opt){var _vs=fextpub_sessVar();fextpub_docFilt({obj:comp.down("#doc_id"),TQ:"NDSBI"});
	var _str=fext_CS("log.Neas_DetSA1");fext_BSGP(comp,_str);_str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxProy_code","xxMeta_id","xxFuefin_id","xxDoc_id","xxTablex_nro","vs","xxType_record","xxPag"],["","","","","",fext_JE(_vs),"grd",1],comp,["proy_code","meta_id","fuefin_id","doc_id","tablex_nro","","",""]);});
},
lndsa1_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
lndsa1_btnAcc:function(btn,e,opt){var _w=btn.up("window");var _grd=_w.down("#grd");var _close=true;var _r=fext_grdSR(_grd);if(!_r){return false;}
	_close=fext_CC("log.NeasE").lne_grdSA1(_w.getCC(),_r.data);if(_close){fext_Dsb(_w,"btnAccept");_w.close();if(_w.getAD()==true){_w.destroy();}}
},
lndsa1_btnCan:function(btn,e,opt){var _w=btn.up("window");_w.close();if(_w.getAD()){_w.destroy();}},
lndsa1_diChg:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.lndsa1_Clean(cbo.up("window"));}},
lndsa1_grdItemDblClk:function(comp,rec,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
lndsa1_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.tareafte_key==_w.getCK()?true:false);}},
lndsa1_txnChg:function(txtf,newV,oldV,opt){this.lndsa1_Clean(txtf.up("window"));},
lndsa1_txnKP:function(txtf,e,opt){if(e.getCharCode()==13){fext_GS(txtf.up("window")).load();}}
});