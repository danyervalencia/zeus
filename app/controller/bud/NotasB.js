Ext.define("Siace.controller.bud.NotasB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["bud.NotasB"],
init:function(application){this.control({
"bud_notab":{beforerender:this.bmb_BR},"bud_notab #pan #opc_id":{change:this.btb_pan_oiChg},"bud_notab #pan #btnNew":{click:this.bnb_pan_btn},"bud_notab #pan #btnModify":{click:this.bnb_pan_btn},"bud_notab #pan #btnQuery":{click:this.bnb_pan_btn},"bud_notab #pan #btnAnnular":{click:this.bnb_pan_btn},"bud_notab #pan #btnPrinter":{click:this.bnb_pan_btn},"bud_notab #pan #btnSolicita":{click:this.bnb_pan_btn},"bud_notab #pan #btnPresup":{click:this.bnb_pan_btn},"bud_notab #pan #btnReject":{click:this.bnb_pan_btn},"bud_notab #pan #btnSiaf":{click:this.bnb_pan_btn},"bud_notab #pan #btnFases":{click:this.bnb_pan_btn},
"bud_notab #pan #fase_id":{change:this.bnb_pan_ChgCbo},"bud_notab #pan #fechaini":{change:this.bnb_pan_Chg},"bud_notab #pan #fechafin":{change:this.bnb_pan_Chg},"bud_notab #pan #filter":{change:this.bnb_pan_ChgCbo},
"bud_notab #pan #grdBN":{cellclick:this.bnb_pan_grdCellClick,selectionchange:this.bnb_pan_grdSelChg},"bud_notab #pan #meta_id":{change:this.bnb_pan_ChgCbo},"bud_notab #pan #nota_nro":{change:this.bnb_pan_Chg},
"bud_notab #pan #tarea_key":{change:this.bnb_pan_ChgCbo},"bud_notab #pan #tipnota_id":{change:this.bnb_pan_ChgCbo},"bud_notab #pan #year_id":{change:this.bnb_pan_ChgCbo}
});},
bmb_BR:function(comp,o){var _mi=comp.getMI();var _p=comp.down("#pan");var _t1=comp.down("#tabBNTF");var _grd=_p.down("#grdBN");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_tabgenFilt({obj:_p.down("#tipnota_id"),tgp:2010,TR:"cboA"});fextlog_faseFilt({obj:_p.down("#fase_id"),di:201,ft:1,TR:"cboLPB",TQ:"cboLPB"});
	var _strF=Ext.create("Ext.data.Store",{fields:[{name:"filt",type:"string"},{name:"code",type:"string"}],data:[{filt:"",code:""},{filt:"=",code:"="},{filt:"<=",code:"<="},{filt:">=",code:">="}]});
	var _cboF=_p.down("#filter");_cboF.bindStore(_strF);_strF.load({callback:function(rec,oper,succ){_cboF.setValue(">=");}});
	if(_mi==2105){fextbud_metasParam({pan:_p});fextbud_tareasParam({pan:_p});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextbud_metasLoad({pan:_p});fext_SVI(_p,"",true,["btnPresup","btnReject"]);}
	else if(_mi==5138){fextbud_tareasAMParam({pan:_p,di:201,de:1});fextbud_tareasATParam({pan:_p,di:201,de:1});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextbud_tareasAMLoad({pan:_p});fext_SVI(_p,"btnSolicita",true);}else{return false;}
	
	var _str1=fext_CS("bud.Notas_Tareas_FftredB");fext_BSGP(_t1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxNota_key","xxType_record","xxPag"],[_r.data.nota_key,"grdBNB",1]);});
	var _str=fext_CS("bud.NotasB");fext_BSGP(_p,_str);_str.sort("nota_nro","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.bnb_pan_DB(_p);_me.bnb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxMeta_id","xxTarea_key","xxFuefin_id","xxTipnota_id","xxNota_nro","xxFechaini","xxFechafin","xxFilter","xxFase_id","xxType_record","vs","xxMenu_id","xxPag","ssNO_USK"],["","","","","","","","","","","grd",fext_JE(_vs),_mi,1,_mi==2105?"NoT":""],_p,["year_id","meta_id","tarea_key","fuefin_id","tipnota_id","nota_nro","fechaini","fechafin","filter","fase_id","","","","",""]);});_str.load();
},
bnb_tabsClean:function(poC,pb){var _md=fext_CM("bud.NotaW");var _t=poC.down("#tabBNTF");fext_grdOC(_t,pb,_md);},
bnb_pan_Chg:function(txtf,newV,oldV,o){this.bnb_pan_Clean(txtf.up("#pan"));},
bnb_pan_ChgCbo:function(cbo,newV,oldV,o){var _p=cbo.up("#pan");var _ii=fext_oii(cbo);if(oldV!=undefined){this.bnb_pan_Clean(_p);if(_ii=="meta_id"){if(_p.up("bud_notab").getMI()==2105){fextbud_tareasLoad({pan:_p});}else{fextbud_tareasATLoad({pan:_p});}}}},
bnb_pan_Clean:function(poC){fext_grdOC(poC);this.bnb_pan_DB(poC);this.bnb_tabsClean(poC.up("bud_notab"),true);},
bnb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnPrinter","btnAnnular","btnSolicita","btnPresup","btnSiaf","btnFases"]);},
btb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
bnb_pan_btn:function(btn,e,opt){fext_CC("bud.NotaB").bnb_btn(btn,opt);},
bnb_pan_grdCellClick:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("bud_notab"));},
bnb_pan_grdSelChg:function(mod,r,o){fext_CC("bud.NotaB").bnb_sc(mod,r);}
});