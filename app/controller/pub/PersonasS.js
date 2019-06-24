Ext.define("Siace.controller.pub.PersonasS",{extend:"Ext.app.Controller",views:["pub.PersonasS"],
init:function(application){this.control({
"pub_perss":{beforerender:this.pps_BR},"pub_perss #btnAccept":{click:this.pps_btn},"pub_perss #btnCancel":{click:this.pps_btn},
"pub_perss #grdPP":{itemdblclick:this.pps_grdItemdDlClk,selectionchange:this.pps_grdSelChg},"pub_perss #pers_nombre":{change:this.pps_Chg,keypress:this.pps_KP},"pub_perss #pers_ruc":{change:this.pps_Chg,keypress:this.pps_KP},"pub_perss #tipdocident_id":{change:this.pps_Chg}
});},
pps_BR:function(comp,opt){var _str=fext_CS("pub.PersonasS");fext_BSGP(comp,_str);_str.sort("pers_nombre","ASC");
	_str.on("beforeload",function(str,scop,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxPers_ruc","xxPers_nombre","xxType_record","xxType_query","xxPag"],["","","grdSearch",comp.getTQ(),1],comp,["pers_ruc","pers_nombre","","",""]);});
},
pps_Chg:function(txtf,newV,oldV,o){this.pps_Clean(txtf.up("window"));},
pps_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
pps_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
pps_btn:function(btn,e,opt){fext_CC("pub.PersSB").pps(btn);},
pps_grdItemdDlClk:function(comp,r,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
pps_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.pers_key==_w.getCK()?true:false);}},
});