Ext.define("Siace.controller.log.BuenaProBS1",{extend:"Ext.app.Controller",
lbpbs_Show:function(poW){var _w=poW;var _frm=_w.down("form");var _grdLCD=_w.down("#grdLCD");var _ico="icon_Vobo_90";var _tit="Otorgar Buena Pro a Cotización ::.";
	var _str=Ext.create("Siace.store.log.Cotizaciones_DetBuenapro",{listeners:{update:function(str,rec,oper,opt){var _m=0;var _rec=fext_grdSR(_grdLCD);for(var _i=0;_i<_rec.length;_i++){_m+=_rec[_i].data.bpdet_pretot*1;}fext_SV(_w,"bp_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("bpdet_pretot",fjsRound(_r.data.bpdet_cantid*_r.data.cotidet_preuni,2));}}});
	_ce.init(_grdLCD);_grdLCD.bindStore(_str);_grdLCD.getView().refresh();
	_str.load({params:{xxCoti_key:fext_GV(_w,"coti_key"),xxType_record:"buenapro"},callback:function(rec,oper,succ){_grdLCD.getSelectionModel().selectAll();}});
	_frm.load({method:"POST",url:"php/logistics_cotizaciones_json_records.php",waitMsg:"Loading...",params:{xxCoti_key:fext_GV(_w,"coti_key"),xxType_record:"frmBP",xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){
			try{var _mod=fext_CM("log.CotizacionBuenapro");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);
				fextpub_areasFilt({obj:_w.down("#area_key"),area_key:_d.area_key,nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});
				fextbud_metasFilt({pan:_w,yi:_d.year_id,ak:_d.area_key,AB:"NO",val:_d.meta_id,dsb:true});
				fextbud_tareasFilt({pan:_w,mei:_d.meta_id,ak:_d.area_key,OB:"tarea_codename",AB:"NO",val:_d.tarea_key,dsb:true});
				//fextpub_areasFilter({"obj":_w.down("#area_key"),"area_key":_res.data[0].area_key,"no_usk":"NoT","type_record":"combo","add_blank":"NO","disabled":true});
			}}catch(x){fext_MsgC(x.Message);}
		}
	});
	_w.setIconCls(_ico);_w.setTitle(_tit);
}
});