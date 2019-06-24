Ext.define("Siace.controller.pub.VehiculosB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["pub.VehiculosB"],
init:function(application){this.control({
"pub_vehb":{beforerender:this.pvb_bBeforeRender},"pub_vehb #panPV #opc_id":{change:this.pvb_ppv_opc_idChange},
"pub_vehb #panPV #btnNew":{click:this.pvb_ppv_btnNewClick},"pub_vehb #panPV #btnQuery":{click:this.pvb_ppv_btnQueryClick},"pub_vehb #panPV #btnAnnular":{click:this.pvb_ppv_btnAnnularClick},"pub_vehb #panPV #btnPrinter":{click:this.pvb_ppv_btnPrinterClick},
"pub_vehb #panPV #area_key":{change:this.pvb_ppv_area_keyChange},"pub_vehb #panPV #fechaini":{change:this.pvb_ppv_fechainiChange},"pub_vehb #panPV #fechafin":{change:this.pvb_ppv_fechafinChange},
"pub_vehb #panPV #grdLV":{cellclick:this.pvb_ppv_grdLVCellClick,selectionchange:this.pvb_ppv_grdLVSelectionChange},
"pub_vehb #panPV #val_nro":{change:this.pvb_ppv_val_nroChange,keypress:this.pvb_ppv_val_nroKeypress},"pub_vehb #panPV #meta_id":{change:this.pvb_ppv_meta_idChange},"pub_vehb #panPV #tarea_key":{change:this.pvb_ppv_tarea_keyChange},"pub_vehb #panPV #year_id":{change:this.pvb_ppv_year_idChange}
});	},
pvb_bBeforeRender:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#panPV");var _grd=_pan.down("grid");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});
	var _str=fext_CS("pub.VehiculosB");fext_BSG(_pan,_str);fext_BSP(_pan,_str);_str.sort("veh_placa","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery","btnDelete"]);_me.pvb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxVeh_placa","xxType_record","xxPag","xxMenu_id","vs"],["","","grd",1,_mi,fext_JE(_vs)],_pan,["year_id","veh_placa","","","",""]);});_str.load();
},
pvb_tabsClean:function(poC,pbBool){var _mod=fext_CM("log.ValeWin");
	//var _tabLVD=poC.down("#tabLVD");var _pagPVD=_tabLVD.down("#pagPVD");var _strLVD=_pagPVD.getStore();fext_gridClean(_strLVD,_pagPVD);_pagPVD.setDisabled(pbBool);_tabLVD.down("form").loadRecord(_mod);//_tabLVD.down("#btnAdd").setDisabled(pbBool?true:fextpub_uamoBtn(poC.down("#panPV").down("#opc_id"),1));_tabLVD.down("#btnModify").disable();_tabLVD.down("#btnQuery").disable();_tabLVD.down("#btnDelete").disable();
},
pvb_ppv_Clean:function(poC){var _pag=fext_DP(poC);fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnModify","btnQuery","btnDelete"]);},
pvb_ppv_View:function(poC,pcTE){fext_CC("pub.Vehiculos").pv_View({comp:poC,TE:pcTE,"mi":poC.up("panel").getMI(),oi:pcTE});},
pvb_ppv_opc_idChange:function(cbo,newVal,oldVal,opt){fext_SDO(cbo.up("#panPV"),"btnNew",cbo,1);},
pvb_ppv_btnNewClick:function(btn,e,opt){this.pvb_ppv_View(btn.up("#panPV"),1);},
pvb_ppv_btnodifyClick:function(btn,e,opt){this.pvb_ppv_View(btn.up("#panPV"),2);},
pvb_ppv_btnQueryClick:function(btn,e,opt){this.pvb_ppv_View(btn.up("#panPV"),3);},
pvb_ppv_btnAnnularClick:function(btn,e,opt){},
pvb_ppv_btnPrinterClick:function(btn,e,opt){var _panPV=btn.up("#panPV");fext_CC("log.Vales").lv_Printer({comp:_panPV,mi:_panPV.up("pub_vehb").getMI()});},
pvb_ppv_area_keyChange:function(cbo,newVal,oldVal,opt){fextbud_tareasAMLoad({pan:cbo.up("#panPV")});this.pvb_ppv_Clean(cbo.up("#panPV"));},
pvb_ppv_doc_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.pvb_ppv_Clean(cbo.up("#panPV"));}},
pvb_ppv_fechainiChange:function(datf,newVal,oldVal,opt){this.pvb_ppv_Clean(datf.up("#panPV"));},
pvb_ppv_fechafinChange:function(datf,newVal,oldVal,opt){this.pvb_ppv_Clean(datf.up("#panPV"));},
pvb_ppv_grdLVCellClick:function(cell,td,cellI,rec,tr,rowI,e,opt){var _pan=cell.up("pub_vehb"); _pan.down("#tab01").getActiveTab().down("grid").getStore().load();},
pvb_ppv_grdLVSelectionChange:function(mod,rec,opt){if(rec.length==1){var _panPV=mod.view.panel.up("#panPV");var _cboOI=_panPV.down("#opc_id");var _del=(Ext.isEmpty(rec[0].data.val_fecharec)?true:false);
	_panPV.down("#btnQuery").setDisabled(fextpub_uamoBtn(_cboOI,3));_panPV.down("#btnAnnular").setDisabled(_del?fextpub_uamoBtn(_cboOI,10):true);_panPV.down("#btnPrinter").setDisabled(fextpub_uamoBtn(_cboOI,8));
	this.pvb_tabsClean(_panPV.up("pub_vehb"),false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_vales_json_records.php",params:{xxVal_key:rec[0].data.val_key,xxType_record:"win",xxOrder_by:"val_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.ValeWin");var _tabLVD=_panPV.up("pub_vehb").down("#tabLVD");
			if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}_tabLVD.down("form").loadRecord(_mod);
		}
	});
}},
pvb_ppv_val_nroChange:function(txtf,newVal,oldVal,opt){this.pvb_ppv_Clean(txtf.up("#panPV"));},
pvb_ppv_val_nroKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("#panPV").down("#grdLV").getStore().load();}},
pvb_ppv_meta_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextbud_tareasATLoad({panel:cbo.up("#panPV")});this.pvb_ppv_Clean(cbo.up("#panPV"));}},
pvb_ppv_tarea_keyChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){this.pvb_ppv_Clean(cbo.up("#panPV"));}},
pvb_ppv_year_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextbud_tareasAMLoad({panel:cbo.up("#panPV")});this.pvb_ppv_Clean(cbo.up("#panPV"));}},
});