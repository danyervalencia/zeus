Ext.define("Siace.controller.log.NeasB",{extend:"Ext.app.Controller",stores:["array.Years"],views:["log.NeasB"],refs:[{ref:"lnb",selector:"log_neab"}],
init:function(application){this.control({
"log_neab":{beforerender:this.lnb_BR},"log_neab #pan #opc_id":{change:this.lnb_pan_oiChg},
"log_neab #pan #btnNew":{click:this.lbb_pan_btn},"log_neab #pan #btnModify":{click:this.lbb_pan_btn},"log_neab #pan #btnQuery":{click:this.lbb_pan_btn},"log_neab #pan #btnAnnular":{click:this.lbb_pan_btn},"log_neab #pan #btnPrinter":{click:this.lbb_pan_btn},
"log_neab #pan #fechaini":{change:this.lnb_pan_Chg},"log_neab #pan #fechafin":{change:this.lnb_pan_Chg},
"log_neab #pan #grdLN":{cellclick:this.lnb_pan_grdCellClk,selectionchange:this.lnb_pan_grdSelChg},
"log_neab #pan #nea_nro":{change:this.lnb_pan_Chg,keypress:this.lnb_pan_KP},"log_neab #pan #tipnea_id":{change:this.lnb_pan_ChgCbo},
"log_neab #pan #year_id":{change:this.lnb_pan_ChgCbo},
});	},
lnb_BR:function(comp,opt){var _mi=comp.getMI();var _p=comp.down("#pan");var _grd=_p.down("#grdLN");var _t1=comp.down("#tabLND");var _vs=fextpub_sessVar();var _me=this;
	fextpub_uamoPerm({comp:_p,mi:_mi});fextpub_yearsVisible(_p.down("#year_id"),_vs.y);fextpub_tabgenFilt({obj:_p.down("#tipnea_id"),tgp:5090,OB:"tabgen_nombre"});
	var _str1=fext_CS("log.Neas_DetB");fext_BSGP(_t1,_str1);_str1.sort("neadet_item","ASC");
	_str1.on("beforeload",function(str,oper,opt){var _r=fext_grdSR(_grd);fext_PSEP(str,["xxNea_key","xxType_record","xxPag"],[_r.data.nea_key,"grdLNB",1]);});
	var _str=fext_CS("log.NeasB");fext_BSGP(_p,_str);_str.sort("nea_fecha","DESC");
	_str.on("beforeload",function(str,oper,opt){_me.lnb_pan_DB(_p);_me.lnb_tabsClean(comp,true);fext_PSEP(str,["xxYear_id","xxNea_nro","xxFechaini","xxFechafin","xxTipnea_id","xxType_record","vs","xxMenu_id","xxPag"],["","","","","","grd",fext_JE(_vs),_mi,1],_p,["year_id","nea_nro","fechaini","fechafin","tipnea_id","","","",""]);});
},
pab_tabsAct:function(comp,opt){if(!fext_grdSR(comp.up("log_neab"),"grdLN")){return false;}fext_GS(comp).load();},
lnb_tabsClean:function(poC,pb){var _md=fext_CM("log.NeaW");var _t=poC.down("#tabLND");fext_grdOC(_t,pb,_md);},
lnb_pan_Chg:function(txtf,newV,oldV,opt){this.lnb_pan_Clean(txtf.up("#pan"));},
lnb_pan_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.lnb_pan_Clean(cbo.up("#pan"));}},
lnb_pan_Clean:function(poC){fext_grdOC(poC);this.lnb_pan_DB(poC);this.lnb_tabsClean(poC.up("log_neab"),true);},
lnb_pan_DB:function(poC){fext_Dsb(poC,"",["btnModify","btnQuery","btnAnnular","btnPrinter"]);},
lnb_pan_KP:function(txtf,e,opt){fext_KPL(txtf,e,"pan");},
lnb_pan_oiChg:function(cbo,newV,oldV,opt){fext_SDO(cbo.up("panel"),"btnNew",cbo,1);},
lbb_pan_btn:function(btn,e,opt){fext_CC("log.NeaBB").lnb(btn,opt);},
lnb_pan_grdCellClk:function(cell,td,cellI,r,tr,rowI,e,o){fext_TL(cell.up("log_neab"));},
lnb_pan_grdSelChg:function(mod,r,o){fext_CC("log.NeaB").lnb_sc(mod,r);}
});