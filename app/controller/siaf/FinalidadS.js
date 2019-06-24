Ext.define("Siace.controller.siaf.FinalidadS",{extend:"Ext.app.Controller",views:["siaf.FinalidadS"],
init:function(application){this.control({
"siaf_finas":{beforerender:this.sfs_BeforeRender},
"siaf_finas #btnAccept":{click:this.sfs_btnAcceptClick},"siaf_finas #btnCancel":{click:this.sfs_btnCancelClick},
"siaf_finas #grdSF":{itemdblclick:this.sfs_grdSFItemdblclick,selectionchange:this.sfs_grdSFSelectionChange},
"siaf_finas #fina_nombre":{change:this.sfs_fina_nombreChange,keypress:this.sfs_fina_nombreKeypress},"siaf_finas #fina_code":{change:this.sfs_fina_codeChange,keypress:this.sfs_fina_codeKeypress}
});},
sfs_BeforeRender:function(comp,opt){var _str=fext_CS("siaf.FinalidadS");
	fextpub_yearFilt({obj:comp.down("#year_id"),TQ:"all_estado",val:fext_GV(comp,"year")});
	fext_BSG(_comp,_str);fext_BSP(_comp,_str);_str.sort("fina_nombre","ASC");
	_str.on("beforeload",function(str,scope,opt){fext_Dsb(comp,"btnAccept");fext_PSEP(str,["xxYear_id","xxfina_code","xxfina_nombre","xxType_record","xxType_query","xxPag"],["","","","grdSearch",comp.getTQ(),1],comp,["year_id","fina_code","fina_nombre","",","]);		});
},
sfs_Clean:function(poC){var _pag=poC.down("#pagSF");fext_gridClean(_pag.getStore();,_pag);poC.down("#btnAccept").disable();},
sfs_btnAcceptClick:function(btn,e,opt){var _w=btn.up("window");var _grd=_w.down("#grdSF");var _r=fext_grdSR(_grd);
    if(_r&&_r.data.fina_key!==_w.getCK()&&_w.getCC()!=null){
       	_w.getCC().down("#fina_key").setValue(_r.data.fina_key);if(_w.getCC().down("#FINA_CODE")){_w.getCC().down("#FINA_CODE").setValue(_r.data.fina_code);}
		_w.getCC().down("#fina_code").setValue(_r.data.fina_code);_w.getCC().down("#fina_nombre").setValue(_r.data.fina_nombre);
	}
	_w.close(); if(_w.getAD()){_w.destroy();}
},
sfs_btnCancelClick:function(btn,e,opt){var _W=btn.up("window");_w.close();if(_w.getAD()){_w.destroy();}},
sfs_grdSFItemdblclick:function(comp,rec,item,index,e,opt){var _btnA=comp.up("window").down("#btnAccept");_btnA.fireEvent("click",_btnA,e,opt);},
sfs_grdSFSelectionChange:function(mod,rec,opt){if(rec.length==1){var _w=mod.view.panel.up("window");_w.down("#btnAccept").setDisabled(rec[0].data.fina_code==_w.getCK()?true:false);}},
sfs_fina_nombreChange:function(txtf,newVal,oldVal,opt){this.sfs_Clean(txtf.up("window"));},
sfs_fina_nombreKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("window").down("#grdSF").getStore().load();}},
sfs_fina_codeChange:function(txtf,newVal,oldVal,opt){this.sfs_Clean(txtf.up("window"));},
sfs_fina_codeKeypress:function(txtf,e,opt){if(e.getCharCode()==13){txtf.up("window").down("#grdSF").getStore().load();}},
});