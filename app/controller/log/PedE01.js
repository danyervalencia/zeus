Ext.define("Siace.controller.log.PedE01",{extend:"Ext.app.Controller",
lpe:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Requerimiento ::.");var _mi=poC.getMI();var _t0=poC.down("#tabLP");var _grdLPD=poC.down("#grdLPD");fext_SV(poC,"ped_fecha",fjsDateCurrent(""));
	var _strLPD=Ext.create("Siace.store.log.Pedidos_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.peddet_pretot;});fext_SV(poC,"ped_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;var _prev=_r.data.peddet_pretot;_r.set("peddet_pretot",fjsRound(_r.data.peddet_cantid*_r.data.peddet_preuni,2));if(!fext_IE(poC,"tarea_key")&&!fext_IE(poC,"fftr_id")){fext_CC("log.PedE").lpe_grdLPTFE(poC,{tareafte_id:"",espedet_id:_r.data.espedet_id,pretot:(_r.data.peddet_pretot*1-_prev*1)});}}}});_ce.init(_grdLPD);
	_grdLPD.bindStore(_strLPD);_grdLPD.getView().refresh();_strLPD.sort("peddet_item","ASC");
	_strLPD.on("beforeload",function(str,oper,opt){fext_Dsb(_t0,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});

	if(_mi==5137){fextbud_metasParam({pan:_t0,nuk:"NoT",TR:"cboCN",OB:"meta_codename"});fextbud_tareasParam({pan:_t0,nuk:"NoT",TR:"cboCN",OB:"tarea_codename"});fextpub_areasFilt({obj:_t0.down("#area_key"),filt:false,nuk:"NoT",TR:"cbo",AB:"NO"});fextbud_metasLoad({pan:_t0});}
	else{fextbud_tareasAMParam({pan:_t0,di:501,dt:"U1",de:1,TR:"cboCN",OB:"meta_codename"});fextbud_tareasATParam({pan:_t0,di:501,dt:"U1",de:1,TR:"cboCN",OB:"tarea_codename"});fextpub_areasFilt({obj:_t0.down("#area_key"),nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});fextbud_tareasAMLoad({pan:_t0,ff_tr:"YES",obj:_t0.down("#fftr_id"),type:"fftr",fftr_all:1});}
}
});