Ext.define('Siace.view.bud.ActividadesRep',{extend:'Siace.view.PanelBrowse',alias:'widget.bud_activrep',layout:{type:'hbox'},items:[
{xtype:'panel',itemId:'panBA',defaults:{labelWidth:70,width:"100%"},border:false,height:'100%',layout:'vbox',padding:'10 10',width:550,items:[
	{xtype:'container',layout:'hbox',width:'100%',items:[
		{xtype:'comp_cbo',itemId:'type_record',valueField:'typrec_id',displayField:'typrec_nombre',fieldLabel:'Reporte',flex:1,labelWidth:70,margin:'0 4 5 0'},
		{xtype:'comp_cbo',itemId:'year_id',store:'array.Years',valueField:'year_id',displayField:'year_nro',tpl:'<tpl for="."><div class="x-boundlist-item">{year_nro}&nbsp;</div></tpl>',labelWidth:35,listConfig:{cls:'item00001',minWidth:60,},width:60},
	]},
	{xtype:'comp_cbo',itemId:'',valueField:'tabgen_id',displayField:'tabgen_nombre',fieldLabel:'P.E.I. - O.I.',tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>'},
	{xtype:'comp_cbo',itemId:'',valueField:'tabgen_id',displayField:'tabgen_nombre',fieldLabel:'P.E.I. - O.E.',tpl:'<tpl for="."><div class="x-boundlist-item">{tabgen_nombre}&nbsp;</div></tpl>'},
	{xtype:'comppub_area_nombre',disabled:true},
	{xtype:'comp_cbo',itemId:'activ_key',valueField:'activ_nombre',displayField:'activ_nombre',fieldLabel:'Actividad',tpl:'<tpl for="."><div class="x-boundlist-item">{activ_nombre}&nbsp;</div></tpl>'},
	{xtype:'fieldcontainer',fieldLabel:'Bien/Serv.',labelClsExtra:'lbl00001',layout:'hbox',margin:'0 0 5 0',items:[
		{xtype:'comppub_bst_codeab',fieldLabel:''},{xtype:'comppub_bsg_codeab',fieldLabel:''},{xtype:'comppub_bsc_codeab',fieldLabel:''},{xtype:'comppub_bsf_codeab',fieldLabel:''},{xtype:'comp_txt',itemId:'bs_code',name:'bs_code',maxLength:4,vtype:'onlyNumeric',width:50}
	]}
],
dockedItems:[{xtype:'toolbar',dock:'bottom',ui:'footer',items:[{xtype:'comp_btnPdf'},{xtype:'comp_btnExcel'}]}]
},
{xtype:'panel',border:false,height:'100%',width:5},
{xtype:'tabpanel',itemId:'tab01',flex:1,height:'100%',plain:true,items:[
]}
]});