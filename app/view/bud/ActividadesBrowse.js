Ext.define('Siace.view.bud.ActividadesBrowse',{extend:'Siace.view.PanelBrowse',alias:'widget.bud_activbrowse',layout:{type:'hbox'},items:[
{xtype:'panel',itemId:'panBA',layout:{type:'fit'},height:'100%',width:'52%',items:[
	{xtype:'comp_grid',itemId:'grdBA',viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.cuadnec_flga=='98'?'mx-letra-rojo-bold':'mx-letra-negro';}},
	 columns:[{xtype:'rownumberer',width:30},
		{dataIndex:'activ_nombre',text:'Descripción',width:400},{dataIndex:'tipactiv_abrev',text:'Tipo',width:40},{dataIndex:'activ_code',text:'Código',width:65},
		{dataIndex:'activ_monto',text:'Presupuesto',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000'),width:90},
		{dataIndex:'unimed_nombre',text:'U.M.',width:100},{dataIndex:'activ_cantid',text:'Meta Anual',align:'right',renderer:Ext.util.Format.numberRenderer('000,000'),width:70}
	]}
 ],
 dockedItems:[{xtype:'comp_cboopc'},
	{xtype:'comp_tooltop',items:[{xtype:'comppub_year_code'},{xtype:'comppub_area_abrev'},{xtype:'comp_cbotop',itemId:'tipactiv_id',valueField:'tabgen_id',displayField:'tabgen_nombre',tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>',fieldLabel:'&nbsp;Tipo',listConfig:{cls:'item00001',minWidth:100},width:100}]},
	{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'comp_btnNew'},{xtype:'comp_btnModify'},{xtype:'comp_btnModify'},{xtype:'comp_btnQuery'},{xtype:'comp_btnDelete'},{xtype:'comp_btnPrinter'}]},{xtype:'comp_pag',itemId:'pagBA'}
]},
{xtype:'panel',border:false,height:'100%',width:'1%'},
{xtype:'tabpanel',itemId:'tab01',height:'100%',plain:true,width:'47%',items:[
	{xtype:'panel',itemId:'tabBAT',height:'100%',layout:{type:'fit'},title:'Tareas',items:[
		{xtype:'comp_grid',itemId:'grdBAT',columns:[{xtype:'rownumberer',width:30},{dataIndex:'activtarea_nombre',text:'Descripción Tarea',width:300},{dataIndex:'unimed_nombre',text:'U.M.',width:100},{dataIndex:'activtarea_monto',text:'Presupuesto',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000'),width:85},{dataIndex:'activtarea_cuanec',text:'Cuad. Nec.',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000'),width:85},{dataIndex:'activtarea_saldo',text:'Saldo',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000'),width:85}]}
	 ],
	 dockedItems:[{xtype:'comppub_menu',value:5145},{xtype:'comp_cboopc'},
	 	{xtype:'form',border:false,width:'100%',items:[{xtype:'comp_tooltop',defaults:{labelWidth:65},layout:'vbox',items:[
			{xtype:'container',layout:'hbox',width:'100%',items:[{xtype:'comp_dato',name:'year_id',fieldLabel:'Año',labelWidth:65,width:160},{xtype:'comp_datomonto',name:'activ_monto',fieldLabel:'Importe',labelWidth:45,renderer:Ext.util.Format.numberRenderer('000,000,000')}]},
			{xtype:'comp_dato',name:'area_nombre',fieldLabel:'U. Orgánica'},{xtype:'comp_dato',name:'pei_oi',fieldLabel:'P.E.I. - O.I.'},{xtype:'comp_dato',name:'pei_oe',fieldLabel:'P.E.I. - O.E.'},{xtype:'comp_dato',name:'activ_nombre',fieldLabel:'Actividad'}
		]}]},
		{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'comp_btnNew'},{xtype:'comp_btnModify'},{xtype:'comp_btnQuery'},{xtype:'comp_btnDelete'}]},{xtype:'comp_pag',itemId:'pagBAT',disabled:true}
	]},
	{xtype:'panel',itemId:'tabLCN',height:'100%',layout:{type:'fit'},title:'Cuadro Necesidades',items:[
		{xtype:'comp_grid',itemId:'grdLCND',columns:[
			{xtype:'rownumberer',width:30},{dataIndex:'bs_codigo',text:'Código',width:110},{dataIndex:'bs_nombre',text:'Descripción',width:300},{dataIndex:'unimed_nombre',text:'U.M.',width:100},{dataIndex:'objcontr_abrev',text:'O.C.',width:35},
			{dataIndex:'cuanecdet_cantid',text:'Cantidad',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.000'),width:85},{dataIndex:'cuanecdet_preuni',text:'P.U.',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.0000'),width:90},{dataIndex:'cuanecdet_pretot',text:'Importe',align:'right',renderer:Ext.util.Format.numberRenderer('000,000,000.00'),width:90},
			{dataIndex:'fuefin_code',text:'Rub',width:40},{dataIndex:'espedet_codigo',text:'Clasificador',width:95},
		]}
	 ],
	 dockedItems:[{xtype:'comppub_menu',value:5146},{xtype:'comp_cboopc'},
	 	{xtype:'form',border:false,width:'100%',items:[{xtype:'comp_tooltop',defaults:{labelWidth:65},layout:'vbox',items:[
			{xtype:'container',layout:'hbox',width:'100%',items:[{xtype:'comp_dato',name:'year_id',fieldLabel:'Año',labelWidth:65,width:160},{xtype:'comp_datomonto',name:'activ_monto',fieldLabel:'Importe',labelWidth:45,renderer:Ext.util.Format.numberRenderer('000,000,000')}]},
			{xtype:'comp_dato',name:'area_nombre',fieldLabel:'U. Orgánica'},{xtype:'comp_dato',name:'pei_oi',fieldLabel:'P.E.I. - O.I.'},{xtype:'comp_dato',name:'pei_oe',fieldLabel:'P.E.I. - O.E.'},{xtype:'comp_dato',name:'activ_nombre',fieldLabel:'Actividad'},{xtype:'comp_dato',name:'activtarea_nombre',itemId:'activtarea_nombre',fieldLabel:'Tarea'}
		]}]},
		{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'comp_btnNew'},{xtype:'comp_btnModify'},{xtype:'comp_btnQuery'},{xtype:'comp_btnDelete'}]},{xtype:'comp_pag',itemId:'pagLCND',disabled:true}
	]}
]}],
__compLCNDE:null,setCompLCNDE:function(poComp){this.__compLCNDE=poComp;},getCompLCNDE:function(){return this.__compLCNDE;}
});