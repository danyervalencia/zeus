Ext.define("Siace.controller.log.PedEBC",{extend:"Ext.app.Controller",
lpe_grdE:function(poC,poD,poP){var _close=false;
	if(poP["item"]==""){var _str=fext_GS(poC,"grdLPD");var _md=_str.findRecord("bs_key",poD.bs_key);
		if(_md==null){fext_SV(poC,"peddet_item",fext_GV(poC,"peddet_item")*1 + 1);
			_str.add({peddet_item:fext_GV(poC,"peddet_item"),bs_key:poD.bs_key,bs_codigo:poD.bs_codigo,bs_nombre:poD.bs_nombre,unimed_abrev:poD.unimed_abrev,espedet_id:poP["espedet_id"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"],peddet_detalle:poP["detalle"],peddet_cantid:poP["cantid"],peddet_preuni:poP["preuni"],peddet_pretot:poP["pretot"]});
			this.lpe_grdTFE(poC,poP);_close=true;this.lpe_montoUpdate(poC,poP["pretot"]);
		}else{fext_MsgA("Item seleccionado ya se encuentra establecido en el documento");}
	}else{var _r=fext_grdSR(poC,"grdLPD");var _edi=_r.data.espedet_id;var _pretot=_r.data.peddet_pretot*1;_close=true;
		if(poD!=""){_r.set("bs_key",poD.bs_key);_r.set("bs_codigo",poD.bs_codigo);_r.set("bs_nombre",poD.bs_nombre);_r.set("unimed_abrev",poD.unimed_abrev);}
		_r.set("peddet_detalle",poP["detalle"]);_r.set("espedet_id",poP["edi"]);_r.set("espedet_codigo",poP["edc"]);_r.set("espedet_nombre",poP["edn"]);
		_r.set("peddet_cantid",poP["cantid"]);_r.set("peddet_preuni",poP["preuni"]);_r.set("peddet_pretot",poP["pretot"]);_r.commit();
		if(!fext_IE(poC,"tarea_key")&&!fext_IE(poC,"fftr_id")){
			if(_edi==poP["edi"]){this.lpe_grdTFE(poC,{tk:fext_GV(poC,"tarea_key"),ffi:fext_GV(poC,"fftr_id").substr(0,3),tri:fext_GV(poC,"fftr_id").substr(4),edi:poP["edi"],pretot:(poP["pretot"]*1-_pretot),factor:1});}
			else{
				this.lpe_grdTFE(poC,{tk:fext_GV(poC,"tarea_key"),ffi:fext_GV(poC,"fftr_id").substr(0,3),tri:fext_GV(poC,"fftr_id").substr(4),edi:_edi,pretot:_pretot,factor:-1});
				this.lpe_grdTFE(poC,{tk:fext_GV(poC,"tarea_key"),ffi:fext_GV(poC,"fftr_id").substr(0,3),tri:fext_GV(poC,"fftr_id").substr(4),edi:poP["edi"],edc:poP["edc"],edn:poP["edn"],pretot:poP["pretot"],factor:1});
			}	
		}
	}return _close;
},
lpe_grdTFE:function(poC,poP){var _str=fext_GS(poC,"grdLPTF");
	var _found=_str.findBy(function(r,id){if(r.data.tarea_key==poP["tk"]&&r.data.fuefin_id==poP["ffi"]&&r.data.tiprecur_id==poP["tri"]&&r.data.espedet_id==poP["edi"]){r.set("pedtareafte_monto",fjsRound(r.data.pedtareafte_monto*1 + poP["pretot"]*(poP["factor"]*1),2));r.commit();if(r.data.pedtareafte_monto*1<=0){_str.remove(r);}return true;}});
	if(_found==-1){_str.add({"tarea_key":poP["tk"],"fuefin_id":poP["ffi"],"tiprecur_id":poP["tri"],espedet_id:poP["edi"],pedtareafte_monto:poP["pretot"],"tarea_codigo":fext_GRV(poC,"tarea_key").substr(0,8),"fftr_codigo":fext_GRV(poC,"fftr_id").substr(0,5),espedet_codigo:poP["edc"],espedet_nombre:poP["edn"]});}
},
lpe_montoUpdate:function(poC,pnP){var _t=poC.down("#tabLP");var _m=fext_GV(_t,"ped_monto");fext_SV(_t,"ped_monto",fext_GV(_t,"ped_monto")*1 + pnP*1);
	var _dsb=(fext_GS(_t,"grdLPD").getCount()*1>0?true:false);
	fext_SD(_t,"tipped_id",poC.getTE()==1?_dsb:true);fext_SD(_t,"meta_id",_dsb);fext_SD(_t,"tarea_key",_dsb);fext_SD(_t,"fftr_id",_dsb);
}
});