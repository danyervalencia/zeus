Ext.define('Siace.view.bud.Actividades_TareasEdit',{extend:'Siace.view.WindowEdit',alias:'widget.bud_activtareaedit',width:650,items:[
{xtype:'form',bodyPadding:8,border:true,width:'100%',defaults:{labelWidth:65},items:[{xtype:'hiddenfield',itemId:'activ_key',name:'activ_key'},
	{xtype:'comp_dato',itemId:'year_id',fieldLabel:'Año',margin:'0 0 -6 0'},{xtype:'comp_dato',itemId:'area_nombre',fieldLabel:'U. Orgánica',margin:'0 0 -6 0'},{xtype:'comp_dato',itemId:'pei_nombre',fieldLabel:'P.E.I. - O.I.',margin:'0 0 -6 0'},{xtype:'comp_dato',itemId:'pei_nombre',fieldLabel:'P.E.I. - O.E.',margin:'0 0 -6 0'},{xtype:'comp_dato',itemId:'activ_nombre',fieldLabel:'Actividad'}, //{xtype:'comp_tooltop',defaults:{labelWidth:68},layout:'vbox',items:[]},
	{xtype:'comp_txtarea',itemId:'activtarea_nombre',name:'activtarea_nombre',fieldLabel:'Tarea',allowBlank:false,anchor:'100%',maxLength:80,minLength:10,rows:2},
	{xtype:'container',layout:'hbox',width:'100%',items:[
		{xtype:'comp_cbo',itemId:'unimed_id',name:'unimed_id',valueField:'unimed_id',displayField:'unimed_nombre',allowBlank:false,editable:true,fieldLabel:'U. Medida',labelWidth:65,margin:'0 20 4 0',tpl:'<tpl for="."><div class="x-boundlist-item">{unimed_nombre}&nbsp;</div></tpl>',width:220},{xtype:'displayfield',flex:1},
		{xtype:'comp_curr',itemId:'activtarea_monto',name:'activtarea_monto',fieldLabel:'Presupuesto',allowBlank:false,labelWidth:70,numberDecimal:0,value:'0',width:170},
	]},
	{xtype:'container',layout:'hbox',width:'100%',items:[
		{xtype:'comp_curr',itemId:'activtarea_cantid',name:'activtarea_cantid',fieldLabel:'Cantidad',allowBlank:false,labelWidth:65,numberDecimal:3,value:'0.000',width:170},{xtype:'displayfield',flex:1}
	]}	
]}]
});