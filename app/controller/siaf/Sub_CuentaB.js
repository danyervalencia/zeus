Ext.define("Siace.controller.siaf.Sub_CuentaB",{extend:"Ext.app.Controller",stores:["array.Years","array.YearsAB"],views:["siaf.Sub_CuentaB"],
init:function(application){this.control({
"siaf_subctab":{beforerender:this.sscb_BR},
"siaf_subctab #pan #opc_id":{change:this.sscb_pan_oiChg},
"siaf_subctab #pan #grdSSC":{cellclick:this.sscb_pan_grdCellClk,selectionchange:this.sscb_pan_grdSelChg},"siaf_subctab #pan #may_code":{change:this.sscb_pan_ChgCbo},"siaf_subctab #pan #year_id":{change:this.sscb_pan_year_idChange},
"siaf_subctab #tabBTF":{activate:this.sscb_tabsAct},"siaf_subctab #tabBTF #fuefin_id":{change:this.sscb_tbtf_fuefin_idChange},"siaf_subctab #tabBTF #meta_id":{change:this.sscb_tbtf_meta_idChange},"siaf_subctab #tabBTF #tipgast_id":{change:this.sscb_tbtf_tipgast_idChange},"siaf_subctab #tabBTF #year_id":{change:this.sscb_tbtf_year_idChange},
});},
sscb_BR:function(comp,o){var _mi=comp.getMI();_pan=comp.down("#pan");var _t1=comp.down("#tabBEDSC");var _grd=_pan.down("#grdSSC");var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextpub_uamoPerm({comp:_t1});comp.down("#may_code").bindStore(fext_CS("siaf.Ctb_MayorCbo"));fextpub_yearsValue(_pan.down("#year_id"),"");

	var _str1=fext_CS("bud.Especificas_Det_Sub_CuentaSSCB");fext_BSGP(_t1,_str1);_str1.sort("subcta_nombre","ASC");
	_str1.on("beforeload",function(str,oper,opt){fext_Dsb(_t1,"btnQuery");var _r=fext_grdSR(_grd);fext_PSEP(str,["xxYear_id","xxMay_code","xxSubcta_code","xxType_record","xxPag"],[_r.data.year_id,_r.data.may_code,_r.data.subcta_code,"grdSSCB",1]);});

	var _str=fext_CS("siaf.Sub_CuentaB");fext_BSGP(_pan,_str);//_str.sort("espedet_codigo","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnModify","btnQuery"]);_me.sscb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxMay_code","xxSubcta_nombre","xxType_record","xxPag"],["","","","grd",1],_pan,["year_id","may_code","subcta_nombre","",""]);});_str.load();
},
sscb_tabsAct:function(comp,o){if(!fext_grdSR(comp.up("siaf_subctab"),"grdSSC")){return false;}fext_GS(comp).load();},
sscb_tabsClean:function(poC,pbB){var _tab=poC.down("#tabBEDSC");var _pag=fext_DP(_tab);fext_gridClean(_pag.getStore(),_pag);_pag.setDisabled(pbB);fext_SDO(_tab,"btnAdd","",13,pbB);fext_Dsb(_tab,"",["btnModify","btnQuery"]);},
sscb_pan_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.sscb_pan_Clean(cbo.up("#pan"));}},
sscb_pan_Clean:function(poC){var _pag=fext_DP(poC);fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnModify","btnQuery"]);this.sscb_tabsClean(poC.up("panel"),true);},
sscb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("#pan"),"btnNew",cbo,1);},
sscb_pan_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,o){fext_TL(cell.up("siaf_subctab"));},

sscb_pan_grdSelChg:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.up("siaf_subctab");var _p=_pan.down("#pan");
	fext_SDO(_p,"btnModify","",2);fext_SDO(_p,"btnQuery","",3);this.sscb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/siaf_sub_cuenta_json_records.php",params:{xxSubcta_id:rec[0].data.subcta_id,xxType_record:"win"},success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("siaf.Sub_CuentaW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabBEDSC"),_mod);}});
}},


sscb_pan_year_idChange:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");if(oldV!=undefined){this.sscb_pan_Clean(_p);}var _cbo=_p.down("#may_code");
	_cbo.getStore().load({params:{xxYear_id:newV,xxType_record:"cboCN",xxType_query:"ONLY_CTA",xxAdd_blank:"YES"},callback:function(rec){if(rec.length>0){_cbo.enable();_cbo.setValue(rec[0].data.may_code);}else{_cbo.disable();_cbo.setValue("");}}});
},

sscb_t1_Clean:function(poC){fext_gridClean(fext_GS(poC,"pagBEDSC"),poC.down("#pagBEDSC"));},
sscb_t1_opc_idChange:function(cbo,newV,oldV,opt){if(!fextpub_uamoBtn(cbo,0)){cbo.up("tabpanel").child("#tabBEDSC").tab.show();}},
//sscb_t1_btnQueryClick:function(btn,e,opt){var _tabPEDSC=btn.up("#tabBEDSC");fext_CC("pub.Bienes_Servs").pbs_View({"comp":_t1,"type_edit":3,"grid":"grdPBSED","menu_id":_tabPBSED.down("#menu_id").getValue(),"opc_id":3});},


});