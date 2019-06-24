Ext.define("Siace.controller.bud.NotaB",{extend:"Ext.app.Controller",
bnb_btn:function(btn,opt){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);var _c="bud.Notas";var _mi=_p.up("bud_notab").getMI();
	if(_TE==8){fext_CC(_c).bn_Printer({comp:_p,mi:_mi});}
	else if(_TE==10){fext_CC("bud.NotaBA").bna_Annular({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Sol"){fext_CC("bud.NotaFaseS").bnfs({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Pre"){fext_CC("bud.NotaFaseP").bnfp({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Rej"){fext_CC("bud.NotaFaseR").bnfr({comp:_p,"btn":btn,"opt":opt,mi:_mi});}
	else if(_TE=="Sia"){fext_CC("bud.NotaBS").bns_Siaf({comp:_p,mi:_mi});}
	else if(_TE=="Fas"){fext_CC("bud.NotaFase").bnf_Printer({comp:_p,mi:_mi});}
	else{fext_CC(_c).bn_View({comp:_p,TE:_TE,mi:_mi,oi:_TE,yi:fext_GV(_p,"year_id")});}
},
bnb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("bud_notab");var _p=_pan.down("#pan");var _d=r[0].data;var _fg=(_d.nota_flga==98?true:"");var _fn=_d.fase_next*1;
	fext_SDO(_p,"btnModify","",2,_fg?true:"");fext_SDO(_p,"btnAnnular","",10,_fg?true:"");fext_SDO(_p,"btnPrinter","",8,_fg?true:"");fext_SDO(_p,"btnSolicita","",1111,_fg||_fn!=311?true:"");fext_SDO(_p,"btnPresup","",1136,_fg||_fn!=336?true:"");fext_SDO(_p,"btnReject","",45,_fg||_fn!=336?true:"");fext_SDO(_p,"btnSiaf","",5005,_fg||_d.fase_id*1!=336?true:"");fext_SDO(_p,"btnFases","",5002);fext_CC("bud.NotasB").bnb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/budget_notas_json_records.php",params:{xxNota_key:_d.nota_key,xxType_record:"win",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _mod=fext_CM("bud.NotaW");if(_res.success&&_res.data.length==1){_mod.set(_res.data[0]);}fext_LR(_pan.down("#tabBNTF"),_mod);}});
}}
});