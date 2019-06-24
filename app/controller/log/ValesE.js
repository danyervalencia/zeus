Ext.define("Siace.controller.log.ValesE",{extend:"Ext.app.Controller",stores:["array.DocProcValAB","array.Years"],views:["log.ValesE"],
init: function(application) {this.control({
"log_vale":{beforeshow:this.lve_BS},"log_vale #btnSave":{click:this.lve_btnSav},"log_vale #btnUndo":{click:this.lve_btnExt},"log_vale #btnExit":{click:this.lve_btnExt},"log_vale #btnPIS":{click:this.lve_btnPIS},"log_vale #btnSuppress":{click:this.lve_btnSup},
"log_vale #area_key":{change:this.lve_akChg},"log_vale #grdLVD":{selectionchange:this.lve_grdSelChg},"log_vale #indiv_dni":{blur:this.lve_idBlur,focus:this.lve_idFocus,keypress:this.lve_idKP},
"log_vale #veh_placa":{blur:this.lve_vpBlur,focus:this.lve_vpFocus,keypress:this.lve_vpKP},"log_vale #tablex_key":{change:this.lve_tablex_keyChg},
});},
lve_BS:function(comp,o){var _TE=comp.getTE();var _mi=comp.getMI();comp.down("#cntIndiv").setFieldLabel("Operador");
	fextpub_areasFilt({obj:comp.down("#area_key"),TR:"cbo",filt:false,nuk:(_mi==5170?"NoT":""),mi:_mi,val:(_mi==5171?_vs.a:"")});fextpub_tabgenFilt({obj:comp.down("#motval_id"),tgp:5100,tge:1,OB:"tabgen_orden",AB:"NO",dsb:(_TE==1?false:true)});
	fext_CC("log.ValE0"+_TE).lve(comp);
},
lve_btnSav:function(btn,e,o){fext_CC("log.ValES").lve(btn);},
lve_btnExt:function(btn,e,o){btn.up("window").close();},
lve_btnPIS:function(btn,e,o){var _w=btn.up("window");fext_CC("pub.IndividuosS");_w.setCompPIS(fext_compSearch({cc:_w,os:_w.getCompPIS(),v:"Siace.view.pub.IndividuosS",tit:"Búsqueda de Operador ::.",ck:fext_GV(_w,"indiv_key")}));},
lve_btnSup:function(btn,e,o){var _w=btn.up("window");var _r=fext_grdSR(_w,"grdLVD");if(!_r){return false;}btn.disable();fext_GS(_w,"grdLVD").remove(_r);this.lve_montoUpdate(_w,_r.data.valdet_pretot*(-1));},
lve_akChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(_w.getTE()==1){
	if(newV==""){this.lve_tablexClean(_w,1);}else{fext_GS(_w,"tablex_key").load({callback:function(r){if(r.length>0){fext_SV(_w,"tablex_key","");}else{this.lve_tablexClean(_w,1);}}});}
}},

lve_idBlur:function(txtf,The,o){this.lve_idS(txtf.up("window"),0);},
lve_idFocus:function(txtf,The,o){this.lve_idS(txtf.up("window"),1);},
lve_idKP:function(txtf,e,o){if(e.getCharCode()==13){this.lve_idS(txtf.up("window"),13);}},
lve_idS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search",""],1,["Siace.view.pub.IndividuosE","Nuevo Registro de Identidad ::.",["indiv_dni"],"1","pub.IndividuosE",poCC.getMI()]);},
lve_montoUpdate:function(poC,pnP){fext_SV(poC,"val_monto",fext_GV(poC,"val_monto")*1 + pnP*1);},
lve_tablexClean:function(poC,pnCbo){if(pnCbo==1){fext_GSR(poC,"tablex_key");fext_SV(poC,"tablex_key","");}fext_SV(poC,"","",["tablex_fecha","secfunc_codename","tarea_codename","pers_codename","val_monto"]);fext_GSR(poC,"grdLVD");},
lve_tablex_keyChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(Ext.isEmpty(newV)){this.lve_tablexClean(_w,0);}
	else{var _d=cbo.getStore().findRecord("tablex_key",newV).data;fext_SV(_w,"tablex_fecha",_d.tablex_fecha);fext_SV(_w,"expe_nro",_d.expe_nro);fext_SV(_w,"secfunc_codename",_d.secfunc_codename);fext_SV(_w,"tarea_codename",_d.tarea_codename);fext_SV(_w,"pers_codename",_d.pers_codename);fext_GS(_w,"grdLVD").load({params:{xxTablex:_d.tablex,xxTablex_key:_d.tablex_key},callback:function(r){var _m=0;for(_i=0;_i<r.length;_i++){_m+=r[_i].data.valdet_pretot*1}fext_SV(_w,"val_monto",_m);}});}
},
lve_grdSelChg:function(mod,r,o){var _w=mod.view.up("window");if(r.length==1&&fjsIn_array(_w.getTE(),[1,2])){_w.down("#btnSuppress").enable();}},
lve_vpBlur:function(txtf,e,o){if(txtf.isValid()){this.lve_vpS(0,txtf.up("form"));}},
lve_vpFocus:function(txtf,e,o){this.lve_vpS(1,txtf.up("form"));},
lve_vpKP:function(txtf,e,o){if(txtf.isValid()&&e.getCharCode()==13){this.lve_vpS(13,txtf.up("form"));}},
lve_vpS:function(pcT,poCC){fext_fieldSearch(pcT,poCC,["veh_key","VEH_PLACA","veh_placa","veh_detalle"],["php/public_vehiculos_json_records.php","xxVeh_placa","textfield_search","SOLO_VEHICULOS","","","",""],1,["Siace.view.pub.VehiculosE","Nuevo Vehículo ::.",["veh_serie","veh_nro","-"],"SOLO_VEHICULOS","pub.VehiculosE"]);},
});