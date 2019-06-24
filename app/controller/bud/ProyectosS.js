Ext.define("Siace.controller.bud.ProyectosS",{extend:"Ext.app.Controller",views:["bud.ProyectosS"],
init:function(application){this.control({
"bud_proys":{beforerender:this.bps_BR},"bud_proys #btnAccept":{click:this.bps_btn},"bud_proys #btnCancel":{click:this.bps_btn},
"bud_proys #grdBP":{itemdblclick:this.bps_grdItemDblClk,selectionchange:this.bps_grdSelChg},"bud_proys #proy_nombre":{change:this.bps_Chg,keypress:this.bps_KP},"bud_proys #proy_code":{change:this.bps_Chg,keypress:this.bps_KP}
});},
bps_BR:function(comp,o){var _str=fext_CS("bud.ProyectosS");fext_BSGP(comp,_str);_str.sort("proy_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxProy_code","xxProy_nombre","xxType_record","xxType_query","xxPag"],["","","grdSearch",comp.getTQ(),1],comp,["proy_code","proy_nombre","","",""]);});
},                                                                                          
bps_Chg:function(txtf,newVal,oldVal,o){this.bps_Clean(txtf.up("window"));},
bps_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
bps_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
bps_btn:function(btn,e,o){fext_CC("bud.ProySB").bps(btn);},
bps_grdItemDblClk:function(comp,r,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
bps_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.proy_code==_w.getCK()?true:false);}},
});