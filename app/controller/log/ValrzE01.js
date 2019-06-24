Ext.define("Siace.controller.log.ValrzE01",{extend:"Ext.app.Controller",
lve:function(poC){var _mi=poC.getMI();fext_SV(poC,"valrz_fecha",fjsDateCurrent());poC.setIconCls("icon_New_90");poC.setTitle("Nueva Valorización de Combustible ::.");var _grd=poC.down("#grdLVD");var _cboTK=poC.down("#tablex_key");
	_cboTK.bindStore(fext_CS("log.ValesSWLVE"));_cboTK.getStore().on("beforeload",function(str,oper,opt){var _prx=str.getProxy();_prx.setExtraParam("xxType_record","searchWLVE");_prx.setExtraParam("ssNO_USK","NoT");_prx.setExtraParam("vs",fext_JE(fextpub_sessVar()));});_cboTK.getStore().load();
	var _str=fext_CS("log.ValesWLVE");_grd.bindStore(_str);_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"btnSuppress");});
}
});