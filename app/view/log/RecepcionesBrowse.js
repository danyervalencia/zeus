Ext.define('Siace.view.logistics.RecepcionesBrowse',{extend:'Siace.view.PanelBrowse',alias:['widget.logistics_recepcionesbrowse'],layout:{type:'hbox'},
items:[
{xtype:'panel',itemId:'panLR',layout:{type:'fit'},height:'100%',width:'62%',
 items:[
	{xtype:'component_grid',itemId:'grdLR',
	 columns:[
		{xtype:'rownumberer',width:30},
		{dataIndex:'recep_documento',text:'Documento',width:100},
		{dataIndex:'recep_fecha',text:'Fecha',align:'center',renderer:Ext.util.Format.dateRenderer('d/m/Y'),width:85},
		{dataIndex:'recep_fecharec',text:'Recibido',align:'center',renderer:Ext.util.Format.dateRenderer('d/m/Y'),width:85},
		{dataIndex:'tablex_documento',text:'Procedencia',width:100},
		{dataIndex:'area_abrev',text:'U.O.',tooltip:'UnidadOrgánica',width:60},
		{dataIndex:'tarea_codigo',text:'Tarea',align:'center',width:70},
		{dataIndex:'',text:'Co',tooltip:'Componente',width:40},
		{dataIndex:'fftr_codigo',text:'FF',width:45},
		{dataIndex:'pers_nombre',text:'Proveedor',width:300},
		{dataIndex:'tipprocreg_abrev',text:'Tipo',width:40},
		{dataIndex:'recep_monto',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90}
	 ]
	}
 ],
 dockedItems:[
	{xtype:'toolbar',dock:'top',layout:'hbox',padding:'1 0 3 2',ui:'footer',
	 items:[
		{xtype:'component_combo',itemId:'opc_id',valueField:'opc_id',disabled:true,hidden:true,},
		{xtype:'component_combotop',itemId: 'year_id', store: 'array.Years', valueField: 'year_id', displayField: 'year_nro', fieldLabel: '&nbsp;Año', listConfig:{cls:'item00001',minWidth: 60},tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>',width: 60},
		{xtype:'component_combotop',itemId:'doc_id',valueField:'doc_id',displayField:'doc_abrev',fieldLabel:'&nbsp;Doc.',tpl:'<tpl for="."><div class="x-boundlist-item">{doc_abrev}&nbsp;</div></tpl>',listConfig:{cls:'item00001',minWidth:45},value:0,width:50},
		{xtype:'component_textfieldtop',itemId:'recep_serie',fieldLabel:'&nbsp;Serie',maxLength:4,vtype:'onlyNumeric',width:40},
		{xtype:'component_textfieldtop',itemId:'recep_nro',fieldLabel:'&nbsp;Número',maxLength:8,vtype:'onlyNumeric',width:65},
		{xtype:'component_datefieldtop',itemId:'fechaini',fieldLabel:'&nbsp;FechaInicial',endDateField:'fechafin',vtype:'daterange'},
		{xtype:'component_datefieldtop',itemId:'fechafin',fieldLabel:'&nbsp;FechaFinal',startDateField:'fechaini',vtype:'daterange'},	
		{xtype:'component_combotop',itemId:'area_key',valueField:'area_key',displayField:'area_abrev',fieldLabel:'&nbsp;U.O.',tpl:'<tpl for="."><div class="x-boundlist-item">{area_abrev}&nbsp;</div></tpl>',width:75},
		{xtype:'component_combotop',itemId:'meta_id',valueField:'meta_id',displayField:'meta_code',fieldLabel:'&nbsp;Meta',listConfig:{cls:'item00001',minWidth:400},tpl:'<tpl for="."><div class="x-boundlist-item">{meta_code}&nbsp;&nbsp;{meta_nombre}</div></tpl>',width:60},
		{xtype:'component_combotop',itemId:'tarea_key',valueField:'tarea_key',displayField:'tarea_codigo',fieldLabel:'&nbsp;Tarea',listConfig:{cls:'item00001',minWidth:500},tpl:'<tpl for="."><div class="x-boundlist-item">{tarea_codigo}&nbsp;&nbsp;{tarea_nombre}</div></tpl>',width:80},
		{xtype:'fieldcontainer',fieldLabel:'&nbsp;Proveedor',labelAlign:'top',layout:'hbox',
		 items: [
			{xtype:'hiddenfield',itemId:'pers_key',},{xtype:'hiddenfield',itemId:'PERS_RUC'},
			{xtype:'component_textfieldtop',itemId:'pers_ruc',enableKeyEvents:true,maxLength:11,width:90},
			{xtype:'component_button_imagesearch',itemId:'btnPers_search'},
			{xtype:'displayfield',itemId:'pers_nombre',hidden:true,fieldCls:'df00101'}
		 ]
		}
	 ]
	},
	{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'component_buttonNew'},{xtype:'component_buttonModify'},{xtype:'component_buttonQuery'},{xtype:'component_buttonDelete'},{xtype:'component_buttonPrinter'}]},
	{xtype:'component_pagingtoolbar',itemId:'pagLR'}
 ],
},
{xtype:'panel',border:false,height:'100%',width: '2%'},
{xtype:'tabpanel',itemId:'tab01',height:'100%',plain:true,width:'36%',
 items: [
	{xtype:'panel',itemId:'tabLRD',height:'100%',layout:{type:'fit'},title:'Detalle',
	 items: [
		{xtype:'component_grid',itemId:'grdLRD',
		 columns: [
			{xtype:'rownumberer',width:30},
			{dataIndex:'bs_codigo',text:'Código',width:105},
			{dataIndex:'bs_nombre',text:'Descripción',width:300},
			{dataIndex:'unimed_nombre',text:'U.M.',width:100},
			{dataIndex:'recepdet_cantid',text:'Cantidad',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.000'),width:85},
			{dataIndex:'recepdet_preuni',text:'P.U.',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.0000'),width:90},
			{dataIndex:'recepdet_pretot',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90},
		 ]
		}
	 ],
	 dockedItems: [
		{xtype:'toolbar',dock:'top',layout:'vbox',padding:'1 0 3 2',ui:'footer',
		 items: [
			{xtype:'container',layout:'hbox',width:'100%',defaults:{padding:'-4 0 -2 2'}, 
			 items: [
				{xtype:'displayfield',itemId:'recep_documento',fieldLabel:'Documento',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:65,width:165},
				{xtype:'displayfield',width:40},
				{xtype:'displayfield',itemId:'recep_fecha',fieldLabel:'Fecha',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:40},
			 ]
			},
			{xtype:'displayfield',itemId:'area_nombre',fieldLabel:'U. Orgánica',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:65,padding:'-4 0 -2 2'},
			{xtype:'displayfield',itemId:'meta_codename',fieldLabel:'Meta SIAF',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:65,padding:'-4 0 -2 2'},
			{xtype:'displayfield',itemId:'tarea_codename',fieldLabel:'Tarea',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:65,padding:'-4 0 -2 2'},
		 ]
		},
		{xtype:'component_pagingtoolbar',itemId:'pagLRD',disabled:true}
	 ]
	},
	{xtype:'panel',itemId:'tabLC',height:'100%',hidden:true,layout:{type:'fit'},title:'Registro de Compras',
	 items:[
		{xtype:'component_grid',itemId:'grdLC',
		 columns:[
			{xtype:'rownumberer',width:30},
			{dataIndex:'compr_documento',text:'Documento',width:75},
			{dataIndex:'compr_fecha',text:'Fecha',align:'center',width:85,renderer:Ext.util.Format.dateRenderer('d/m/Y')},
			{dataIndex:'pers_ruc',text:'RUC',width:90},
			{dataIndex:'pers_nombre',text:'RazónSocial',width:300},
			{dataIndex:'compr_monto',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90},
		 ]
		}
	 ],
	 dockedItems:[
		{xtype:'hiddenfield',itemId:'menu_id',disabled:true,value:5123},{xtype:'component_comboopc'},
		{xtype:'toolbar',dock:'top',layout:'vbox',padding:'1 0 3 2', ui:'footer',
		 items: [
			{xtype:'container',layout:'hbox',width:'100%',defaults:{padding:'-4 0 -2 2'},
			 items: [
				{xtype:'displayfield',itemId:'recep_documento',fieldLabel:'Documento',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:80,width:150},
				{xtype:'displayfield',width:40,},
				{xtype:'displayfield',itemId:'recep_fecha',fieldLabel:'Fecha',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:40},
			 ]
			},
			{xtype:'displayfield',itemId:'area_nombre',fieldLabel:'U.Orgánica',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:80,padding:'-4 0 -2 2'},
			{xtype:'displayfield',itemId:'meta_codename',fieldLabel:'MetaSIAF',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:80,padding:'-4 0 -2 2'},
			{xtype:'displayfield',itemId:'tarea_codename',fieldLabel:'Tarea',fieldCls:'df00104',labelClsExtra:'lbl00101',labelWidth:80,padding:'-4 0 -2 2'},
		 ]
		},
		{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'component_buttonQuery'}]},
		{xtype:'component_pagingtoolbar',itemId:'pagLC',disabled:true},
	 ]
	}
 ]
}]
});