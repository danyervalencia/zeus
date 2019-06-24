Ext.define("Siace.controller.pub.BSCBT3B",{extend:"Ext.app.Controller",
pbscb:function(btn){var _t=btn.up("#tabCO");var _TE=fext_btnTE(btn);var _pan=_t.up("pub_bscb").down("#panC");
	if(_TE=="Del"){ext_CC("pub.BSCMarcBD").pbscm({comp:btn.up("#tabM"),TE:7});}else{var _r=fext_grdSR(_pan,"");if(!_r){return false;}fext_CC("pub.BSCMarc").pbscm_View({comp:_t,TE:_TE,bsc_id:_r.data.bsc_id});}


pbscb_t3_View:function(poC,pcTE){ext_CC("pub.BSCCompl").pbscc_View({comp:poC,TE:pcTE,grd:"grdM"});},
pbscb_t3_btnAddClick:function(btn,e,opt){this.pbscb_t3_View(btn.up("#tabCO"),13);},
pbscb_t3_btnModifyClick:function(btn,e,opt){this.pbscb_t3_View(btn.up("#tabCO"),2);},
pbscb_t3_btnQueryClick:function(btn,e,opt){this.pbscb_t3_View(btn.up("#tabCO"),3);},
pbscb_t3_btnDeleteClick:function(btn,e,opt){ext_CC("pub.BSCCompl").pbscc_Delete({comp:btn.up("#tabCO"),TE:7,grd:"grdCO"});},


}
});