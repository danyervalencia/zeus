Ext.define("Siace.controller.bud.MetaBT5",{extend:"Ext.app.Controller",
bmb_btn:function(btn){var _t=btn.up("#tabLP");var _TE=fext_btnTE(btn);
	if(_TE=="Fas"){fext_CC("log.PedFase").lpf_Printer({comp:_t});}else if(_TE=="Pri"){fext_CC("log.Pedidos").lp_Printer({comp:_t});}
	else{fext_CC("log.Pedidos").lp_View({comp:_t,TE:(_TE=="Det"?0:_TE),oi:(_TE=="Det"?59:_TE),nuk:"NoT"});}
},
bmb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLP");var _fg=r[0].data.ped_flga==98?true:"";fext_SDO(_t,"btnQuery","",3,_fg);fext_SDO(_t,"btnDet","",59,_fg);fext_SDO(_t,"btnAttach","",59,_fg||r[0].data.pedettr_file==""?true:"");fext_SDO(_t,"btnFases","",5002,_fg);fext_SDO(_t,"btnPrinter","",8,_fg);}}
});