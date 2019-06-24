Ext.define("Siace.controller.pub.IndividuosS",{extend:"Ext.app.Controller",views:["pub.IndividuosS"],
init:function(application){this.control({
"pub_indivs":{beforerender:this.pis_BR},"pub_indivs #btnAccept":{click:this.pis_btn},"pub_indivs #btnCancel":{click:this.pis_btn},
"pub_indivs #grdPI":{itemdblclick:this.pis_grdItemdDlClk,selectionchange:this.pis_grdSelChg},
"pub_indivs #indiv_apenom":{change:this.pis_Chg,keypress:this.pis_KP},"pub_indivs #indiv_dni":{change:this.pis_Chg,keypress:this.pis_KP},"pub_indivs #tipdocident_id":{change:this.pis_ChgCbo}
});},
pis_BR:function(comp,opt){fextpub_tipdocidentFilt({obj:comp.down("#tipdocident_id"),tdiei:1});var _str=fext_CS("pub.IndividuosS");fext_BSGP(comp,_str);_str.sort("indiv_apenom","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxTipdocident_id","xxIndiv_dni","xxIndiv_apenom","xxType_record","xxType_query","xxPag"],["","","","grdSearch",comp.getTQ(),1],comp,["tipdocident_id","indiv_dni","indiv_apenom","","",""]);});_str.load();
},
pis_Chg:function(txtf,newV,oldV,opt){this.pis_Clean(txtf.up("window"));},
pis_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.pis_Clean(cbo.up("window"));}},
pis_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
pis_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
pis_btn:function(btn,e,opt){fext_CC("pub.IndivSB").pis(btn);},
pis_grdItemdDlClk:function(comp,r,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
pis_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.indiv_key==_w.getCK()?true:false);}},
});