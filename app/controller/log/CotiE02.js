Ext.define("Siace.controller.log.CotiE02",{extend:"Ext.app.Controller",
lce:function(poC){var _mi=poC.getMI();var _frm=poC.down("form");var _grd=poC.down("#grdLCD");var _cboDI=poC.down("#doc_id");var _txtCM=poC.down("#coti_monto");var _vs=fextpub_sessVar();poC.down("#cntPers").setFieldLabel("");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificación de Cotización ::.");
	var _str=Ext.create("Siace.store.log.Cotizaciones_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.cotidet_pretot;});_txtCM.setValue(_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("cotidet_pretot",fjsRound(_r.data.cotidet_cantid*_r.data.cotidet_preuni,2));}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("cotidet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxCoti_key","xxType_record"],[poC.getCK(),"frm"]);});_str.load();
	_frm.load({method:"POST",url:"php/logistics_cotizaciones_json_records.php",params:{xxCoti_key:poC.getCK(),xxType_record:"frm",xxMenu_id:poC.getMI(),vs:fext_JE(_vs)},waitMsg: "Loading...",
		success:function(frm,act){try{var _md=fext_CM("log.CotizacionE");var _res=fext_DJ(act);if(_res.data[0]){_md.set(_res.data[0]);_frm.loadRecord(_md);var _d=_res.data[0];fext_SV(poC,"coti_nro",fjsLpad(_d.coti_nro,6,0));fext_SD(poC,"coti_plazo",(_d.tipplaz_id*1==5013?true:false));fextlog_lugentrFilt({obj:poC.down("#lugentr_id"),AB:"NO",dsb:true,val:_d.lugentr_id});fextpub_tippagFilt({obj:poC.down("#tippag_id"),tpec:1,AB:"NO",val:_d.tippag_id});}}catch(x){fext_MsgC(x.Message);}},failured:function(frm,act){fext_MsgFL(act);}
	});
}
});