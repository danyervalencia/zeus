Ext.define("Siace.controller.log.PedE",{extend:"Ext.app.Controller",
lpe_grdAdd:function(poC,poD,poP){var _str=fext_GS(poC,"grdLPD");var _md=_str.findRecord("bs_key",poD.bs_key);var _close=false;
	if(_md==null){fext_SV(poC,"peddet_item",fext_GV(poC,"peddet_item")*1 + 1);
		_str.add({peddet_item:fext_GV(poC,"peddet_item"),bs_key:poD.bs_key,bs_codigo:poD.bs_codigo,bs_nombre:poD.bs_nombre,unimed_abrev:poD.unimed_abrev,espedet_id:poP["espedet_id"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"],peddet_detalle:poP["detalle"],peddet_cantid:poP["cantid"],peddet_preuni:poP["preuni"],peddet_pretot:poP["pretot"]});
		this.lpe_grdLPTFE(poC,poP);_close=true;this.lpe_montoUpdate(poC,poP["pretot"]);
	}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el documento");}
	return _close;
},
lpe_grdLPTFE:function(poC,poP){var _str=fext_GS(poC,"grdLPTF");
	var _found=_str.findBy(function(r,id){var _d=r.data;
		if(fext_GV(poC,"meta_id")*1<=0||fext_IE(poC.down("#tarea_key"))||fext_IE(poC.down("#fftr_id"))){}
		else if(poP["tareafte_id"]!=""){if(_d.tareafte_id==poP["tareafte_id"]){r.set("pedtareafte_monto",fjsRound(_d.pedtareafte_monto*1 + poP["pretot"]*1,2));r.commit();return true;}}
		//else if(poP["tarea_key"]!=""){if(_d.tarea_key==poP["tarea_key"]&&_d.fuefin_id==poP["fuefin_id"]&&_d.tiprecur_id==poP["tiprecur_id"]&&_d.espedet_id==poP["espedet_id"]){rec.set("pedtareafte_monto",fjsRound(_d.pedtareafte_monto*1 + poP["pretot"]*1,2));rec.commit();return true;}}
		else{if(poP["espedet_id"]*1>0&&_d.espedet_id==poP["espedet_id"]){r.set("pedtareafte_monto",fjsRound(r.data.pedtareafte_monto*1+ poP["pretot"]*1,2));r.commit();return true;}}
	});
	if(_found==-1){_str.add({tareafte_id:poP["tareafte_id"],tarea_key:poP["tarea_key"],fuefin_id:poP["fuefin_id"],tiprecur_id:poP["tiprecur_id"],espedet_id:poP["espedet_id"],pedtareafte_monto:poP["pretot"],tarea_codigo:poP["tarea_codigo"],fftr_codigo:poP["fftr_codigo"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"]});}
},
lpe_montoUpdate:function(poC,pnP){var _t=poC.down("#tabLP");var _m=fext_GV(_t,"ped_monto");fext_SV(_t,"ped_monto",fext_GV(_t,"ped_monto")*1 + pnP*1);
	var _dsb=(fext_GS(_t,"grdLPD").getCount()*1>0?true:false);
	fext_SD(_t,"tipped_id",poC.getTE()==1?_dsb:true);fext_SD(_t,"meta_id",_dsb);fext_SD(_t,"tarea_key",_dsb);fext_SD(_t,"fftr_id",_dsb);
}
});