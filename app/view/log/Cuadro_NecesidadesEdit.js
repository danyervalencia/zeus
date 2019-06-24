Ext.define('Siace.view.log.Cuadro_NecesidadesEdit',{extend:'Siace.view.WindowEdit',alias:'widget.log_cuanecedit',width:600,items:[
{xtype:'form',border:true,bodyPadding:8,defaults:{labelWidth:70,width:'100%'},layout:{type:'vbox'},width:'100%',items:[
	{xtype:'fieldcontainer',fieldLabel:'Registro',labelClsExtra:'lbl00001',layout:'hbox',width:'100%',items:[
		{xtype:'comppub_year_code',store:'',fieldLabel:''},{xtype:'comp_txttop',itemId:'cuanec_nro',align:'center',disabled:true,width:60},{xtype:'comp_date',itemId:'cuanec_fecha',allowBlank:false,disabled:true},
		{xtype:'displayfield',flex:1}
	]},
	{xtype:'comppub_area_nombre',disabled:true},{xtype:'comp_cbo',itemId:'tipcuanec_id',name:'tipcuanec_id',valueField:'tabgen_id',displayField:'tabgen_nombre',fieldLabel:'Tipo',width:200},
	{xtype:'compbud_secfunc_codename',editable:true,submitValue:false},{xtype:'compbud_fuefin_codename',itemId:'fuefin_id',name:'fuefin_id',editable:true},
	{xtype:'comp_txtarea',itemId:'cuanec_observ',name:'cuanec_observ',fieldLabel:'Comentario'}
]}],
__noUSK:'',setNoUsk:function(poNoUSK){this.__noUSK=poNoUSK;},getNoUsk:function(){return this.__noUSK;}
});