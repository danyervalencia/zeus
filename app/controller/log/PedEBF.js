Ext.define("Siace.controller.log.PedEBF",{extend:"Ext.app.Controller",
lpe:function(btn){var _ii=fext_oii(btn);var _i=_ii.substr(4,1);var _w=btn.up("window");
	if(_ii.substr(5)=="Del"){var _fi=_w.down("#ffiF"+_i);_fi.reset();_fi.setValue("");_fi.setRawValue("");_fi.setReadOnly(false);_fi.enable();fext_SV(_w,"file"+_i,"");btn.hide();fext_Dsb(_w,"btnF1Dow");}
	else{var _file=_w.down("#ffiF"+_i).fileInputEl.dom.files[0];var _src="php/resources/download_file.php?xxTable=logistics_pedidos_ettr&xxField=file"+_i+"&xxFile_name="+fext_GV(_w,"pedettr_key")+"_"+fext_GV(_w,"file"+_i);fext_FileDown(_file,_src);}
}
});