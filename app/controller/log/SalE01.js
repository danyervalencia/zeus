Ext.define("Siace.controller.log.SalE01",{extend:"Ext.app.Controller",
lse:function(poC){var _mi=poC.getMI();var _grd=poC.down("#grdLSD");var _vs=fextpub_sessVar();poC.setIconCls("icon_New_90");poC.setTitle("Nueva Salida de Almacen ::.");
	fext_SV(poC,"tablex_doc",516);fext_SV(poC,"sal_fecha",fjsDateCurrent());if(_mi==5132){poC.down("#sal_fechasal").enable();}
	fextpub_areasFilt({obj:poC.down("#area_key"),TR:"cbo",filt:false,nuk:(_mi==5132?"NoT":""),mi:_mi,dsb:(_mi==5132?false:true),ak:(_mi==5135?_vs.a:""),val:(_mi==5135?_vs.a:"")});
	var _str=Ext.create("Siace.store.log.Ingresos_DetSSS",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.saldet_pretot;});fext_SV(poC,"sal_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;_r.set("saldet_pretot",fjsRound(fjsRound(_r.data.saldet_cantid*_r.data.saldet_preuni,3),2));}}});_ce.init(_grd);
	_grd.bindStore(_str);_grd.getView().refresh();_str.sort("ingdet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");fext_PSEP(str,["xxType_record"],["grdLSE"]);});
}
});