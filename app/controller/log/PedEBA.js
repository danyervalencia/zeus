Ext.define("Siace.controller.log.PedEBA",{extend:"Ext.app.Controller",
lpe:function(btn){var _w=btn.up("window");
	//if(fext_IE(_w.down("#meta_id"))||_w.down("#meta_id").getValue()*1<=0){fext_MsgA("Debe indicar la Secuencia Funcional",_w.down("#meta_id"));return false;}
	//if(fext_IE(_w.down("#tarea_key"))){fext_MsgA("Debe indicar la TAREA Presupuestal",_w.down("#tarea_key"));return false;}
	//if(fext_IE(_w.down("#fftr_id"))||_w.down("#fftr_id").getValue()*1<=0){fext_MsgA("Debe indicar el Rubro Presupuestal",_w.down("#fftr_id"));return false;}
	fext_CC("pub.Bienes_ServsS");var _tp=fext_GV(_w,"tipped_id");
	_w.setCompPBSS(fext_compSearch({cc:_w,os:_w.getCompPBSS(),v:"Siace.view.pub.Bienes_ServsS",tit:"Búsqueda Catálogo de Bienes y Servicios ::.",TQ:"espedet_id",TRE:"ADD_PEDIDOS"}));var _wB=_w.getCompPBSS();
	_wB.setTab02(5);_wB.setBst_id(_tp==5006?1:2);fext_SV(_wB,"bst_id",_wB.getBst_id()*1);fext_Dsb(_wB,"bst_id");
	_wB.setTK(fext_GV(_w,"tarea_key"));_wB.setTC(fext_GRV(_w,"tarea_key").substr(0,8));_wB.setFFI(fext_GV(_w,"fftr_id").substr(0,3));_wB.setTRI(fext_GV(_w,"fftr_id").substr(4));_wB.setFFTRC(fext_GRV(_w,"fftr_id").substr(0,5));_wB.setEDT(_tp==5006?"B":"S");
}
});