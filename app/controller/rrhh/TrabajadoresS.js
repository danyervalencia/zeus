Ext.define("Siace.controller.rrhh.TrabajadoresS",{extend:"Ext.app.Controller",views:["rrhh.TrabajadoresS"],
init:function(application){this.control({
"rrhh_trabjs":{beforerender:this.rts_BR},"rrhh_trabjs #btnAccept":{click:this.rts_btn},"rrhh_trabjs #btnCancel":{click:this.rts_btn},
"rrhh_trabjs #grdRT":{itemdblclick:this.rts_grdItemDblClk,selectionchange:this.rts_grdSelChg},
"rrhh_trabjs #indiv_apenom":{change:this.rts_Chg,keypress:this.rts_KP},"rrhh_trabjs #indiv_dni":{change:this.rts_Chg,keypress:this.rts_KP},"rrhh_trabjs #tipdocident_id":{change:this.rts_ChgCbo}
});},
rts_BR:function(comp,opt){fextpub_tipdocidentFilt({obj:comp.down("#tipdocident_id"),tdiei:1});var _str=fext_CS("rrhh.TrabajadoresS");fext_BSGP(comp,_str);_str.sort("indiv_apenom","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxTipdocident_id","xxIndiv_dni","xxIndiv_apenom","xxType_record","xxType_query","xxPag"],["","","","grdSearch",comp.getTQ(),1],comp,["tipdocident_id","indiv_dni","indiv_apenom","","",""]);});_str.load();
},
rts_Chg:function(txtf,newV,oldV,opt){this.rts_Clean(txtf.up("window"));},
rts_ChgCbo:function(cbo,newV,oldV,opt){if(oldV!=undefined){this.rts_Clean(cbo.up("window"));}},
rts_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
rts_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
rts_btn:function(btn,e,o){fext_CC("rrhh.TrabjSB").rts(btn);},
rts_grdItemDblClk:function(comp,rec,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
rts_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.trabj_key==_w.getCK()?true:false);}},
});