Ext.define("Siace.controller.log.ViatE",{extend:"Ext.app.Controller",
lve_Calc:function(poW){
	Ext.Ajax.request({method:"POST",url:"php/logistics_viaticos_calculate.php",params:{xxTrabj_key:fext_GV(poW,"trabj_key"),xxPais_id:fext_GV(poW,"pais_id"),xxDpto_id:fext_GV(poW,"dpto_id"),xxPrvn_id:fext_GV(poW,"prvn_id"),xxDstt_id:fext_GV(poW,"dstt_id"),xxViat_fechaini:fext_GRV(poW,"viat_fechaini"),xxViat_fechafin:fext_GRV(poW,"viat_fechafin"),xxViat_horaini:fext_GRV(poW,"viat_horaini"),xxViat_horafin:fext_GRV(poW,"viat_horafin")},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){fext_SV(poW,"viat_montomax",_res.monto*1);}else{fext_SV(poW,"viat_montomax",0*1);fext_MsgE(resp.responseText);}}
	});
},
lve_montoU:function(poC,pnP){fext_SV(poC,"viat_monto",fext_GV(poC,"viat_monto")*1 + pnP*1);},
lve_ValidDT:function(poW){fext_SV(poW,"viat_duracion","");fext_SV(poW,"viat_horas",0);
	if(poW.down("#viat_fechaini").isValid()&&poW.down("#viat_fechafin").isValid()&&poW.down("#viat_horaini").isValid()&&poW.down("#viat_horafin").isValid()){
		if(fext_GRV(poW,"viat_fechaini")==fext_GRV(poW,"viat_fechafin")&&fext_GV(poW,"viat_horaini")>=fext_GV(poW,"viat_horafin")){return false;}fext_CC("log.ViatETC").lve(poW);this.lve_Calc(poW);
	}
}
});