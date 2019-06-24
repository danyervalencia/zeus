Ext.define("Siace.controller.pub.UsurB",{extend:"Ext.app.Controller",
pub_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("pub_usurb");var _p=_pan.down("#pan");fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnKey","",1001);fext_CC("pub.UsuariosB").pub_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/public_usuarios_json_records.php",params:{xxUsur_key:r[0].data.usur_key,xxType_record:"data_individuo"},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("pub.UsuarioW");var _t=_pan.down("#tabPUA");var _ft="sin_foto.jpg";if(_res.success&&_res.data.length==1){var _d=_res.data[0];_md.set(_d);if(_d.indiv_foto!=""){_ft="public_individuos_foto_"+_d.indiv_key+"_"+_d.indiv_foto;}}fext_LR(_t,_md);_t.down("#indiv_foto").setSrc("attach/"+_ft);}});
}},
});