Ext.define("Siace.controller.siaf.Proyecto_SnipS",{extend:"Ext.app.Controller",views:["siaf.Proyecto_SnipS"],
init:function(application){this.control({
"siaf_proysnips":{beforerender:this.spss_BR},"siaf_proysnips #btnAccept":{click:this.spss_btn},"siaf_proysnips #btnCancel":{click:this.spss_btn},
"siaf_proysnips #grdSPS":{itemdblclick:this.spss_grdItemDblClk,selectionchange:this.spss_grdSelChg},
"siaf_proysnips #proysnip_nombre":{change:this.spss_Chg,keypress:this.spss_KP},"siaf_proysnips #proysnip_code":{change:this.spss_Chg,keypress:this.spss_KP}
});},
spss_BR:function(comp,opt){var _str=fext_CS("siaf.Proyecto_SnipS");fext_BSGP(comp,_str);_str.sort("proysnip_nombre","ASC");
	_str.on("beforeload",function(str,oper,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxProysnip_code","xxProysnip_nombre","xxType_record","xxType_query","xxPag"],["","","grdSearch",comp.getTQ(),1],comp,["proysnip_code","proysnip_nombre","","",""]);});
},                                                                                          
spss_Chg:function(txtf,newVal,oldVal,opt){this.spss_Clean(txtf.up("window"));},
spss_Clean:function(poC){fext_grdOC(poC);fext_Dsb(poC,"btnAccept");},
spss_KP:function(txtf,e,opt){fext_KPL(txtf.up("window"),e);},
spss_btn:function(btn,e,o){fext_CC("siaf.ProySnipSB").spss(btn);},
spss_grdItemDblClk:function(comp,r,item,index,e,opt){var _btn=comp.up("window").down("#btnAccept");_btn.fireEvent("click",_btn,e,opt);},
spss_grdSelChg:function(mod,r,o){if(r.length==1){var _w=mod.view.up("window");fext_SD(_w,"btnAccept",r[0].data.proysnip_code==_w.getCK()?true:false);}},
});