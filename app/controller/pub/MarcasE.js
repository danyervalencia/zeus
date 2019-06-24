Ext.define("Siace.controller.pub.MarcasE",{extend:"Ext.app.Controller",views:["pub.MarcasE"],
init:function(application){this.control({"pub_marce":{beforeshow:this.pme_BS},"pub_marce #btnSave":{click:this.pme_btnSav},"pub_marce #btnUndo":{click:this.pme_btnExt},"pub_marce #btnExit":{click:this.pme_btnExt}});},
pme_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");
	if(_TE==1){var _ico="icon_New_90";var _tit="Nueva Marca Comercial ::.";}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_marcas_json_records.php",waitMsg:"Loading...",params:{xxMarc_key:comp.getCK(),xxType_record:"frm"},success:function(frm,act){try{var _md=fext_CM("pub.MarcaE");var _res=fext_DJ(act);if(_res.data[0]){_md.set(_res.data[0]);_frm.loadRecord(_md);}}catch(x){fext_MsgC(x.Message);}},failure:function(frm,act){fext_MsgFL(act);}});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Marca Comercial ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Marca Comercial ::.";fext_Dsb(comp,"",["marc_nombre","marc_abrev","marc_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
pme_btnSav:function(btn,e,opt){fext_CC("pub.MarcES").pme(btn);},
pme_btnExt:function(btn,e,opt){btn.up("window").close();}
});