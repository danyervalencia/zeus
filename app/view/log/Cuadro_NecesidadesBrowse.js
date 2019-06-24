Ext.define('Siace.view.log.Cuadro_NecesidadesBrowse',{extend:'Siace.view.PanelBrowse',alias:'widget.log_cuanecbrowse',layout:{type:'hbox'},items:[
{xtype:'panel',itemId:'panLCN',layout:{type:'fit'},height:'100%',width:'42%',items:[
	{xtype:'comp_grid',itemId:'grdLCN',viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.cuadnec_flga=='98'?'mx-letra-rojo-bold':'mx-letra-negro';}},
	 columns:[{xtype:'rownumberer',width:30},
		{dataIndex:'cuanec_documento',text:'Documento',width:85},{dataIndex:'cuanec_fecha',text:'Fecha',align:'center',width:80,renderer:Ext.util.Format.dateRenderer('d/m/Y')},
		{dataIndex:'area_abrev',text:'U.O.',width:60},{dataIndex:'tipcuanec_abrev',text:'Tipo',width:50},{dataIndex:'fuefin_code',text:'Rb',width:45},
		{dataIndex:'cuanec_monto',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90}
	]}
 ],
 dockedItems:[{xtype:'comp_cboopc'},
	{xtype:'comp_tooltop',items:[
		{xtype:'comppub_year_code'},{xtype:'comp_nrotop',itemId:'cuanec_nro'},{xtype:'comp_fechaini'},{xtype:'comp_fechafin'},{xtype:'comppub_area_abrev'},
		{xtype:'comp_cbotop',itemId:'tipcuanec_id',valueField:'tabgen_id',displayField:'tabgen_nombre',tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>',fieldLabel:'&nbsp;Tipo',listConfig:{cls:'item00001',minWidth:100},width:100},
	]},
	{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'comp_btnNew'},{xtype:'comp_btnModify'},{xtype:'comp_btnQuery'},{xtype:'comp_btnAnnular'},{xtype:'comp_btnPrinter'}]},{xtype:'comp_pag',itemId:'pagLCN'}
]},
{xtype:'panel',border:false,height:'100%',width:'2%'},
{xtype:'tabpanel',itemId:'tab01',height:'100%',plain:true,width:'56%',items:[
	{xtype:'panel',itemId:'tabLCND',height:'100%',layout:{type:'fit'},title:'Detalle',items:[
		{xtype:'comp_grid',itemId:'grdLCND',columns:[
			{xtype:'rownumberer',width:30},{dataIndex:'bs_codigo',text:'Código',width:110},{dataIndex:'bs_nombre',text:'Descripción',width:300},{dataIndex:'unimed_nombre',text:'U.M.',width:100},{dataIndex:'objcontr_abrev',text:'O.C.',width:50},
			{dataIndex:'cuanecdet_cantid',text:'Cantidad',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.000'),width:85},{dataIndex:'cuanecdet_preuni',text:'P.U.',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.0000'),width:90},{dataIndex:'cuanecdet_pretot',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90},
			{dataIndex:'espedet_codigo',text:'Clasificador',width:95},
		]}
	 ],
	 dockedItems:[
	 	{xtype:'form',border:false,width:'100%',items:[{xtype:'comp_tooltop',defaults:{labelWidth:70},layout:'vbox',items:[
			{xtype:'container',layout:'hbox',width:'100%',items:[{xtype:'comp_dato',name:'cuanec_documento',fieldLabel:'Documento',labelWidth:70,width:170},{xtype:'comp_dato',width:40},{xtype:'comp_datofecha',name:'cuanec_fecha',fieldLabel:'Fecha',labelWidth:40}]},
			{xtype:'comp_dato',name:'area_nombre',fieldLabel:'U. Orgánica'},{xtype:'comp_dato',name:'tipcuanec_nombre',fieldLabel:'Tipo'},{xtype:'comp_dato',name:'fuefin_codename',fieldLabel:'Rubro'}
		]}]},
		{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'comp_btnNew'},{xtype:'comp_btnModify'},{xtype:'comp_btnDelete'}]},{xtype:'comp_pag',itemId:'pagLCND',disabled:true}
	]}
]}],
__compLCNDE:null,setCompLCNDE:function(poComp){this.__compLCNDE=poComp;},getCompLCNDE:function(){return this.__compLCNDE;}
});