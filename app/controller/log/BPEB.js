Ext.define("Siace.controller.log.BPEB",{extend:"Ext.app.Controller",
lbpe:function(btn){var _w=btn.up("window");var _TE=fext_btnTE(btn);
	if(_TE==2){btn.disable();_w.setFilterFFTR(true);fext_SD(_w,"",false,["meta_id","tarea_key","fftr_id"]);}
	else if(_TE==5){fext_CC("log.BPES").lbpe({w:_w});}
	else if(_TE=="Cer"){fext_CC("log.BPEC").lbpec({w:_w});}
	//else if(_TE=="Cer"){fext_CC("log.BPBC").lbpb({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else{_w.close();}
}
});