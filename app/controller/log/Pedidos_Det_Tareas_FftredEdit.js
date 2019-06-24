Ext.define("Siace.controller.log.Pedidos_Det_Tareas_FftredEdit",{extend:"Ext.app.Controller",views:["log.Pedidos_Det_Tareas_FftredEdit"],
init:function(application){this.control({
"log_peddettareafteedit":{beforeshow:this.lpdtfe_BeforeShow},"log_peddettareafteedit #btnExit":{click:this.lpdtfe_btnExitClick},"log_peddettareafteedit #btnAdd":{click:this.lpdtfe_btnAddClick},"log_peddettareafteedit #btnDelete":{click:this.lpdtfe_btnDeleteClick},
"log_peddettareafteedit #fftr_id":{change:this.lpdtfe_fftr_idChange},"log_peddettareafteedit #grdLPDTF":{selectionchange:this.lpdtfe_grdLPDTFSelectionChange},
});},
lpdtfe_BeforeShow:function(comp,opt){var _mi=comp.getMenuId();var _TE=comp.getTypeEdit();var _ak=comp.down("#area").getValue();var _mei=comp.down("#meta").getValue()*1;var _tk=comp.down("#tarea").getValue();var _ft=comp.down("#fftr").getValue();var _grd=comp.down("grid");comp.down("#btnSave").disable();comp.down("#btnUndo").disable();comp.down("#btnExit").enable();
	if(_TE==1){var _icon="icon_New_90";}else if(_TE==2){var _icon="icon_Modify_90";}else{var _icon="icon_Query_90";}comp.setIconCls(_icon);
	fextbud_tareasAMParameters({panel:comp,doc_id:501,dt:"U1",doc_estado:1,menu_id:_mi,type_record:"combo_codename",order_by:"meta_codename",add_blank:"NO"});fextbud_tareasATParameters({panel:comp,doc_id:501,dt:"U1",doc_estado:1,menu_id:_mi,type_record:"combo_codename",order_by:"tarea_codename",add_blank:"NO"});fextbud_tareas_fftredParameters({panel:comp,objeto:comp.down("#fftr_id"),type_query:"T_FF_TR",order_by:"fftr_codename"});
	fextpub_areasFilter({objeto:comp.down("#area_key"),area_key:_ak,value:comp.down("#area").getValue(),no_usk:"NoT",type_record:"combo",disabled:(fext_IE(comp.down("#area"))?false:true)});
	fextbud_tareasAMLoad({panel:comp,meta_id:_mei,ak:_ak,disabled:_mei>0?true:false});
	fextbud_tareasATLoad({panel:comp,tarea_key:_tk,ak:_ak,meta_id:_mei,disabled:Ext.isEmpty(_tk)?false:true});

	if(!Ext.isEmpty(_tk)){comp.down("#fftr_id").getStore().load({params:{xxTarea_key:_tk},callback:function(rec,oper,succ){}});}
	var _str=Ext.create("Siace.store.log.Pedidos_Det_Tareas_FftredEdit",{listeners:{update:function(str,rec,oper){var _m=0;str.each(function(r){_m+=r.data.peddettareafte_pretot;});comp.down("#monto").setValue(_m);comp.down("#saldo").setValue(comp.down("#peddet_pretot").getValue()-_m);}}});
	var _ce=Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1,listeners:{edit:function(editor,e,opt){}}});_ce.init(_grd);_grd.bindStore(_str);

	var _rec=[];var _m=0;comp.getCallStore().each(function(r){_rec.push(r.copy());_m+=_r.data.peddettareafte_pretot});comp.down("grid").getStore().add(_rec);
	comp.down("#saldo").setValue(comp.down("#peddet_pretot").getValue()*1-_m);comp.down("#monto").setValue(_m);
},
lpdtfe_btnExitClick:function(btn,e,opt){var _w=btn.up("window");if(!fjsIn_array(_w.getTypeEdit(),[1,2,12])){_w.close();return false;}var _close=true;
	fext_CC("log.PedidosEBC").lpe_tlp_grdLPDTFAdd(_w.getCallWindow(),_w.down("grid").getStore(),_w.down("#peddet_item").getValue());_w.close();
},
lpdtfe_btnAddClick:function(btn,e,opt){var _w=btn.up("window");var _str=_w.down("grid").getStore();var _f=false;
	if(fext_IE(_w.down("#area_key"))){fext_MsgA("Debe indicar la Unidad Orgánica");return false;}if(fext_IE(_w.down("#tarea_key"))){fext_MsgA("Debe indicar la Tarea Funcional");return false;}if(fext_IE(_w.down("#fftr_id"))){fext_MsgA("Debe indicar la Tarea Funcional");return false;}if(_w.down("#pretot").getValue()*1<=0){fext_MsgA("Debe indicar el importe",_w.down("#pretot"));return false;}
	if(_w.down("#pretot").getValue()*1>_w.down("#saldo").getValue()*1){fext_MsgA("Importe a agregar no puede ser mayor a: "+fjsFormatNumeric(_w.down("#saldo").getValue(),2),_w.down("#pretot"));return false;}
	_str.each(function(rec){var _d=rec.data;if(_d.area_key==_w.down("#area_key").getValue()&&_d.tareafte_key==_w.down("#tareafte_key").getValue()){_f=true;}});
	if(!_f){var _o=_w.down("#peddettareafre_item");_o.setValue(_o.getValue()*1 + 1);
		_str.add({peddet_id:_w.down("#peddet_id").getValue(),peddettareafte_item:_o.getValue(),peddettareafte_pretot:_w.down("#pretot").getValue(),area_key:_w.down("#area_key").getValue(),tareafte_key:_w.down("#tareafte_key").getValue(),area_nombre:_w.down("#area_key").getRawValue(),secfunc_nombre:_w.down("#meta_id").getRawValue().substr(7),tarea_codigo:_w.down("#tarea_key").getRawValue(),fftr_codigo:_w.down("#fftr_id").getRawValue().substr(0,5)});
		this.lpdtfe_montoUpdate(_w,_w.down("#pretot").getValue());
	}
},
lpdtfe_btnDeleteClick:function(btn,e,opt){var _w=btn.up("window");var _rec=fext_grdSR(_w.down("#grdLPDTF"));if(!_rec){return false;}btn.disable();_w.down("#grdLPDTF").getStore().remove(_rec);this.lpdtfe_montoUpdate(_w,_rec.data.peddettareafte_pretot*(-1));},
lpdtfe_fftr_idChange:function(cbo,newVal,oldVal,opt){var _w=cbo.up("window");_w.down("#tareafte_key").setValue("");_w.down("#presup").setValue(0);
	if(!fext_IE(_w.down("#tarea_key"))&&!Ext.isEmpty(newVal)){Ext.Ajax.request({method:"POST",url:"php/budget_tareas_fftred_json_records.php",params:{xxTarea_key:_w.down("#tarea_key").getValue(),xxFuefin_id:newVal.substr(0,3),xxTiprecur_id:newVal.substr(4),xxEspedet_id:_w.down("#espedet").getValue(),xxType_record:"search_balance",xxOrder_by:"tareafte_key",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success&&_res.data.length==1){_w.down("#tareafte_key").setValue(_res.data[0].tareafte_key);_w.down("#presup").setValue(_res.data[0].tareafte_saldo);}}});}
},
lpdtfe_grdLPDTFSelectionChange:function(mod,rec,opt){if(rec.length==1){var _w=mod.view.panel.up("window");if(fjsIn_array(_w.getTypeEdit(),[1,2])){_w.down("#btnDelete").enable();}}},
lpdtfe_montoUpdate:function(poC,pnP){poC.down("#monto").setValue(poC.down("#monto").getValue()*1 + pnP*1);poC.down("#saldo").setValue(poC.down("#peddet_pretot").getValue()*1-poC.down("#monto").getValue()*1);},
});