Ext.define("Siace.controller.log.PedE02",{extend:"Ext.app.Controller",
lpe:function(poC){var _mi=poC.getMI();var _t0=poC.down("#tabLP");var _grdLPD=poC.down("#grdLPD");var _frm=poC.down("form");poC.setIconCls("icon_Modify_90");poC.setTitle("Modificar Requerimiento ::.");
	var _strLPD=Ext.create("Siace.store.log.Pedidos_DetE",{listeners:{update:function(str,rec,oper,opt){var _m=0;str.each(function(r){_m+=r.data.peddet_pretot;});fext_SV(poC,"ped_monto",_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){var _r=e.record;var _prev=_r.data.peddet_pretot;_r.set("peddet_pretot",fjsRound(_r.data.peddet_cantid*_r.data.peddet_preuni,2));if(!fext_IE(poC,"tarea_key")&&!fext_IE(poC,"fftr_id")){fext_CC("log.PedE").lpe_grdLPTFE(poC,{tareafte_id:"",espedet_id:_r.data.espedet_id,pretot:(_r.data.peddet_pretot*1-_prev*1)});}}}});_ce.init(_grdLPD);
	_grdLPD.bindStore(_strLPD);_grdLPD.getView().refresh();_strLPD.sort("peddet_item","ASC");_strLPD.on("beforeload",function(str,oper,opt){fext_Dsb(_t0,"btnSuppress");str.getProxy().setExtraParam("xxType_record","frm");});
	if(_mi==5137){fextbud_metasParam({pan:_t0,nuk:"NoT",TR:"cboCN",OB:"meta_codename"});fextbud_tareasParam({pan:_t0,nuk:"NoT",TR:"cboCN",OB:"tarea_codename"});fextpub_areasFilt({obj:_t0.down("#area_key"),filt:false,nuk:"NoT",TR:"cbo",AB:"NO"});}
	else{fextbud_tareasAMParam({pan:_t0,di:501,dt:"U1",de:1,TR:"cboCN",OB:"meta_codename"});fextbud_tareasATParam({pan:_t0,di:501,dt:"U1",de:1,TR:"cboCN",OB:"tarea_codename"});fextpub_areasFilt({obj:_t0.down("#area_key"),nuk:"NoT",TR:"cbo",AB:"NO",dsb:true});}

	_frm.load({method:"POST",url:"php/logistics_pedidos_json_records.php",waitMsg:"Loading...",params:{xxPed_key:poC.getCK(),xxYear_id:fext_GV(_t0,"year_id"),ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:_mi,vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){
			try{var _md=fext_CM("log.PedidoE");var _res=fext_DJ(act);var _d=_res.data[0];
				if(_d){_md.set(_d);_frm.loadRecord(_md);fext_SV(_t0,"year_id",_d.year_id*1);fext_SV(_t0,"ped_nro",_d.ped_nro);fext_SV(_t0,"ped_fecha",_d.ped_fecha);fext_SV(_t0,"tipped_id",parseInt(_d.tipped_id));fext_SV(_t0,"ped_monto",_d.ped_monto);
					fextbud_tareasAMLoad({pan:_t0,dsb:true,mei:_d.meta_id});fextbud_tareasATLoad({pan:_t0,mei:_d.meta_id,dsb:true,tk:_d.tarea_key});
					fext_GS(_t0,"fftr_id").load({params:{xxTarea_key:_d.tarea_key},callback:function(r,oper,succ){fext_SV(_t0,"fftr_id",_d.fftr_id);fext_Dsb(_t0,"fftr_id");}});
					fext_GS(_t0,"grdLPD").load({params:{xxPed_key:_d.ped_key},callback:function(r,oper,succ){fext_SV(_t0,"peddet_item",r[r.length-1].data.peddet_item);}});
					fext_GS(_t0,"grdLPTF").load({params:{xxPed_key:_d.ped_key}});
				}
			}catch(x){fext_MsgC(x);}
		},failure:function(frm,act){fext_MsgFL(act);}
	});
}
});