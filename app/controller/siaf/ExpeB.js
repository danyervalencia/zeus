Ext.define("Siace.controller.siaf.ExpeB",{extend:"Ext.app.Controller",
seb_btn:function(btn){var _p=btn.up("#pan");var _TE=fext_btnTE(btn);fext_CC("bud.Proyectos").bm_View({comp:_p,TE:_TE,mi:_p.up("bud_proyb").getMI()});},
seb_sc:function(mod,r){if(r.length==1){var _pan=mod.view.up("siaf_expeb");var _p=_pan.down("#pan");fext_CC("siaf.ExpedientesB").seb_tabsClean(_pan,false);
	Ext.Ajax.request({method:"POST",url:"php/siaf_expedientes_json_records.php",params:{xxYear_id:r[0].data.year_id,xxExpe_nro:r[0].data.expe_nro,xxType_record:"win",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);var _md=fext_CM("siaf.ExpedienteW");if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}fext_LR(_pan,_md,"tabSF");}});
}}
});