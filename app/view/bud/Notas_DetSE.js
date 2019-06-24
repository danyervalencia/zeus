Ext.define("Siace.view.bud.Notas_DetSE",{extend:"Siace.view.WindowSearch",alias:"widget.bud_notadetse",title:"Agregar Anulación en Detalle de Nota Prespuestal ::.",width:600,items:[
{xtype:"form",bodyPadding:8,border:true,defaults:{anchor:"100%",labelWidth:70},width:"100%",items:[
	{xtype:"comp_dato",itemId:"fftr_codename",fieldLabel:"Rubro/TR"},{xtype:"compbud_secfunc_codename"},{xtype:"compbud_tarea_codename"},{xtype:"compbud_espedet_codename",valueField:"tareafte_key",editable:true,tpl:"<tpl for='.'><div class='x-boundlist-item' data-qtip=' Saldo Presupuestal: {[fjsFormatNumeric(values.tareafte_saldo,2)]} '>{espedet_codename}</div></tpl>"},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_cbo",itemId:"tipnotadet_id",store:"array.bud.TipNotaDet",valueField:"tipnotadet_id",displayField:"tipnotadet_nombre",disabled:true,fieldLabel:"Importe",labelWidth:70,margin:"0 4 0 0",value:2041,width:180},{xtype:"comp_curr",itemId:"notatareafte_monto",fieldCls:"txt00006",numberDecimal:0,width:120}]},
]}],
__filt:true,setFilt:function(poFilt){this.__filt=poFilt;},getFilt:function(){return this.__filt;}
});