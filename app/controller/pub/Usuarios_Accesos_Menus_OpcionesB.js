Ext.define("Siace.controller.pub.Usuarios_Accesos_Menus_OpcionesB",{extend:"Ext.app.Controller",views:["pub.Usuarios_Accesos_Menus_OpcionesB"],
init:function(application){this.control({"pub_usuaraccemenuopcb":{beforerender:this.puamob_BeforeRender},"pub_usuaraccemenuopcb actioncolumn#acOpciones":{click:this.puamob_acOpcionesCLick},"pub_usuaraccemenuopcb actioncolumn#acSubmenus":{click:this.puamob_acSubmenusCLick},"pub_usuaraccemenuopcb #grdSubmenus":{selectionchange:this.puamob_grdSubmenusSelectionchange}});},
puamob_BeforeRender:function(comp,opt){var _pan=comp.down("#panPUA");
	Ext.Ajax.request({method:"POST",url:"php/public_usuarios_accesos_json_records.php",params:{xxUsuracce_key:comp.getCK(),xxType_record:"winBTUAB"},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("pub.Usuario_AccesoWBTUAB");if(_res.success&&_res.data.length==1){var _d=_res.data[0];_mod.set(_d);fext_LR(_pan,_mod);if(_d.indiv_foto!=""){_pan.down("#indiv_foto").setSrc("attach/public_individuos_foto_"+_d.indiv_key+"_"+_d.indiv_foto);}}}
	});
	var _str=fext_CS("pub.Usuarios_Accesos_Menus_OpcionesSM");var _grd=comp.down("#grdSubmenus");_grd.bindStore(_str);
	_str.on("beforeload",function(str,oper,opt){fext_PSEP(str,["xxUsuracce_key","xxType_record"],[comp.getCK(),"SUBMENUS"]);});_str.load();
	var _strO=fext_CS("pub.Usuarios_Accesos_Menus_OpcionesO");var _grdO=comp.down("#grdOpciones");_grdO.bindStore(_strO);_strO.pageSize=500;
},
puamob_acOpcionesCLick:function(grid,cell,row,col,e,rec,t){if(rec.data.submenu_estado==1){var _w=grid.up("window");fext_mask(_w);
	Ext.Ajax.request({url:"php/public_usuarios_accesos_menus_opciones_save.php",params:{xx0005:"YES",xxUsuraccemenuopc_id:rec.data.usuraccemenuopc_id,xxUsuracce_key_:_w.getCK(),xxMenuopc_id:rec.data.menuopc_id,xxUsuraccemenuopc_estado:(rec.data.usuraccemenuopc_estado==1?0:1),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){fext_unmask(_w);var _res=fext_DJ("",resp);if(_res.success){rec.set("usuraccemenuopc_id",_res.key.substr(1)*1); rec.set("usuraccemenuopc_estado",_res.key.substr(0,1)*1);rec.commit();}else{fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_w);fext_MsgE(resp.responseText);}
	});
}},
puamob_acSubmenusCLick:function(grid,cell,row,col,e,rec,t){var _w=grid.up("window");fext_mask(_w);
	Ext.Ajax.request({url:"php/public_usuarios_accesos_menus_opciones_save.php",params:{xx0005:"YES",xxUsuraccemenuopc_id:rec.data.usuraccemenuopc_id,xxUsuracce_key_:_w.getCK(),xxMenuopc_id:rec.data.menuopc_id,xxUsuraccemenuopc_estado:(rec.data.usuraccemenuopc_estado==1?0:1),xxMenu_id:_w.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){fext_unmask(_w);var _res=fext_DJ("",resp);
			if(_res.success){rec.set("usuraccemenuopc_id",_res.key.substr(1)*1);rec.set("usuraccemenuopc_estado",_res.key.substr(0,1)*1);rec.commit();fext_GS(_w,"grdOpciones").load({params:{xxUsuracce_key:_w.getCK(),xxMenu_id:rec.data.menu_id,xxType_record:"OPCIONES"}});}else{fext_MsgE(_res.msg);}
		},failure:function(resp,opt){fext_unmask(_w);fext_MsgE(resp.responseText);}
	});
},
puamob_grdSubmenusSelectionchange:function(mod,rec,opt){if(rec.length==1){var _w=mod.view.up("window");fext_GS(_w,"grdOpciones").load({params:{xxUsuracce_key:_w.getCK(),xxMenu_id:rec[0].data.menu_id,xxType_record:"OPCIONES"}});}}
});