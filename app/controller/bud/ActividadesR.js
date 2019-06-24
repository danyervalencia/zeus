Ext.define('Siace.controller.bud.ActividadesRep',{extend:'Ext.app.Controller',stores:['array.BstAB'],views:['bud.ActividadesRep'],
init:function(application){this.control({
'bud_activrep':{beforerender:this.bar_BeforeRender},'bud_activrep #panBA #btnPdf':{click:this.bar_plp_btnPdfClick},'bud_activrep #panBA #btnExcel':{click:this.bar_plp_btnExcelClick},
'bud_activrep #panBA #area_key':{change:this.bar_plp_area_keyChange},
'bud_activrep #panBA #bsc_id':{change:this.bar_plp_bsc_idChange},'bud_activrep #panBA #bsf_id':{change:this.bar_plp_bsf_idChange},'bud_activrep #panBA #bsg_id':{change:this.bar_plp_bsg_idChange},'bud_activrep #panBA #bst_id':{change:this.bar_plp_bst_idChange},
//'bud_activrep #panBA #year_id': { change: this.bar_plp_year_idChange, },
});},
bar_BeforeRender:function(comp,opt){var _menu_id=comp.getMenuId(); var _panBA=comp.down('#panBA'); var _otr=_panBA.down('#type_record');
	fextpub_yearsValue(_panBA.down('#year_id'),0);
	var _str=Ext.create('Ext.data.Store',{fields:[{name:'typrec_id',type:'string'},{name:'typrec_nombre',type:'string'}],
		data:[{typrec_id:'REPORT',typrec_nombre:'Actividades'},{typrec_id:'REPORT_TAREA',typrec_nombre:'Actividades - Tareas'},{typrec_id:'REPORT_TAREA_CUANEC',typrec_nombre:'Actividades - Tareas - Cuadro Necesidades'}]
	});
	//fextlog_fasesFilter({'objeto':_panBA.down('#fase_id'),'doc_id':'501','fase_type':'1','type_record':'combo','type_query':'combo_pedidos_browse'});
	//var _strF=Ext.create('Ext.data.Store',{fields:[{name:'filt',type:'string'},{name:'code',type:'string'}],data:[{filt:'',code:''},{filt:'=',code:'='},{filt:'<=',code:'<='},{filt:'>=',code:'>='}]});
	//var _cboF=_panBA.down('#filter'); _cboF.bindStore(_strF); _strF.load({callback:function(rec,oper,succ){_cboF.setValue('>=');}});

	_otr.bindStore(_str); _otr.getStore().load({callback:function(rec,oper,succ){_otr.setValue('REPORT');}});
	fextpub_areasFilter({'objeto':_panBA.down('#area_key'),'filter':false,'menu_id':_menu_id,'type_record':'combo'});
},
bar_ViewReport:function(poComp,pcOpc_id){var _vs=fextpub_sessionVariables(); var _pan=poComp.up("bud_activrep"); var _menu_id=_pan.getMenuId(); var _tr=poComp.down('#type_record').getValue(); var _year_id=poComp.down('#year_id').getValue()*1;	
	var _area_key=poComp.down('#area_key').getValue();
	var _bst_id=poComp.down('#bst_id').getValue()*1; var _bsg_id=poComp.down('#bsg_id').getValue()*1; var _bsc_id=poComp.down('#bsc_id').getValue()*1; var _bsf_id=poComp.down('#bsf_id').getValue()*1;
	var _param='&xxYear_id='+_year_id+'&xxArea_key='+(Ext.isEmpty(_area_key)?"":_area_key)+'&xxArea_nombre='+poComp.down("#area_key").getRawValue();
	var _sess='&zzUsursess_key='+_vs['us']+'&zzUsuracce_key='+_vs['ua']+'&zzYear_id='+_vs['y']+'&zzArea_key='+_vs['a']+"&xxMenu_id="+_menu_id+"&xxOpc_id="+pcOpc_id;
	
	if(fjsIn_array(_tr,['REPORT'])){var _title="Reporte Actividades POI"; 
		fext_pdf('', _title, 'php/pdf/pdf_budget_actividades_report.php?xxType_record='+_tr+_param+_sess);
	}else if(fjsIn_array(_tr,['REPORT_ORDEN','REPORT_ORDEN_RECEP'])){var _title=(_tr=="REPORT_ORDEN"?"Reporte Req-Orden":"Reporte Req-Orden-Recep");
		//fext_pdf('', _title, 'php/pdf/pdf_logistics_pedidos_report_orden.php?xxType_record='+_tr+_param+_sess);
	}else if(fjsIn_array(_tr,['REPORT_TAREA_CUANEC'])){var _title="Reporte Activ - Tarea - C.N."; 
		fext_pdf('', _title, 'php/pdf/pdf_budget_actividades_report_tarea_cuanec.php?xxType_record='+_tr+_param+_sess);
	}
},
bar_plp_btnPdfClick:function(btn,e,opt){this.bar_ViewReport(btn.up('#panBA'),'32');},
bar_plp_btnExcelClick:function(btn,e,opt){this.bar_ViewReport(btn.up('#panBA'),'33');},
bar_plp_area_keyChange:function(cbo,newVal,oldVal,opt){},
bar_plp_bsc_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextpub_bienes_servs_familiasLoad({'panel': cbo.up('#panBA')})}},
bar_plp_bsf_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){}},
bar_plp_bsg_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextpub_bienes_servs_clasesLoad({'panel':cbo.up('#panBA')});}},
bar_plp_bst_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextpub_bienes_servs_gruposLoad({'panel':cbo.up('#panBA')});}},
});