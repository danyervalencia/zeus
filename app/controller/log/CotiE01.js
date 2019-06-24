Ext.define("Siace.controller.log.CotiE01",{extend:"Ext.app.Controller",
lce:function(poC){var _mi=poC.getMI();var _frm=poC.down("form");var _grd=poC.down("#grdLCD");var _cboDI=poC.down("#doc_id");var _txtCM=poC.down("#coti_monto");var _vs=fextpub_sessVar();var _me=this;poC.down("#cntPers").setFieldLabel("");poC.setIconCls("icon_New_90");poC.setTitle("Nueva Cotización ::.");
	//var _str=Ext.create("Ext.data.Store",{fields:[{name:"doc_id",type:"int"},{name:"doc_nombre",type:"string"}],data:[{doc_id:511,doc_nombre:"Cotización"}]});_cboDI.bindStore(_str);_cboDI.getStore().load({callback:function(rec,oper,succ){_cboDI.setValue(511);}});
	fextpub_tippagFilt({obj:poC.down("#tippag_id"),tpec:1,setVal:false,AB:"NO"});fextlog_lugentrFilt({obj:poC.down("#lugentr_id"),AB:"NO",setVal:false});

	fext_SV(poC,"coti_fecha",fjsDateCurrent(""));fext_SV(poC,"mone_id",1);
	var _str=Ext.create("Siace.store.log.Cotizaciones_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0; str.each(function(recc){_m+=recc.data.cotidet_pretot;});_txtCM.setValue(_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record; _r.set("cotidet_pretot",fjsRound(_r.data.cotidet_cantid*_r.data.cotidet_preuni,2));}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("cotidet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxType_record","xxType_query"],["cotiza","cotiza_"+fext_GV(poC,"ped_key")]);});

	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:fext_GV(poC,"ped_key"),xxType_record:"winCotiza",ssNO_USK:"NoT",vs:fext_JE(_vs)},
		success:function(frm,act){try{var _mod=fext_CM("log.PedidoCotiza");var _res=fext_DJ(act);var _d=_res.data[0];if(_d){_mod.set(_d);_frm.loadRecord(_mod);fext_SV(poC,"tipplaz_id",_d.tipplaz_id*1);fext_SD(poC,"coti_plazo",(_d.tipplaz_id*1==5013?true:false));if(_d.tipped_id!=5006){poC.down("#coti_plazo").setFieldLabel("&nbsp;Plazo Ejecución");poC.down("#lugentr_id").disable();fext_removeAddCls(poC.down("#lugentr_id"),"myDisabledClass","x-item-disabled");}else if(_d.lugentr_id*1>0){fext_SV(poC,"lugentr_id",_d.lugentr_id*1);fext_Dsb(poC,"lugentr_id");}}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}
	});

	_str.load();
}
});