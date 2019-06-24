Ext.define("Siace.controller.log.ValorizacionesE",{extend:"Ext.app.Controller",stores:["array.DocProcValAB","array.Years"],views:["log.ValorizacionesE"],
init: function(application){this.control({
"log_valrze":{beforeshow:this.lve_BS},"log_valrze #btnSave":{click:this.lve_btnSav},"log_valrze #btnUndo":{click:this.lve_btnExt},"log_valrze #btnExit":{click:this.lve_btnExt},
"log_valrze #btnAdd":{click:this.lve_btnAddClick},"log_valrze #btnSuppress":{click:this.lve_btnSup},
"log_valrze #tablex_key":{change:this.lve_tablex_keyChange},
"log_valrze #grdLVD":{selectionchange:this.lve_grdSelChg},
});},
lve_BS:function(comp,opt){var _TE=comp.getTE();fext_CC("log.ValrzE0"+_TE).lve(comp);},
lve_btnSav:function(btn,e,o){fext_CC("log.ValrzES").lve(btn);},
lve_btnExt:function(btn,e,o){btn.up("window").close();},
lve_btnSup:function(btn,e,o){var _w=btn.up("window");var _r=fext_grdSR(_w,"grdLVD");if(!_r){return false;}btn.disable();fext_GS(_w,"grdLVD").remove(_r);this.lve_valrz_montoUpdate(_w,_r.data.valrzdet_pretot*(-1));},
lve_tablex_keyChange:function(cbo,newV,oldV,o){var _w=cbo.up("window");var _md=fext_CM("log.OrdenWLVE");
	Ext.Ajax.request({method:"POST",url:"php/logistics_ordenes_json_records.php",params:{xxOrden_key:newV,xxType_record:"winLVE",xxOrder_by:"orden_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,o){var _res=fext_DJ("",resp);if(_res.success&&_res.data.length==1){_md.set(_res.data[0]);}_w.down("form").loadRecord(_md);
			fext_GS(_w,"grdLVD").load({params:{xxTablex:5030,xxTablex_key:newV,xxType_record:"winLVE",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},callback:function(r){var _m=0; for(var _i=0;_i<r.length;_i++){_m+=r[_i].data.valrzdet_pretot*1;}fext_SV(_w,"valrz_monto",_m);}});
		}
	});
},
lve_grdSelChg:function(mod,r,o){var _w=mod.view.up("window");if(r.length==1&&fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}},
lve_valrz_montoUpdate:function(poC,pnP){fext_SV(poC,"valrz_monto",fext_GV(poC,"valrz_monto")*1 + pnP*1);}
});