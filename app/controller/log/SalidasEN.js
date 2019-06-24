Ext.define("Siace.controller.log.SalidasEN",{extend:"Ext.app.Controller",stores:["array.DocProcPecAB","array.Years"],views:["log.SalidasEN"],
init:function(application){this.control({
"log_salen":{beforeshow:this.lse_BS},"log_salen #btnSave":{click:this.lse_btnSav},"log_salen #btnUndo":{click:this.lse_btn},"log_salen #btnExit":{click:this.lse_btn},"log_salen #btnAdd":{click:this.lse_btn},"log_salen #btnSuppress":{click:this.lse_btn},"log_salen #btnRTS":{click:this.lse_btn},
"log_salen #area_key":{change:this.lse_akChg},"log_salen #meta_id":{change:this.lse_meiChg},"log_salen #alma_key":{change:this.lse_alkChg},"log_salen #grdLSD":{selectionchange:this.lse_grdSelChg}
});},
lse_BS:function(comp,opt){fextbud_metasParam({pan:comp,TR:"cboCN"});fextbud_tareasParam({pan:comp,TR:"cboCN"});fext_Dsb(comp,"pers_ruc");fext_Dsb(comp.down("#cntIndiv"),"indiv_dni");comp.down("#cntPers").setFieldLabel("Entidad");comp.down("#cntIndiv").setFieldLabel("Entregar a");fext_CC("log.SalEN0"+comp.getTE()).lse(comp);},
lse_btn:function(btn,e,o){fext_CC("log.SalENB").lse(btn);},
lse_btnSav:function(btn,e,opt){fext_CC("log.SalENS").lse(btn);},
lse_akChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(oldV==undefined){return false;}fextbud_metasLoad({pan:_w});},
lse_alkChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==1){fext_SD(_w,"btnAdd",newV==undefined||newV==""?true:false)}},
lse_meiChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(oldV==undefined){return false;}fextbud_tareasLoad({pan:_w});},
lse_grdSA:function(poC,poD){var _str=fext_GS(poC,"grdLSD");var _md=_str.findRecord("_id",poD._id);var _close=false;
	if(_md==null){fext_SV(poC,"saldet_item",fext_GV(poC,"saldet_item")*1 + 1);
		_str.add({saldet_item:fext_GV(poC,"saldet_item"),_tb:poD.tablex,_id:poD._id,_key:poD._key,_item:poD._item,cantid:poD.stock,preuni:poD.preuni,pretot:fjsRound(poD.stock*poD.preuni,2),stock:poD.stock,bs_key:poD.bs_key,bs_codigo:poD.bs_codigo,bs_nombre:poD.bs_nombre,unimed_abrev:poD.unimed_abrev,espedet_codigo:poD.espedet_codigo,subcta_codigo:poD.subcta_codigo,documento:poD.documento,fuefin_code:poD.fuefin_code,proy_code:poD.proy_code,secfunc_code:poD.secfunc_code,referencia:poD.referencia});
		_close=true;this.lse_montoUpdate(poC,fjsRound(poD.stock*poD.preuni,2)*1);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el Documento");}
	return _close;
},
lse_grdSelChg:function(mod,rec,opt){var _w=mod.view.panel.up("window");if(rec.length==1&&_w.getTE()==1){_w.down("#btnSuppress").enable();}},
lse_montoUpdate:function(poC,pnP){fext_SV(poC,"sal_monto",fext_GV(poC,"sal_monto")*1 + pnP*1);
	var _dsb=(fext_GS(poC,"grdLSD").getCount()*1>0?true:false);fext_SD(poC,"",_dsb,["alma_key"]);
},
});