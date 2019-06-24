Ext.define("Siace.controller.access.Login",{extend:"Ext.app.Controller",stores:["array.Years"],views:["access.Login","toolbar.CapsLockTooltip","access.Translation"],refs:[{ref:"capsLockToolTip",selector:"toolbar_capslocktooltip"},{ref:"accessHeader",selector:"access_header"}],
init:function(application){this.control({
"access_login":{show:this.al_Show},"access_login #btnAccept":{click:this.al_btnAcc},"access_login #btnCancel":{click:this.al_btnCan},
"access_login form textfield":{specialkey:this.al_textfielSpecialKey},"access_login #usur_login":{blur:this.al_usur_loginBlur,focus:this.al_usur_loginFocus,keypress:this.al_usur_loginKeyPress},"access_login #usur_psw1":{keypress:this.al_usur_psw1KeyPress},//"access_login #year_id":{change:this.al_year_idChange},
"access_header #btnLogout":{click:this.ah_btnLog},"access_mainpanel #ah_btnManual":{click:this.ah_btnManual}
});},
ah_btnLog:function(btn,e,opt){
	Ext.Ajax.request({url:"php/logout.php",success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){btn.up("access_mainviewport").destroy(); window.location.reload();}else{fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_MsgE(resp.responseText);}});
},
ah_btnManual:function(btn,e,opt){var _src="php/resources/download_file.php?xxFile=manual_usuario_letizia.pdf";fext_FileDown(undefined,_src);},
al_Show:function(comp,opt){comp.down("#year_id").setValue(fjsDateCurrent("").substr(0,4)*1);var _cboAK=comp.down("#area_key");
	_cboAK.bindStore(fext_CS("pub.Usuarios_AccesosLogin"));
	_cboAK.getStore().on("beforeload",function(str,oper,eOpt){var _prx=str.getProxy();
		_prx.setExtraParam("xxUsur_login",fext_GV(comp,"usur_login")==""?"____Q":fext_GV(comp,"usur_login"));_prx.setExtraParam("xxUsuracce_estado",1);_prx.setExtraParam("xxType_record","access_login");_prx.setExtraParam("xxType_query","ONLY_AREAS");
	});comp.down("#usur_login").focus();
},
al_btnAcc:function(btn,e,opt){var _win=btn.up("window");var _frm=btn.up("form");var _area_key=_win.down("#area_key").getValue();
	if(_area_key==""){fext_msgA("No se ha establecidon la Unidad Orgánica");return false;}
	if(!_frm.getForm().isValid()){return false;} _usur_psw1=Siace.util.MD5.encode(_win.down("#usur_psw1").getValue());fext_mask(_win);
	Ext.Ajax.request({url:"php/public_usuarios_json_validate.php",params:{xx0005:"YES",xxYear_id:_win.down("#year_id").getValue(),xxArea_key:_area_key,xxUsur_login:_win.down("#usur_login").getValue(),xxUsur_psw1:_usur_psw1},
		success:function(resp,opt){fext_unmask(_win);var _res=fext_DJ("",resp);if(_res.success){_win.close();fext_CW("access.MainViewport");fjsUserSession(_res.data[0]);}else{fext_MsgE(_res.msg);}},failure:function(resp,opt){fext_unmask(_win); fext_MsgE(resp.responseText);}
	});
},
al_btnCan:function(btn,e,opt){btn.up("form").getForm().reset();},
al_usur_loginBlur:function(txtf,e,opt){this.al_usur_loginSearchAccesos(txtf.up("window"),0);},
al_usur_loginFocus:function(txtf,e,opt){this.al_usur_loginSearchAccesos(txtf.up("window"),1);},
al_usur_loginKeyPress:function(txtf,e,opt){var _charCode=e.getCharCode();if(_charCode==13){this.al_usur_loginSearchAccesos(txtf.up("window"),13);}},
al_usur_loginSearchAccesos:function(poWin,pcType){var _search=false;var _txtUL=poWin.down("#USUR_LOGIN");var _txtul=poWin.down("#usur_login");
	if(pcType==1){_txtUL.setValue(_txtul.getValue());}else if(pcType==0){if(_txtUL.getValue()!==_txtul.getValue()){_search=true;}}else if(pcType==13){_search=true; _txtUL.setValue(_txtul.getValue());}else if(pcType=="year"){_search=true;}
	if(_search){fext_mask(poWin);var _cboAK=poWin.down("#area_key");_cboAK.getStore().load({callback:function(rec,oper,succ){if(rec.length>0){_cboAK.enable();_cboAK.setValue(rec[0].data.usuracce_key);}else{_cboAK.disable();_cboAK.setValue("");}if(fext_IE(_cboAK)){poWin.down("#usur_psw1").setValue("");poWin.down("#usur_psw1").disable();poWin.down("#btnAccept").disable();}else{poWin.down("#usur_psw1").enable();}fext_unmask(poWin);}});}
},
al_usur_psw1KeyPress:function(field,e,opt){var _charCode=e.getCharCode();
	if((e.shiftKey && _charCode>=97 && _charCode<=122) || (!e.shiftKey && _charCode>=65 && _charCode<=90)){ if(this.getCapsLockToolTip()===undefined){Ext.widget("toolbar_capslocktooltip",{target:"usur_psw1"});}this.getCapsLockToolTip().show();}
	else{if(this.getCapsLockToolTip()!==undefined){this.getCapsLockToolTip().hide();}}
},
al_textfielSpecialKey:function(field,e,opt){if(e.getKey()==e.ENTER){var _btnA=field.up("form").down("#btnAccept");_btnA.fireEvent("click",_btnA,e,opt);}}
});