Ext.define("Siace.controller.log.SalETXS",{extend:"Ext.app.Controller",
lse:function(po){var _w=po.up("window");if(_w.getTE()==1){var _mi=_w.getMI();
	if(fext_IE(_w,"tablex_nro")||fext_GV(_w,"tablex_nro")*1<=0){fext_CC("log.SalETXC").lse(_w);return false;}fext_mask(_w);
	Ext.Ajax.request({method:"POST",url:"php/logistics_ordenes_json_records.php",params:{xxYear_id:fext_GV(_w,"tablex_year"),xxDoc_id:_w.down("#tablex_doc").getValue(),xxOrden_nro:fext_GV(_w,"tablex_nro")*1,ssNO_YEAR:"NoT",xxType_record:"searchLSE",xxMenu_id:_w.getMI(),ssNO_USK:(_w.getMI()==5132?"NoT":""),vs:fext_JE(fextpub_sessVar())},
		success:function(resp){var _res=fext_DJ("",resp);var _d=_res.data[0];var _yi=_w.down("#tablex_year").getValue();
			if(_d){var _cboM=_w.down("#meta_id");var _cboT=_w.down("#tarea_key");fext_SV(_w,"tablex_fecha",_d.orden_fecha);if(_mi==5132){fext_SV(_w,"area_key",_d.area_key);}
				_cboM.getStore().load({params:{xxYear_id:_yi,xxArea_key:_d.area_key,ssNO_YEAR:"NoT"},callback:function(r){if(r.length>0){_cboM.setValue(_d.meta_id*1);}else{_cboM.setValue("");}}});
				_cboT.getStore().load({params:{xxYear_id:_yi,xxArea_key:_d.area_key,xxMeta_id:_d.meta_id,ssNO_YEAR:"NoT"},callback:function(r){if(r.length>0){_cboT.setValue(_d.tarea_key);}else{_cboT.setValue("");}}});
				fext_SV(_w,"tablex_key",_d.orden_key);fext_GS(_w,"grdLSD").load({params:{xxTablex:5033,xxTablex_key:_d.orden_key},callback:function(r){var _m=0;for(var _i=0;_i<r.length;_i++){_m+=r[_i].data.saldet_pretot*1}fext_SV(_w,"sal_monto",_m);}});
			}else{fext_CC("log.SalETXC").lse(_w);}fext_unmask(_w);
		},failure:function(resp){fext_CC("log.SalETXC").lse(_w);fext_unmask(_w);fext_MsgE("",resp);}
	});
}}
});