Ext.define("Siace.controller.log.SalidasENSA",{extend:"Ext.app.Controller",stores:["array.Bst"],views:["log.SalidasENSA"],
init:function(application){this.control({
"log_salensa":{activate:this.lsea_Act,beforerender:this.lsea_BR},"log_salensa #btnAccept":{click:this.lsea_btnAcc},"log_salensa #btnCancel":{click:this.lsea_btnCan},"log_salensa #btnBPS":{click:this.lsea_btnBPS},
"log_salensa #bsc_id":{change:this.lsea_ChgCbo},"log_salensa #bsg_id":{change:this.lsea_ChgCbo},"log_salensa #bsf_id":{change:this.lsea_ChgCbo},"log_salensa #bs_nombre":{change:this.lsea_Chg,keypress:this.lsea_KP},"log_salensa #tipnea_id":{change:this.lsea_ChgCbo},"log_salensa #fuefin_id":{change:this.lsea_ChgCbo},"log_salensa #proy_key":{change:this.lsea_Chg},
"log_salensa #grd":{itemdblclick:this.lsea_grdItemDblClk,selectionchange:this.lsea_grdSelChg},
});},
lsea_Act:function(comp,opt){console.log("activador");},
lsea_BR:function(comp,opt){fext_SVI(comp,"proy_nombre",false);var _vs=fextpub_sessVar();
	fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fextpub_bsfParam({pan:comp});fextpub_bsgLoad({pan:comp});fextpub_tabgenFilt({obj:comp.down("#tipnea_id"),tgp:5090,OB:"tabgen_nombre"});fextbud_fuefinFilt({pan:comp});
	var _str=fext_CS("log.SalidasENSA");fext_BSGP(comp,_str);_str.sort("bs_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxBsg_id","xxBsc_id","xxBsf_id","xxBs_nombre","xxTipnea_id","xxAlma_key","xxFuefin_id","xxProy_key","vs","xxType_record","xxPag"],["","","","","","","","",fext_JE(_vs),"grd",1],comp,["bsg_id","bsc_id","bsf_id","bs_nombre","tipnea_id","alma_key","fuefin_id","proy_key","","",""]);});
},
lsea_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
lsea_btnAcc:function(btn,e,opt){var _w=btn.up("window");var _grd=_w.down("#grd");var _close=true;var _r=fext_grdSR(_grd);if(!_r){return false;}
	_close=fext_CC("log.SalidasEN").lse_grdSA(_w.getCC(),_r.data);if(_close){fext_Dsb(_w,"btnAccept");_w.close();if(_w.getAD()==true){_w.destroy();}}
},
lsea_btnCan:function(btn,e,opt){var _w=btn.up("window");_w.close();if(_w.getAD()){_w.destroy();}},
lsea_btnBPS:function(btn,e,opt){var _w=btn.up("window");fext_CC("bud.ProyectosS");_w.setCompBPS(fext_compSearch({cc:_w,os:_w.getCompBPS(),v:"Siace.view.bud.ProyectosS",tit:"Búsqueda de Proyecto",ck:fext_GV(_w,"proy_key")}));},
lsea_Chg:function(txtf,newV,oldV,opt){this.lsea_Clean(txtf.up("window"));},
lsea_ChgCbo:function(cbo,newV,oldV,opt){var _w=cbo.up("window");var _ii=fext_oii(cbo,"",3);if(oldV!=undefined){this.lsea_Clean(_w);}if(_ii=="bsg"){fextpub_bscLoad({pan:_w});}else if(_ii=="bsc"){fextpub_bsfLoad({pan:_w});}},
lsea_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
lsea_grdItemDblClk:function(comp,rec,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
lsea_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.tareafte_key==_w.getCK()?true:false);}},
lsea_txnChg:function(txtf,newV,oldV,opt){this.lsea_Clean(txtf.up("window"));},
lsea_txnKP:function(txtf,e,opt){if(e.getCharCode()==13){fext_GS(txtf.up("window")).load();}}
});