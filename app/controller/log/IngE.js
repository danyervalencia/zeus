Ext.define("Siace.controller.log.IngE",{extend:"Ext.app.Controller",
lie_sup:function(btn){var _w=btn.up("window");var _r=fext_grdSR(_w,"grdLID");if(!_r){return false;}btn.disable();fext_GS(_w,"grdLID").remove(_r);_w.down("#grdLID").getView().refresh(); fext_SV(_w,"ing_monto",fext_GV(_w,"ing_monto")*1 - _r.data.ingdet_pretot*1);},
lie_tablexClean:function(poC){fext_SV(poC,"","",["tablex_fecha","expe_nro"]);fext_GS(poC,"area_key").removeAll();fext_GS(poC,"meta_id").removeAll();fext_GS(poC,"tarea_key").removeAll();fext_GS(poC,"fftr_id").removeAll();fext_SV(poC,"","",["area_key","meta_id","tarea_key","fftr_id"]);fext_SV(poC,"","",["pers_key","pers_ruc","pers_nombre","ing_monto"]);fext_GS(poC,"grdLID").removeAll();},
lie_TS:function(poW,pcA){var _w=poW;
	if(fext_IE(_w,"tablex_doc")||fext_GV(_w,"tablex_doc")*1<=0){this.lie_tablexClean(_w);return false;}
	if(fext_IE(_w,"tablex_nro")||fext_GV(_w,"tablex_nro")*1<=0){this.lie_tablexClean(_w);return false;}fext_mask(_w);var _me=this;
	Ext.Ajax.request({method:"POST",url:"php/logistics_ordenes_json_records.php",params:{xxYear_id:fext_GV(_w,"tablex_year"),xxDoc_id:fext_GV(_w,"tablex_doc"),xxOrden_nro:fext_GV(_w,"tablex_nro"),ssNO_YEAR:"NoT",xxType_record:"searchLIE",xxMenu_id:_w.getMI(),ssNO_USK:(_w.getMI()==5122?"":"NoT"),vs:fext_JE(fextpub_sessVar())},
		success:function(resp){var _res=fext_DJ("",resp);var _d=_res.data[0];
			if(_res.success&&_d){var _cboAK=_w.down("#alma_key");fext_SV(_w,"tablex_fecha",_d.orden_fecha);fext_SV(_w,"expe_nro",_d.expe_nro*1>0?_d.expe_nro:"");fext_GS(_w,"area_key").add({area_key:_d.area_key,area_nombre:_d.area_nombre});fext_SV(_w,"area_key",_d.area_key);fext_GS(_w,"meta_id").add({meta_id:_d.meta_id,secfunc_codename:_d.secfunc_codename});fext_SV(_w,"meta_id",_d.meta_id*1);fext_GS(_w,"tarea_key").add({tarea_key:_d.tarea_key,tarea_codename:_d.tarea_codename});fext_SV(_w,"tarea_key",_d.tarea_key);fext_GS(_w,"fftr_id").add({fftr_id:_d.fftr_id,fftr_codename:_d.fftr_codename});fext_SV(_w,"fftr_id",_d.fftr_id);fext_SV(_w,"tablex_key",_d.orden_key);fext_SV(_w,"pers_key",_d.pers_key);fext_SV(_w,"pers_ruc",_d.pers_ruc);fext_SV(_w,"pers_nombre",_d.pers_nombre);
				if(fext_GV(_w,"tablex_doc")==516){_cboAK.getStore().clearFilter();if(_d.alma_parent*1>0){_cboAK.getStore().filter("alma_parent",_d.alma_parent*1);_cboAK.enable();}else{_cboAK.disable();}_cboAK.setValue(pcA);}
				if(_w.getTE()==1){fext_GS(_w,"grdLID").load({params:{xxOrden_key:_d.orden_key},callback:function(rec){var _m=0;for(var _i=0;_i<rec.length;_i++){_m+=rec[_i].data.ingdet_pretot*1}fext_SV(_w,"ing_monto",_m);fext_unmask(_w);}});}
			}else{_me.lie_tablexClean(_w);fext_MsgE("Documento no encontrado");}fext_unmask(_w);
		},failure:function(resp){_me.lie_tablexClean(_w);fext_unmask(_w);fext_MsgE("",resp);}
	});
}
});