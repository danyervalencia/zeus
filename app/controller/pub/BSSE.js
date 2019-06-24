Ext.define("Siace.controller.pub.BSSE",{extend:"Ext.app.Controller",
pbsse:function(btn){var _w=btn.up("window");var _grd=_w.down("#grdPBS");var _r=fext_grdSR(_grd);var _cc=_w.getCC();var _close=true;
    if (_w.getType()=="T2"){var _d=(_r?_r.data:"");
		if(fext_GV(_w,"espedet_id")*1<=0){_w.down("#tab").setActiveTab(1);fext_MsgA("Debe indicar el Clasificador Presupuestal",_w.down("#espedet_id"));return false;}
		_rec=fext_GS(_w,"espedet_id").findRecord("espedet_id",fext_GV(_w,"espedet_id"));var _dat=_rec.data;var _tareafte_id=0;
		if(!Ext.isEmpty(_w.getTK())&&_w.getFFI()*1>0&&_w.getTRI()*1>0){_tareafte_id=_dat.tareafte_id;if(_tareafte_id*1<=0){fext_MsgA("Clasificador Presupuestal no autorizado",_w.down("#espedet_id"));return false;}}
		if(fext_IE(_w,"cantid")||fext_GV(_w,"cantid")*1<=0){fext_MsgA("Debe indicar la CANTIDAD",_w.down("#cantid"));return false;}
		//if(fext_IE(_w,"preuni")||fext_GV(_w,"preuni")*1<=0){fext_MsgA("Debe indicar el PRECIO UNITARIO",_w.down("#preuni"));return false;}
		//if(fext_IE(_w,"pretot")||fext_GV(_w,"pretot")*1<=0){fext_MsgA("Debe indicar la SUB TOTAL",_w.down("#pretot"));return false;}
		if(_tareafte_id>0){if(fext_GV(_w,"pretot")*1>_dat.tareafte_monto_saldo*1){fext_MsgA("Saldo Presupuestal ["+fjsFormatNumeric(_dat.tareafte_monto_saldo, 2)+"] NO es suficiente");return false;}}
	}else{var _d=_r.data;if(!_r){return false;}if(_d.bs_key==_w.getCK()){return false;}}
	if(_cc!=null){
		if(_w.getTRE()=="WLPE"){_close=fext_CC("log.PedEBC").lpe_grdE(_cc,_d,{item:fext_GV(_w,"item"),detalle:fext_GV(_w,"detalle"),tfi:_tareafte_id,edi:_dat.espedet_id,edc:_dat.espedet_codename.substr(0,15),edn:_dat.espedet_codename.substr(17),cantid:fext_GV(_w,"cantid"),preuni:fext_GV(_w,"preuni")*1,pretot:fext_GV(_w,"pretot")*1});if(_close){this.pbsse_clean(_w);}}
		else{fext_SV(_cc,"bs_key",_d.bs_key);fext_SV(_cc,"bs_codigo",_d.bs_codigo);fext_SV(_cc,"bs_nombre",_d.bs_nombre);}
	}
	if(_close){_w.close();if(_w.getAD()){_w.destroy();}}
},
pbsse_clean:function(poW){poW.down("#tab").setActiveTab(0);fext_Dsb(poW,"",["btnAccept","tab02"]);fext_GSR(poW,"espedet_id");fext_SV(poW,"","",["espedet_id","detalle","cantid","preuni","pretot"]);}
});