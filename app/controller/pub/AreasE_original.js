Ext.define("Siace.controller.pub.AreasE",{extend:"Ext.app.Controller",views:["pub.AreasE"],
init:function(application){this.control({
"pub_areae":{beforeshow:this.pae_BS},"pub_areae #btnSave":{click:this.pae_btnSav},"pub_areae #btnUndo":{click:this.pae_btnExt},"pub_areae #btnExit":{click:this.pae_btnExt},
});},
pae_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _cboLK=comp.down("#loc_key");var _cboPK=comp.down("#parent_key");var _me=this;
	if(_TE==1){var _ico="icon_New_90";var _tit="Nueva Unidad Orgánica ::.";this.pae_LP(comp,"","",false);}
	else if(fjsIn_array(_TE,[2,3])){
		_frm.load({method:"POST",url:"php/public_areas_json_records.php",waitMsg:"Loading...",params:{xxArea_key:comp.getCK(),xxType_record:"frm",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
			success:function(frm,act){try{var _md=fext_CM("pub.AreaE");var _d=fext_DJ(act).data[0];if(_d){_md.set(_d);_frm.loadRecord(_md);_me.pae_LP(comp,_d.loc_key,_d.parent_key,_TE==2?false:true);}}catch(x){fext_MsgC(x);}},failure:function(frm,act){fext_MsgFL(act);}
		});
		if(_TE==2){var _ico="icon_Modify_90";var _tit="Modificar Unidad Orgánica ::.";}
		else{var _ico="icon_Query_90";var _tit="Consulta de Unidad Orgánica ::.";fext_Dsb(comp,"",["loc_key","parent_key","area_nombre","area_abrev","area_observ","btnSave","btnUndo"]);comp.down("#btnExit").enable();}
	}
	comp.setIconCls(_ico);comp.setTitle(_tit);
},
pae_LP:function(poC,pcLK,pcPK,pbD){fextpub_locFilt({obj:poC.down("#loc_key"),val:pcLK,dsb:pbD});fextpub_areasFilt({obj:poC.down("#parent_key"),ak:"",val:pcPK,TR:"cbo",dsb:pbD,nuk:"NoT"});},
pae_btnSav:function(btn,e,opt){fext_CC("pub.AreaES").pae(btn);},
pae_btnExt:function(btn,e,opt){btn.up("window").close();}
});