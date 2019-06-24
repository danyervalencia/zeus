Ext.define("Siace.controller.bud.NotaE",{extend:"Ext.app.Controller",
bne_supr:function(btn){var _w=btn.up("window");var _r=fext_grdSR(_w,"grdBNTF");if(_r){fext_GS(_w,"grdBNTF").remove(_r);btn.disable();
	fext_SV(_w,"nota_egreso",fext_GV(_w,"nota_egreso")*1 - _r.data.notatareafte_egreso*1);fext_SV(_w,"nota_ingreso",fext_GV(_w,"nota_ingreso")*1 - _r.data.notatareafte_ingreso*1);
	if(fext_GV(_w,"nota_egreso")*1==0&&fext_GV(_w,"nota_ingreso")*1==0){_w.setFE(true);fext_SD(_w,"",false,["meta_id","tarea_key","fftr_id"]);}
}}
});