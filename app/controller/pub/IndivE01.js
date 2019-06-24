Ext.define("Siace.controller.pub.IndivE01",{extend:"Ext.app.Controller",
pie:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Registro de Identidad ::.");poC.down("#imgIndiv_foto").setSrc("attach/sin_foto.jpg");var _nro=fext_GV(poC,"tipdocident");
	fextpub_tipdocidentFilt({obj:poC.down("#tipdocident_id"),tdiei:1,val:_nro,TR:"cboAP",AB:"NO",dsb:(_nro*1>0?true:false)});if(_nro*1>0){fext_Dsb(poC,"indiv_dni");}
}
});