Ext.define("Siace.controller.pub.LocalesB",{extend:"Ext.app.Controller",stores:["array.DocOrdenAB","array.Years","array.YearsAB"],views:["pub.LocalesB"],
init:function(application){this.control({
"pub_locb":{beforerender:this.plb_BeforeRender},"pub_locb #panPL #opc_id":{change:this.plb_ppl_opc_idChange},"pub_locb #panPL #btnNew":{click:this.plb_ppl_btnNewClick},"pub_locb #panPL #btnModify":{click:this.plb_ppl_btnModifyClick},"pub_locb #panPL #btnQuery":{click:this.plb_ppl_btnQueryClick},
"pub_locb #panPL #loc_nombre":{change:this.plb_ppl_loc_nombreChange,keypress:this.plb_ppl_loc_nombreKeypress},"pub_locb #panPL #grdPL":{cellclick:this.plb_ppl_grdPLCellClick,selectionchange:this.plb_ppl_grdPLSelectionchange},
"pub_locb #tabPLA":{activate:this.plb_tpla_Activate},
});},
plb_BeforeRender:function(comp,opt){var _mi=comp.getMenuId();_panPL=comp.down("#panPL");var _tabPLA=comp.down("#tabPLA");var _grd=_panPL.down("#grdPL");var _pag=_panPL.down("#pagPL");var _tab=comp.down("#tab01");var _me=this;var _vs=fextpub_sessVar();_tab.setActiveTab(0);
	fextpub_uamoPerm({obj:_panPL.down("#opc_id"),menu_id:_mi});fextpub_uamoPerm({obj:_tabPLA.down("#opc_id"),menu_id:_tabPLA.down("#menu_id").getValue()});
	//fextpub_locFilt({obj:comp.down("#loc_key")});

	var _strPLA=fext_CS("pub.Locales_AreasPLB");var _grdPLA=_tabPLA.down("#grdPLA");var _pagPLA=_tabPLA.down("#pagPLA");_grdPLA.bindStore(_strPLA); _pagPLA.bindStore(_strPLA); _strPLA.sort("area_nombre","ASC");
	_strPLA.on("beforeload",function(str,oper,opt){var _rec=fext_grdSR(_grd);var _prx=str.getProxy();_prx.setExtraParam("xxLoc_key",_rec.data.loc_key);_prx.setExtraParam("xxType_record","grdPLB"); _prx.setExtraParam("xxPag",1);});

	/*fextbud_metasParameters({panel:_tabPLA}); fextpub_tabgenFilt({obj:_tabPLA.down("#tipgast_id"),tgp:2020,TR:"combo_code",dsb:true});
	var _strPLA=fext_CS("bud.TLocales_LocalesPAB"); var _grdPLA=_tabPLA.down("#grdPLA"); var _pagPLA=_tabPLA.down("#pagPLA"); _grdPLA.bindStore(_strPLA); _pagPLA.bindStore(_strPLA); _strPLA.sort("tloc_codigo","ASC");
	_strPLA.on("beforeload",function(str,oper,opt){var _rec=fext_grdSR(_grd); var _prx=str.getProxy();_prx.setExtraParam("xxArea_key",_rec.data.area_key);_prx.setExtraParam("xxYear_id",_tabPLA.down("#year_id").getValue());_prx.setExtraParam("xxMeta_id",_tabPLA.down("#meta_id").getValue());_prx.setExtraParam("xxTipgast_id",_tabPLA.down("#tipgast_id").getValue());_prx.setExtraParam("xxType_record","grdPAB"); _prx.setExtraParam("xxPag",1);});
	*/

	var _str=fext_CS("pub.LocalesBrow");_grd.bindStore(_str);_pag.bindStore(_str);_str.sort("loc_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){_panPL.down("#btnModify").disable();_panPL.down("#btnQuery").disable();_panPL.down("#btnDelete").disable();_me.plb_tabs_Clean(comp,true);var _prx=str.getProxy();
		_prx.setExtraParam("xxLoc_nombre",_panPL.down("#loc_nombre").getValue());
		_prx.setExtraParam("xxType_record","grd");_prx.setExtraParam("vs",fext_JE(_vs));_prx.setExtraParam("xxPag",1);_prx.setExtraParam("ssNO_USK","NoT");
	});_str.load();
},
plb_tabsActivate:function(poComp,poTab){if(!fext_grdSR(poComp.down("#grdPL"))){return false;}poTab.down("grid").getStore().load();},
plb_tabs_Clean:function(poComp,pbBool){var _mod=fext_CM("pub.LocalWin");
	var _tabPLA=poComp.down("#tabPLA");fext_gridClean(_tabPLA.down("#grdPLA").getStore(),_tabPLA.down("#pagPLA"));_tabPLA.down("form").loadRecord(_mod);
	_tabPLA.down("#pagPLA").setDisabled(pbBool);

},
plb_ppl_Clean:function(poComp){var _pag=poComp.down("#pagPA");var _str=_pag.getStore();fext_gridClean(_str,_pag);poComp.down("#btnModify").disable();poComp.down("#btnQuery").disable();this.plb_tabs_Clean(poComp.up("panel"),true);},
plb_ppl_ViewEdit:function(poComp,pcTE){if(fextpub_uamoBtn(poComp.down("#opc_id"),1) ){return false;} 
	if(fjsIn_array(pcTE,[2,3])){var _rec=fext_grdSR(poComp.down("#grdPA")); if(!_rec){return false;}}
	fext_CC("pub.AreasEdit");var _win=fext_CW("pub.AreasEdit");_win.setTypeEdit(pcTE);_win.setCallStore(poComp.down("#grdPA").getStore());_win.setMenuId(poComp.up("panel").getMenuId());
	if(fjsIn_array(pcTE,[2,3])){_win.setCallKey(_rec.data.area_key);}_win.show();
},
plb_ppl_opc_idChange:function(cbo,newVal,oldVal,opt){cbo.up("panel").down("#btnNew").setDisabled(fextpub_uamoBtn(cbo,1));},
plb_ppl_btnNewClick:function(btn,e,opt){this.plb_ppl_ViewEdit(btn.up("#panPL"),1);},
plb_ppl_btnModifyClick:function(btn,e,opt){this.plb_ppl_ViewEdit(btn.up("#panPL"),2);},
plb_ppl_btnQueryClick:function(btn,e,opt){this.plb_ppl_ViewEdit(btn.up("#panPL"),3);},
plb_ppl_loc_nombreChange:function(textfield,newVal,oldVal,opt){this.plb_ppl_Clean(textfield.up("#panPL"));},
plb_ppl_loc_nombreKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("pub_locb").down("#grdPL").getStore().load();}},
plb_ppl_grdPLCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("pub_locb");_pan.down("#tab01").getActiveTab().down("grid").getStore().load();},
plb_ppl_grdPLSelectionchange:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.panel.up("pub_locb");var _panPL=_pan.down("#panPL");var _cboOI=_panPL.down("#opc_id");
	_panPL.down("#btnModify").setDisabled(fextpub_uamoBtn(_cboOI,2));_panPL.down("#btnQuery").setDisabled(fextpub_uamoBtn(_cboOI,3));_panPL.down("#btnDelete").setDisabled(fextpub_uamoBtn(_cboOI,7));this.plb_tabs_Clean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/public_locales_json_records.php",params:{xxLoc_key:rec[0].data.loc_key,xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("pub.LocalWin");var _tabPLA=_pan.down("#tabPLA");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}_tabPLA.down("form").loadRecord(_mod);},failure:function(resp,opt){}
	});
}},
plb_ppl_loc_keyChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.plb_ppl_Clean(cbo.up("#panPL"));}},
plb_tpla_Activate:function(comp,opt){this.plb_tabsActivate(comp.up("pub_locb"),comp);},
plb_tpla_Clean:function(poComp){var _pag=poComp.down("#pagPLA");var _str=_pag.getStore(); ext_gridClean(_str,_pag);},
});