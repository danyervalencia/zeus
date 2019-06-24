Ext.define("Siace.controller.pub.BSS",{extend:"Ext.app.Controller",
pbss:function(btn){var _w=btn.up("window");var _grd=_w.down("#grdPBS");var _close=true;var _r=fext_grdSR(_grd);var _d=_r.data;if(!_r||(_d.bs_key==_w.getCK())){return false;}
	if (!_w.down("#tab02").isDisabled()){
		if(fext_GV(_w,"espedet_id")*1<=0){_w.down("#tab").setActiveTab(1);fext_MsgA("Debe indicar el Clasificador Presupuestal",_w.down("#espedet_id"));return false;}
		_rec=fext_GS(_w,"espedet_id").findRecord("espedet_id",fext_GV(_w,"espedet_id"));var _dat=_rec.data;var _tareafte_id=0;
		if(!Ext.isEmpty(_w.getTK())&&_w.getFFI()*1>0&&_w.getTRI()*1>0){_tareafte_id=_dat.tareafte_id;
			if(_tareafte_id*1<=0){fext_MsgA("Clasificador Presupuestal no autorizado",_w.down("#espedet_id"));return false;}
		}
		if(fext_IE(_w,"cantid")||fext_GV(_w,"cantid")*1<=0){fext_MsgA("Debe indicar la CANTIDAD",_w.down("#cantid"));return false;}
		//if(fext_IE(_w,"preuni")||fext_GV(_w,"preuni")*1<=0){fext_MsgA("Debe indicar el PRECIO UNITARIO",_w.down("#preuni"));return false;}
		//if(fext_IE(_w,"pretot")||fext_GV(_w,"pretot")*1<=0){fext_MsgA("Debe indicar la SUB TOTAL",_w.down("#pretot"));return false;}
		if(fext_GV(_w,"pretot")*1>_dat.tareafte_monto_saldo*1){fext_MsgA("Saldo Presupuestal ["+fjsFormatNumeric(_dat.tareafte_monto_saldo, 2)+"] NO es suficiente");return false;}
	}var _cc=_w.getCC();
	if(_cc!=null){
		if(_w.getTRE()=="ADD_PEDIDOS"){_close=fext_CC("log.PedE").lpe_grdAdd(_cc,_d,{detalle:fext_GV(_w,"detalle"),tareafte_id:_tareafte_id,tarea_key:"",fuefin_id:_w.getFFI(),tiprecur_id:_w.getTRI(),espedet_id:_dat.espedet_id,tarea_codigo:_w.getTC(),fftr_codigo:_w.getFFTRC(),espedet_codigo:_dat.espedet_codename.substr(0,15),espedet_nombre:_dat.espedet_codename.substr(17),cantid:fext_GV(_w,"cantid"),preuni:fext_GV(_w,"preuni")*1,pretot:fext_GV(_w,"pretot")*1});if(_close){this.pbss_clean(_w);}}
		else if(_w.getTRE()=="ADD_DONACIONES"){_close=fext_CC("log.DonacionesE").lde_grdAdd(_cc,_r,{detalle:fext_GV(_w,"detalle"),cantid:fext_GV(_w,"cantid"),preuni:fext_GV(_w,"preuni"),pretot:fext_GV(_w,"pretot")});if(_close){this.pbss_clean(_w);}}
		else{fext_SV(_cc,"bs_key",_d.bs_key);fext_SV(_cc,"bs_codigo",_d.bs_codigo);fext_SV(_cc,"bs_nombre",_d.bs_nombre);}
	}
	if(_close){_w.close();if(_w.getAD()){_w.destroy();}}
},
pbss_clean:function(poW){poW.down("#tab").setActiveTab(0);fext_Dsb(poW,"",["btnAccept","tab02"]);fext_GSR(poW,"espedet_id");fext_SV(poW,"","",["espedet_id","detalle","cantid","preuni","pretot"]);}
});