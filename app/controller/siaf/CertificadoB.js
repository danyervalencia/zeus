Ext.define("Siace.controller.siaf.CertificadoB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["siaf.CertificadoB"],
init:function(application){this.control({
"siaf_certifb":{beforerender:this.scb_BR},"siaf_certifb #pan #btnQuery":{click:this.scb_pan_btn},"siaf_certifb #pan #btnPrinter":{click:this.scb_pan_btn},
"siaf_certifb #pan #espedet_id":{change:this.scb_pan_ChgCbo},"siaf_certifb #pan #fuefin_id":{change:this.scb_pan_ChgCbo,expand:this.scb_pan_Expand},"siaf_certifb #pan #certif_nro":{change:this.scb_pan_Chg},
"siaf_certifb #pan #grd":{cellclick:this.scb_pan_grdCellClk,selectionchange:this.scb_pan_grdSelChg},
"siaf_certifb #pan #meta_id":{change:this.scb_pan_ChgCbo,expand:this.scb_pan_Expand},"siaf_certifb #pan #year_id":{change:this.scb_pan_ChgCbo},
});},
scb_BR:function(comp,opt){var _mi=comp.getMI();var _pan=comp.down("#pan");var _grd=_pan.down("#grd");var _t1=comp.down("#tabSCMC");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_pan,mi:_mi});fextbud_tareasAMParam({pan:_pan,mi:_mi});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#fuefin_id"),TR:"FF",mi:_mi,type:"fuefin"});fextbud_tareas_fftredParam({pan:_pan,obj:_pan.down("#espedet_id"),TR:"ESPEDET",mi:_mi,type:"espedet"});fextpub_yearsVisible(_pan.down("#year_id"),_vs.y);
	var _str1=fext_CS("siaf.CertifmetaSCMC");fext_BSGP(_t1,_str1);
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxType_record","xxType_query","xxPag","vs","ssNO_USK"],["grdSCMC",_r.data.certifmeta_id,1,fext_JE(_vs),"NoT"]);});
	var _str=fext_CS("siaf.CertifmetaSCB");fext_BSGP(_pan,_str);_str.sort("certif_documento","DESC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(_pan,"",["btnQuery","btnPrinter"]);_me.scb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxUnieje_key","xxCertif_nro","xxMeta_id","xxFuefin_id","xxEspedet_id","xxType_record","xxMenu_id","xxPag","vs"],["",_vs.ue,"","","","","grdSCB",_mi,1,fext_JE(_vs)],_pan,["year_id","","certif_nro","meta_id","fuefin_id","espedet_id","","","",""]);});
},
scb_tabsClean:function(poC,pb){var _md=fext_CM("siaf.CertifmetaW");var _t=poC.down("#tabSCMC");fext_grdOC(_t,pb,_md);},
scb_pan_Chg:function(txtf,newV,oldV,opt){this.scb_pan_Clean(txtf.up("#pan"));},
scb_pan_ChgCbo:function(cbo,newV,oldV,opt){var _p=cbo.up("#pan");var _ii=fext_oii(cbo).substr(0,2);if(_p.getF()){this.scb_pan_Clean(_p);if(_ii=="me"){fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#fuefin_id"),type:"fuefin",clasif:"1V1"});}else if(_ii=="fu"){fextbud_tareas_fftredLoad({pan:_p,obj:_p.down("#espedet_id"),type:"espedet",clasif:"1V1"});}}if(_ii=="ye"){fextbud_tareasAMLoad({pan:_p,ff_tr:"YES",clasif:"1V1",fftr_all:1});}},
scb_pan_Clean:function(poC){fext_grdOC(poC);poC.setF(false);fext_Dsb(poC,"",["btnQuery","btnPrinter"]);this.scb_tabsClean(poC.up("siaf_certifb"),true);},
scb_pan_Expand:function(cbo,opt){cbo.up("#pan").setF(true);},
scb_pan_btn:function(btn,e,opt){},
scb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("siaf_certifb"));},
scb_pan_grdSelChg:function(mod,r,opt){fext_CC("siaf.CertifB").scb_sc(mod,r);},
});