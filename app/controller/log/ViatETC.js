Ext.define("Siace.controller.log.ViatETC",{extend:"Ext.app.Controller",
lve:function(poW){var _dias=0;var _horas=0;var _hi=fext_GRV(poW,"viat_horaini").substr(0,2)*1;var _hf=fext_GRV(poW,"viat_horafin").substr(0,2)*1;
	if(fext_GRV(poW,"viat_fechaini")==fext_GRV(poW,"viat_fechafin")){_horas=_hf-_hi;}
	else{_dias=fjsDateDiffDay(fext_GV(poW,"viat_fechaini").getTime(),fext_GV(poW,"viat_fechafin").getTime())-1;_horas=(24-_hi)+_hf;}
	var _d=_dias+Math.floor(_horas / 24); var _h=_horas%24;
	var _c=(_d*1>0?_d+" día"+(_d*1>1?"s":""):"")+(_h*1>0?(_d*1>0? "  /  ":"")+_h+" hora"+(_h*1>1?"s":""):"");
	fext_SV(poW,"viat_duracion",_c);fext_SV(poW,"viat_horas",_horas);
}
});