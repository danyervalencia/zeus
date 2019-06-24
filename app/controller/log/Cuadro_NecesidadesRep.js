Ext.define('Siace.controller.log.Cuadro_NecesidadesRep',{extend:'Ext.app.Controller',stores:['array.BstAB'],views:['log.Cuadro_NecesidadesRep'],
init:function(application){this.control({
'log_cuanecrep':{beforerender:this.lcnr_BeforeRender},'log_cuanecrep #panLCN #btnPdf':{click:this.lcnr_plcn_btnPdfClick},'log_cuanecrep #panLCN #btnExcel':{click:this.lcnr_plcn_btnExcelClick},
'log_cuanecrep #panLCN #area_key':{change:this.lcnr_plcn_area_keyChange},
'log_cuanecrep #panLCN #bsc_id':{change:this.lcnr_plcn_bsc_idChange},'log_cuanecrep #panLCN #bsf_id':{change:this.lcnr_plcn_bsf_idChange},'log_cuanecrep #panLCN #bsg_id':{change:this.lcnr_plcn_bsg_idChange},'log_cuanecrep #panLCN #bst_id':{change:this.lcnr_plcn_bst_idChange},
//'log_cuanecrep #panLCN #year_id': { change: this.lcnr_plcn_year_idChange, },
});},
lcnr_BeforeRender:function(comp,opt){var _menu_id=comp.getMenuId(); var _panLCN=comp.down('#panLCN'); var _otr=_panLCN.down('#type_record');
	fextpub_yearsValue(_panLCN.down('#year_id'),0);
	var _str=Ext.create('Ext.data.Store',{fields:[{name:'typrec_id',type:'string'},{name:'typrec_nombre',type:'string'}],
		data:[{typrec_id:'REPORT',typrec_nombre:'Cuadro Necesidades'},{typrec_id:'REPORT_DETGEN',typrec_nombre:'Detalle General Cuadro de Necesidades'},{typrec_id:'REPORT_DETBSG',typrec_nombre:'Detalle General x Grupo'},{typrec_id:'REPORT_DETESPEDET',typrec_nombre:'Detalle General x Clasificador'},{typrec_id:'REPORT_DETCON',typrec_nombre:'Detalle Consolidado Cuadro de Necesidades'}]
	});
	//fextlog_fasesFilter({'objeto':_panLCN.down('#fase_id'),'doc_id':'501','fase_type':'1','type_record':'combo','type_query':'combo_pedidos_browse'});
	//var _strF=Ext.create('Ext.data.Store',{fields:[{name:'filt',type:'string'},{name:'code',type:'string'}],data:[{filt:'',code:''},{filt:'=',code:'='},{filt:'<=',code:'<='},{filt:'>=',code:'>='}]});
	//var _cboF=_panLCN.down('#filter'); _cboF.bindStore(_strF); _strF.load({callback:function(rec,oper,succ){_cboF.setValue('>=');}});

	_otr.bindStore(_str); _otr.getStore().load({callback:function(rec,oper,succ){_otr.setValue('REPORT');}});
	fextpub_areasFilter({'objeto':_panLCN.down('#area_key'),'filter':false,'menu_id':_menu_id,'type_record':'combo'});
},
lcnr_ViewReport:function(poComp,pcOpc_id){var _vs=fextpub_sessionVariables(); var _pan=poComp.up("log_cuanecrep"); var _menu_id=_pan.getMenuId(); var _tr=poComp.down('#type_record').getValue(); var _year_id=poComp.down('#year_id').getValue()*1;	
	var _area_key=poComp.down('#area_key').getValue();
	var _bst_id=poComp.down('#bst_id').getValue()*1; var _bsg_id=poComp.down('#bsg_id').getValue()*1; var _bsc_id=poComp.down('#bsc_id').getValue()*1; var _bsf_id=poComp.down('#bsf_id').getValue()*1;
	var _param='&xxYear_id='+_year_id+'&xxArea_key='+(Ext.isEmpty(_area_key)?"":_area_key)+'&xxArea_nombre='+poComp.down("#area_key").getRawValue();
	var _sess='&zzUsursess_key='+_vs['us']+'&zzUsuracce_key='+_vs['ua']+'&zzYear_id='+_vs['y']+'&zzArea_key='+_vs['a']+"&xxMenu_id="+_menu_id+"&xxOpc_id="+pcOpc_id;
	
	if(fjsIn_array(_tr,['REPORT'])){var _title="Reporte Actividades POI"; 
		//fext_pdf('', _title, 'php/pdf/pdf_budget_actividades_report.php?xxType_record='+_tr+_param+_sess);
	}else if(fjsIn_array(_tr,['REPORT_DETGEN'])){var _title=(_tr=="REPORT_DETGEN"?"Reporte Det-Gen-Cuadro":"Reporte Req-Orden-Recep");
		fext_pdf('', _title, 'php/pdf/pdf_logistics_cuadro_necesidades_det_report_general.php?xxType_record='+_tr+_param+_sess);
	}else if(fjsIn_array(_tr,['REPORT_DETBSG'])){var _title=(_tr=="REPORT_DETBSG"?"Reporte Det-Gen-Cuadro":"Reporte Req-Orden-Recep");
		fext_pdf('', _title, 'php/pdf/pdf_logistics_cuadro_necesidades_det_report_grupo.php?xxType_record='+_tr+_param+_sess);
	}else if(fjsIn_array(_tr,['REPORT_DETESPEDET'])){var _title=(_tr=="REPORT_DETESPEDET"?"Reporte Det-Clasificador":"Reporte Req-Orden-Recep");
		fext_pdf('', _title, 'php/pdf/pdf_logistics_cuadro_necesidades_det_report_espedet.php?xxType_record='+_tr+_param+_sess);
	}else if(fjsIn_array(_tr,['REPORT_DETCON'])){var _title="Reporte Det-Cons-Cuadro";
		fext_pdf('', _title, 'php/pdf/pdf_logistics_cuadro_necesidades_det_report_consolidado.php?xxType_record='+_tr+_param+_sess);
	}
},
lcnr_plcn_btnPdfClick:function(btn,e,opt){this.lcnr_ViewReport(btn.up('#panLCN'),'32');},
lcnr_plcn_btnExcelClick:function(btn,e,opt){this.lcnr_ViewReport(btn.up('#panLCN'),'33');},
lcnr_plcn_area_keyChange:function(cbo,newVal,oldVal,opt){},
lcnr_plcn_bsc_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextpub_bienes_servs_familiasLoad({'panel': cbo.up('#panLCN')})}},
lcnr_plcn_bsf_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){}},
lcnr_plcn_bsg_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextpub_bienes_servs_clasesLoad({'panel':cbo.up('#panLCN')});}},
lcnr_plcn_bst_idChange:function(cbo,newVal,oldVal,opt){if(oldVal!==undefined){fextpub_bienes_servs_gruposLoad({'panel':cbo.up('#panLCN')});}},
});