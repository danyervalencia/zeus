Ext.define("Siace.controller.tre.EgreETS",{extend:"Ext.app.Controller",
teets_Search:function(poP){var _w=poP["w"];
	if(!fjsIn_array(_w.getTE(),[1,2,3])){return false;}var _doc=_w.down("#tablex_doc").getValue();
	if(Ext.isEmpty(_doc)||_doc*1<=0){this.teets_tablexClean(_w);return false;}
	if(fext_IE(_w.down("#tablex_nro"))||_w.down("#tablex_nro").getValue()*1<=0){this.teets_tablexClean(_w);return false;}fext_mask(_w);var _me=this;var _vs=fextpub_sessVar();
	Ext.Ajax.request({method:"POST",url:"php/treasury_egresos_search_tablex_for_pago.php",params:{xxYear_id:Ext.getCmp("ah_txtYear_id").getValue(),xxDoc_id:_w.down("#tablex_doc").getValue(),xxTablex_nro:_w.down("#tablex_nro").getValue(),xxMenu_id:_w.getMI(),ssNO_USK:(_w.getMI()==4119?"NoT":""),vs:fext_JE(fextpub_sessVar())},
		success:function(resp){var _res=fext_DJ("",resp);
			if(_res.success&&_res.subtotal==1){var _dat=_res.data[0];
				_w.down("#tablex_fecha").setValue(fjsDateDDMMAAAA(_dat.tablex_fecha)); _w.down("#tablex_monto").setValue("[ "+fjsFormatNumeric(_dat.tablex_monto,2)+" ]"); _w.down("#expe_nro").setValue(_dat.expe_nro*1>0?_dat.expe_nro:""); _w.down("#tablex_key").setValue(_dat.tablex_key);
				_w.down("#meta_id").getStore().add({meta_id:_dat.meta_id,secfunc_codename:_dat.secfunc_codename});_w.down("#meta_id").setValue(_dat.meta_id*1);
				_w.down("#tarea_key").getStore().add({tarea_key:_dat.tarea_key,tarea_codename:_dat.tarea_codename});_w.down("#tarea_key").setValue(_dat.tarea_key);
				_w.down("#fuefin_id").getStore().add({fuefin_id:_dat.fuefin_id,fuefin_codename:_dat.fuefin_codename});_w.down("#fuefin_id").setValue(_dat.fuefin_id*1);
				if(_w.getTE()==1){
					_w.down("#tipdocident_id").setValue(_dat.tipdocident_id*1); _w.down("#egre_observ").setValue(_dat.tablex_observ);
					if(_dat.tipdocident_id=="1"){_w.down("#indiv_key").setValue(_dat.pers_key); _w.down("#indiv_dni").setValue(_dat.pers_ruc); _w.down("#indiv_apenom").setValue(_dat.pers_nombre);}
					else{_w.down("#pers_key").setValue(_dat.pers_key); _w.down("#pers_ruc").setValue(_dat.pers_ruc); _w.down("#pers_nombre").setValue(_dat.pers_nombre);} _w.down("#egre_monto").setValue(_dat.egre_monto);
					_w.down("#grdTE").getStore().load({params:{xxTablex:_dat.tablex,xxTablex_key:_dat.tablex_key},callback:function(rec,oper,succ){if(rec.length>0){}else{}}});
				}
			}else{_me.teets_tablexClean(_w);}fext_unmask(_w);
		},failure:function(resp){_me.teets_tablexClean(_w);fext_unmask(_w);fext_MsgE(resp.responseText);}
	});
},
teets_tablexClean:function(poC){poC.down("#meta_id").getStore().removeAll();poC.down("#tarea_key").getStore().removeAll();poC.down("#fuefin_id").getStore().removeAll()
	fext_SV(poC,"","",["tablex_fecha","tablex_monto","expe_nro","meta_id","tarea_key","fuefin_id","pers_key","pers_ruc","pers_nombre","indiv_key","indiv_dni","indiv_apenom","egre_monto","egre_observ"]);
}
});