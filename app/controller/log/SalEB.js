Ext.define("Siace.controller.log.SalEB",{extend:"Ext.app.Controller",
lse:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE=="RTS"){var _w=btn.up("window");fext_CC("rrhh.TrabajadoresS");_w.setCompRTS(fext_compSearch({cc:_w,os:_w.getCompRTS(),v:"Siace.view.rrhh.TrabajadoresS",tit:"Búsqueda de Trabajador ::.",ck:fext_GV(_w,"trabj_key")}));}
	else if(_TE=="Sup"){var _r=fext_grdSR(_w.down("#grdLSD"));if(!_r){return false;}btn.disable();fext_GS(_w,"grdLSD").remove(_r);fext_SV(poC,"sal_monto",fext_GV(poC,"sal_monto")*1 - _r.data.saldet_pretot*1);}	
}
});