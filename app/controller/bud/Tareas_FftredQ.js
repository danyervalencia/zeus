Ext.define("Siace.controller.bud.Tareas_FftredQ",{extend:"Ext.app.Controller",stores:["array.Years"],views:["bud.Tareas_FftredQ"],
init:function(application){this.control({
"bud_tareafteq":{beforerender:this.btfq_BeforeRender},"bud_tareafteq #panBTF #btnPCP":{click:this.btfq_pbtf_btnPCP},"bud_tareafteq #panBTF #btnPDP":{click:this.btfq_pbtf_btnPDP},
"bud_tareafteq #panBTF #area_key":{change:this.btfq_pbtf_akChg,expand:this.btfq_pbtf_Expand},"bud_tareafteq #panBTF #espedet_id":{change:this.btfq_pbtf_ediChg},"bud_tareafteq #panBTF #fuefin_id":{change:this.btfq_pbtf_ffiChg,expand:this.btfq_pbtf_Expand},"bud_tareafteq #panBTF #gene_id":{change:this.btfq_pbtf_giChg,expand:this.btfq_pbtf_Expand},
"bud_tareafteq #panBTF #grdBTF":{cellclick:this.btfq_pbtf_grdCellClk,selectionchange:this.btfq_pbtf_grdSelChg},
"bud_tareafteq #panBTF #meta_id":{change:this.btfq_pbtf_meiChg,expand:this.btfq_pbtf_Expand},"bud_tareafteq #panBTF #tarea_key":{change:this.btfq_pbtf_tkChg,expand:this.btfq_pbtf_Expand},"bud_tareafteq #panBTF #tipgast_id":{change:this.btfq_pbtf_tgiChg,expand:this.btfq_pbtf_Expand},"bud_tareafteq #panBTF #tiprecur_id":{change:this.btfq_pbtf_triChg,expand:this.btfq_pbtf_Expand},"bud_tareafteq #panBTF #year_id":{change:this.btfq_pbtf_yiChg},
"bud_tareafteq #tabM #btnPMP":{click:this.btfq_tm_btnPMP},"bud_tareafteq #tabM #btnPME":{click:this.btfq_tm_btnPME},
});},
btfq_BeforeRender:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#panBTF");var _t1=comp.down("#tabM");var _grd=_pan.down("#grdBTF");var _cbo=_pan.down("#opc_id");var _vs=fextpub_sessVar();var _me=this;if(_mi==2125){}else{return false;}
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextbud_tareasAMParam({pan:_pan,mi:_mi});fextbud_tareasATParam({pan:_pan,mi:_mi});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#tiprecur_id"),TR:"TR",type:"tiprecur",mi:_mi});
	fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#gene_id"),TR:"GENE",mi:_mi,type:"gene"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET",mi:_mi,type:"espedet"});
	fextpub_tabgenFilt({obj:_pan.down("#tipgast_id"),tgp:2020,TR:"cboC"});fextpub_areasFilt({obj:_pan.down("#area_key"),filt:false,mi:_mi,OB:"area_abrev"});

	var _strM=fext_CS("bud.Tareas_FftredQ");fext_BSG(_t1,_strM);fext_BSP(_t1,_strM);
	_strM.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxTareafte_key","xxType_record","xxOrder_by","xxPag"],[_r.data.tareafte_key,"MOVEMENTS","",1]);});
	_strM.on("refresh",function(str,oper,opt){var _num=0;str.each(function(rec){_num+=1;return false;});if(_num>0){fext_SDO(_t1,"btnPMP",_cbo,32);fext_SDO(_t1,"btnPME",_cbo,32);}else{fext_Dsb(_t1,"",["btnPMP","btnPME"]);}});
	var _str=fext_CS("bud.Tareas_FftredB");fext_BSG(_pan,_str);fext_BSP(_pan,_str);_str.sort("tarea_codigo","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_SDO(_pan,"btnPCP",_cbo,32);fext_SDO(_pan,"btnPDP",_cbo,32);_me.btfq_tabsClean(comp,true);
	fext_PSEP(str,["xxYear_id","xxArea_key","xxMeta_id","xxTipgast_id","xxTarea_key","xxFuefin_id","xxTiprecur_id","xxGene_id","xxEspedet_id","xxType_record","xxPag","vs","xxMenu_id"],["","","","","","","","","","grd",1,fext_JE(_vs),_mi],_pan,["year_id","area_key","meta_id","tipgast_id","tarea_key","fuefin_id","tiprecur_id","gene_id","espedet_id","","","",""]);});
},
btfq_FTFE:function(po){po.up("#panBTF").setF(true);},
btfq_tabsClean:function(poC,pbB){var _mod=fext_CM("bud.Tarea_FftredW");var _tab=poC.down("#tabM");var _pag=fext_DP(_tab);fext_gridClean(_pag.getStore(),_pag);_pag.setDisabled(pbB);fext_LR(_tab,_mod);fext_Dsb(_tab,"",["btnPMP","btnPME"]);},
btfq_Rep:function(poC,pcOI,pcType){fext_CC("bud.TareaFteQ").btfq_Rep({comp:poC,oi:pcOI,type:pcType});},
btfq_pbtf_Clean:function(poC){poC.setF(false);var _pag=fext_DP(poC);fext_gridClean(_pag.getStore(),_pag);fext_Dsb(poC,"",["btnPCP","btnPDP"]);this.btfq_tabsClean(poC.up("bud_tareafteq"),true);},
btfq_pbtf_Expand:function(cbo,opt){cbo.up("#panBTF").setF(true);},
btfq_pbtf_btnPCP:function(btn,e,opt){this.btfq_Rep(btn.up("#panBTF"),32,"C");},
btfq_pbtf_btnPDP:function(btn,e,opt){this.btfq_Rep(btn.up("#panBTF"),32,"D");},
btfq_pbtf_akChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");this.btfq_pbtf_Clean(_p);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});},
btfq_pbtf_ediChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined){this.btfq_pbtf_Clean(_p);}},
btfq_pbtf_ffiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined&&_p.getF()){this.btfq_pbtf_Clean(_p);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#tiprecur_id"),type:"tiprecur",clasif:"1V1"});}},
btfq_pbtf_giChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined&&_p.getF()){this.btfq_pbtf_Clean(_p);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#espedet_id"),type:"espedet",clasif:"1V1"});}},
btfq_pbtf_grdCellClk:function(cell,td,cellI,rec,tr,rowI,e,opt){fext_GS(cell.up("bud_tareafteq"),"grdM").load();},
btfq_pbtf_grdSelChg:function(mod,rec,opt){if(rec.length==1){var _pan=mod.view.up("bud_tareafteq");var _p=_pan.down("#panBTF");this.btfq_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/budget_tareas_fftred_json_records.php",params:{xxTareafte_key:rec[0].data.tareafte_key,xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("bud.Tarea_FftredW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabM"),_mod);}
	});
}},
btfq_pbtf_meiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(_p.getF()){this.btfq_pbtf_Clean(_p);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
btfq_pbtf_tkChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined&&_p.getF()){this.btfq_pbtf_Clean(_p);fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}},
btfq_pbtf_tgiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined&&_p.getF()){this.btfq_pbtf_Clean(_p);fextbud_tareasATLoad({pan:_p,ff_tr:"YES",clasif:"1V1"});}},
btfq_pbtf_triChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined&&_p.getF()){this.btfq_pbtf_Clean(_p);}},
btfq_pbtf_yiChg:function(cbo,newV,oldV,opt){var _p=cbo.up("#panBTF");if(oldV!=undefined){this.btfq_pbtf_Clean(_p);fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
btfq_tm_Rep:function(poC,pcOI){fext_CC("bud.TareaFteQ").btfq_RepD({comp:poC,oi:pcOI});},
btfq_tm_btnPMP:function(btn,e,opt){this.btfq_tm_Rep(btn.up("#tabM"),32);},
btfq_tm_btnPME:function(btn,e,opt){this.btfq_tm_Rep(btn.up("#tabM"),33);}
});