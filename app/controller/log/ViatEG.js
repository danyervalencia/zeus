Ext.define("Siace.controller.log.ViatEG",{extend:"Ext.app.Controller",
lve:function(poW,pcTE){
	if(fext_IE(poW,"meta_id")||fext_GV(poW,"meta_id")*1<=0){fext_MsgA("Debe indicar la Secuencia Funcional",poW.down("#meta_id"));return false;}
	if(fext_IE(poW,"tarea_key")){fext_MsgA("Debe indicar la Tarea Funcional",poW.down("#tarea_key"));return false;}
	if(fext_IE(poW,"fftr_id")||fext_GV(poW,"fftr_id")*1<=0){fext_MsgA("Debe indicar el Rubro Presupuestal",poW.down("#fftr_id"));return false;}
	if(pcTE==2){var _r=fext_grdSR(poW,"grdLVD");if(!_r){return false;}}
	fext_CC("log.Viaticos_DetE");var _w=fext_CW("log.Viaticos_DetE");_w.setCC(poW);_w.setTE(pcTE);_w.setCK(poW.getCK());_w.setTK(fext_GV(poW,"tarea_key"));_w.setFFI(fext_GV(poW,"fftr_id").substr(0,3));_w.setTRI(fext_GV(poW,"fftr_id").substr(4));
	fext_SV(_w,"viat_fecha",fext_GV(poW,"viat_fecha"));
	if(!fext_IE(poW,"trabj_key")){fext_SV(_w,"indiv_codename",fext_GV(poW,"indiv_dni")+" - "+fext_GV(poW,"indiv_apenom"));}
	if(pcTE==2){_w.setBSK(_r.data.bs_key);_w.setEDI(_r.data.espedet_id);}_w.show();
}
});