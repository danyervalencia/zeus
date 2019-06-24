Ext.define("Siace.controller.log.PedBCT3",{extend:"Ext.app.Controller",
lpb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLC");var _d=r[0].data;var _fg=_d.coti_flga==98?true:"";var _bpm=_d.bp_monto*1;var _ch=fext_grdSR(_t.up("log_pedbc"),"grdLP").data.coti_hide;
	fext_SDO(_t,"btnModify","",2,_fg?true:"");fext_SDO(_t,"btnAnnular","",10,_fg||_bpm>0||_ch==1?true:"");fext_SDO(_t,"btnPrinter","",8,_fg||_ch==1?true:"");fext_SDO(_t,"btnBuenapro","",5021,_fg||_bpm>0||_ch==1?true:"");
}}
});