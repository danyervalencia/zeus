Ext.define("Siace.controller.log.PedidosBVB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.PedidosBVB"],refs:[{ref:"lpb",selector:"log_pedbvb"}],
init:function(application){this.control({
"log_pedbvb":{beforerender:this.lpbv_BR},"log_pedbvb #btnQuery":{click:this.lpbv_pan_btn},"log_pedbvb #pan #btnDet":{click:this.lpbv_pan_btn},"log_pedbvb #btnAttach":{click:this.lpbv_pan_btn},"log_pedbvb #btnFases":{click:this.lpbv_pan_btn},"log_pedbvb #btnVobo":{click:this.lpbv_pan_btn},"log_pedbvb #btnReject":{click:this.lpbv_pan_btn},
"log_pedbvb #pan #area_key":{change:this.lpbv_pan_area_keyChange},"log_pedbvb #pan #faseacce_key":{change:this.lpbv_pan_fakChg},"log_pedbvb #pan #fechaini":{change:this.lpbv_pan_Chg},"log_pedbvb #pan #fechafin":{change:this.lpbv_pan_Chg},
"log_pedbvb #pan #grdLP":{cellclick:this.lpbv_pan_grdCellClk,selectionchange:this.lpbv_pan_grdSelChg},"log_pedbvb #pan #ped_nro":{change:this.lpbv_pan_Chg,keypress:this.lpbv_pan_KP},
"log_pedbvb #pan #tipped_id":{change:this.lpbv_pan_tpiChg},"log_pedbvb #pan #year_id":{change:this.lpbv_pan_ChgCbo}
});},
lpbv_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _tabPD=comp.down("#tabLPD");var _cboFEK=comp.down("#faseextr_key");var _cboFAK=comp.down("#faseacce_key");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);
	_cboFEK.bindStore(fext_CS("log.Fases_ExtrasVB"));_cboFEK.getStore().load({params:{xxFaseextr_estado:1,xxType_record:"cboVB",xxOrder_by:"fe.extr_id"}});
	_cboFAK.bindStore(fext_CS("log.Fases_AccesosUsursess"));_cboFAK.getStore().load({params:{xxDoc_id:501,xxFase_esvobo:1,xxOrder_by:"fase_orden DESC",vs:fext_JE(_vs)},callback:function(rec){if(rec.length>0){_cboFAK.setValue(rec[0].data.faseacce_key);_me.lpbv_pan_strLP(_p,_mi);}else{_cboFAK.disable();_cboFAK.setValue("");}}});
	fextpub_tabgenFilt({obj:_p.down("#tipped_id"),tgp:5005,TR:"cboA"});
	var _str=fext_CS("log.Pedidos_DetB");fext_BSG(_tabPD,_str);fext_BSP(_tabPD,_str);_str.sort("peddet_item","ASC");
	_str.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(comp.down("#grdLP"));fext_PSEP(str,["xxPed_key","xxType_record","xxPag"],[_r.data.ped_key,"grdLPB",1]);});
},
lpbv_tabsClean:function(poC,pb){var _md=fext_CM("log.PedidoW");var _t=poC.down("#tabLPD");fext_grdOC(_t,pb,_md);},
lpbv_pan_Chg:function(txtf,newV,oldV,o){this.lpbv_pan_Clean(txtf.up("#pan"));},
lpbv_pan_ChgCbo:function(cbo,newV,oldV,o){if(oldV!=undefined){this.lpbv_pan_Clean(cbo.up("#pan"));}},
lpbv_pan_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"",["btnQuery","btnAttach","btnFases","btnVobo","btnReject"]);this.lpbv_tabsClean(poC.up("log_pedbvb"),true);},
lpbv_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lpbv_pan_strLP:function(poC,pcMI){var _str=fext_CS("log.PedidosBVB");fext_BSG(poC,_str);fext_BSP(poC,_str);_str.sort("ped_nro","DESC");var _me=this;
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(poC,"",["btnQuery","btnAttach","btnFases","btnVobo","btnReject"]);_me.lpbv_tabsClean(_me.getLpb(),true);var _fak=fext_GV(poC,"faseacce_key");fext_PSEP(str,["xxYear_id","xxFaseacce_key","xxTipped_id","xxArea_key","xxMeta_id","xxTarea_key","xxPed_nro","xxFechaini","xxFechafin","xxType_record","xxPag","vs","xxMenu_id"],["",_fak==""?"___":_fak,"","","","","","","","grd",1,fext_JE(fextpub_sessVar()),pcMI],poC,["year_id","","tipped_id","area_key","meta_id","tarea_key","ped_nro","fechaini","fechafin","","","",""]);});_str.load();
},
lpbv_pan_btn:function(btn,e,opt){fext_CC("log.PedBVBB").lpbvb(btn,opt);},
lpbv_pan_fakChg:function(cbo,newV,oldV,opt){if(oldV!=undefined){fext_GS(cbo.up("#pan"),"").load();}},
lpbv_pan_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,o){fext_TL(cell.up("log_pedbvb"));},
lpbv_pan_grdSelChg:function(mod,rec,opt){if(rec.length==1){var _pan=this.getLpb();var _p=_pan.down("#pan");var _fg=rec[0].data.ped_flga==98?true:"";
	fext_SDO(_p,"btnQuery","",3,_fg);fext_SDO(_p,"btnDet","",59,_fg);fext_SDO(_p,"btnAttach","",59,_fg||rec[0].data.pedettr_file==""?true:"");fext_SDO(_p,"btnFases","",5002,_fg);fext_SDO(_p,"btnVobo","",41,_fg);fext_SDO(_p,"btnReject","",45,_fg);this.lpbv_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/logistics_pedidos_json_records.php",params:{xxPed_key:rec[0].data.ped_key,xxType_record:"win",xxOrder_by:"ped_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("log.PedidoW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabLPD"),_mod);}});
}},
lpbv_pan_tpiChg:function(cbo,newV,oldV,opt){if(oldV!=undefined){cbo.up("#pan").down("#pagLP").doRefresh();}},
});