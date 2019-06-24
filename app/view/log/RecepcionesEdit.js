Ext.define('Siace.view.logistics.RecepcionesEdit',{extend:'Siace.view.WindowEdit',alias:'widget.logistics_recepcionesedit',width:930,
items:[
{xtype:'form',bodyPadding:8,border:true,layout:{type:'vbox'},
 items:[
	{xtype:'panel',border:false,layout:{type:'hbox'},width:'100%',
	 items:[
		{xtype:'panel',border:false,defaults:{labelWidth:65},layout:{type:'vbox'},width:600,
		 items:[
			{xtype:'hiddenfield',itemId:'tablex',name:'tablex'},{xtype:'hiddenfield',itemId:'tablex_key',name:'tablex_key'},
			{xtype:'component_combo',itemId:'year_id',store:'array.Years',valueField:'year_id',hidden:true,displayField:'year_code'},
			{xtype:'fieldcontainer',fieldLabel:'OrdenNro.',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',
			 items:[
				{xtype:'component_combotop',itemId:'tablex_doc',store:'array.DocumentosOrden',valueField:'doc_id',displayField:'doc_nombre',width:160},
				{xtype:'component_combotop',itemId:'tablex_tipgast',valueField:'tabgen_id',displayField:'tabgen_code',listConfig:{cls:'item00001',minWidth:40},tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_code}&nbsp;</div></tpl>',width:40},
				{xtype:'component_combotop',itemId:'tablex_mes',store:'array.Meses',valueField:'mes_id',displayField:'mes_code',listConfig:{cls:'item00001',minWidth:45},tpl:'<tpl for="."><div class="x-boundlist-item">{mes_code}&nbsp;</div></tpl>',value:0,width:45},
				{xtype:'hiddenfield',itemId:'TABLEX_NRO'},
				{xtype:'component_textfieldtop',itemId:'tablex_nro',align:'center',maxLength:5,vtype:'onlyNumeric',width:70},
				//{xtype: 'displayfield', flex: 1, },
				//{	xtype: 'component_combo', itemId: 'tipped_id', valueField: 'tabgen_id', displayField: 'tabgen_nombre', fieldLabel: 'Tipo', labelWidth: 40, width: 130, },
			 ]
			},
			{xtype:'component_combo',itemId:'area_key',valueField:'area_key',displayField:'area_nombre',disabled:true,fieldLabel:'U.Orgánica',width:'100%'},
			{xtype:'component_combo',itemId:'meta_id',valueField:'meta_id',displayField:'meta_codename',disabled:true,fieldLabel:'MetaSIAF',width:'100%'},
			{xtype:'component_combo',itemId:'tarea_key',valueField:'tarea_key',displayField:'tarea_codename',disabled:true,fieldLabel:'Tarea',width:'100%'},
			{xtype:'component_combo',itemId:'tareacomp_key',valueField:'tareacomp_key',displayField:'tareacomp_nombre',disabled:true,fieldLabel:'Comp.',width:'100%'},
			{xtype:'component_combo',itemId:'fftr_id',valueField:'fftr_id',displayField:'fftr_codename',disabled:true,fieldLabel:'Fue.Fin.',width:'100%'},
			{xtype:'fieldcontainer',fieldLabel:'Proveedor',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',
			items:[
				{xtype:'hiddenfield',itemId:'pers_key',},{xtype:'hiddenfield',itemId:'PERS_RUC'},
				{xtype:'component_textfieldtop',itemId:'pers_ruc',disabled:true,enableKeyEvents:true,maxLength:11,submitValue:false},
				{xtype:'component_button_imagesearch',itemId:'btnPers_search',disabled:true},
				{xtype:'displayfield',itemId:'pers_nombre',fieldCls:'df00101'},
			 ]
			},
		 ]
		},
		{xtype:'displayfield',flex:1},
		{xtype:'container',layout:{type:'vbox'},width:250,
		 items: [
			{xtype:'fieldset',defaults:{labelWidth:65},layout:{type:'vbox'},padding:'2 8 4 8',title:' Recepción ',width:'100%',
			 items:[
				{xtype:'component_combo',itemId:'doc_id',name:'doc_id',valueField:'doc_id',displayField:'doc_nombre',fieldLabel:'Documento',width:'100%'},
				{xtype:'fieldcontainer',fieldLabel:'Número',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',
				 items:[
					{xtype:'component_textfieldtop',itemId:'recep_serie',name:'recep_serie',align:'center',maxLength:4,vtype:'onlyNumeric',width:60},
					{xtype:'component_textfield',itemId:'recep_nro',name:'recep_nro',align:'center',flex:1,maxLength:8,vtype:'onlyNumeric'},
				 ]
				},										
				{xtype:'component_datefield',itemId:'recep_fecha',name:'recep_fecha',allowBlank:false,fieldLabel:'Fecha',width:165},
				{xtype:'component_datefield',itemId:'recep_fecharec',name:'recep_fecharec',allowBlank:false,fieldLabel:'Recepción',width:165},
			 ]
			},
		 ]
		},
	 ]
	},
	{xtype:'tabpanel',activeTab:0,plain:true,width:'100%',
	 items:[
		{xtype:'panel',itemId:'tabDetalle',title:'Detalle de Recepción',height:200,
		 items: [
			{xtype:'grid',itemId:'grdLRD',columnLines:true,height:200,stripeRows:true,
			 columns:[
			    {xtype:'rownumberer',width:30},
				{dataIndex:'bs_codigo',text:'Código',sortable:false,width:105},
				{dataIndex:'tarea_codigo',text:'Tarea',sortable:false,width:70},
				{dataIndex:'bs_nombre',text:'Descripción',sortable:false,width:380},
				{dataIndex:'unimed_abrev',text:'Unidad',sortable:false,width:50},
				{dataIndex:'recepdet_cantid',text:'Cantid',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.000'),sortable:false,width:85,editor:{xtype:'component_numberfield',allowBlank:false,decimalPrecision:3,maxLength:15,maxValue:999999999,value:''}},
				{dataIndex:'recepdet_preuni',text:'P.Unitario',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00000000'),sortable:false,width:105},
				{dataIndex:'recepdet_pretot',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),sortable:false,width:90},
			 ]
			}
	 	 ]
		},
		{xtype:'panel',itemId:'tabComplementos',title:'Complementarios',bodyPadding:8,height:200,width:'100%',layout:'vbox',
		 items:[{xtype:'component_textarea',itemId:'recep_observ',name:'recep_observ',fieldLabel:'Glosa',labelWidth:65,width:'100%',height:120}],
		}
	 ]
	},
	{xtype:'container',layout:'hbox',width:'100%',
	 items:[
		{xtype:'container',layout:'hbox',width:'100%',margin:'3 0 0 0',
		 items:[
			{xtype:'button',itemId:'btnAdd',text:'Agregar',disabled:true,iconCls:'icon_Add',margin:'0 5', padding:'2 6 2 8'},
			{xtype:'button',itemId:'btnSuppress',text:'Eliminar',disabled:true,iconCls:'icon_Suppress',padding:'2 6 2 8'},
		    {xtype:'displayfield',flex:1},
			{xtype:'component_currencyfield',itemId:'recep_monto',disabled:true,fieldLabel:'Importe',labelWidth:65,value:0,width:160},
		 ]
		}
	 ]
	},
]}],
__noUSK: '',
setNoUsk: function(poNoUSK) { this.__noUSK = poNoUSK; }, getNoUsk: function() { return this.__noUSK; },
});