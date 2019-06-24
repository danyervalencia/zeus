Ext.define("Siace.view.log.Fases_AccesosE",{extend:"Siace.view.WindowEdit",alias:"widget.log_faseaccee",width:500,items:[
{xtype:"form",border:true,bodyPadding:8,defaults:{labelWidth:65,width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"comp_cbo",itemId:"area_key",name:"area_key",valueField:"area_key",displayField:"area_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{area_nombre}&nbsp;</div></tpl>",allowBlank:false,fieldLabel:"U. Orgánica"},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[
		{xtype:"comppub_doc_nombre",name:"doc_id",store:"array.DocFase",fieldLabel:"Documento",labelWidth:65,width:250},
		{xtype:"label",itemId:"lblFaseacce_vobo",cls:"lbl00003",padding:"5 0 0 0",text:"Es Vobo \xa0 ",flex:1},{xtype:"checkbox",itemId:"faseacce_vobo",name:"_faseacce_vobo",checked:true,width:13}
	]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[
		{xtype:"comp_cbo",itemId:"fase_id",name:"fase_id",valueField:"fase_id",displayField:"fase_nombre",allowBlank:false,fieldLabel:"Fase",labelWidth:65,width:250},
		{xtype:"label",itemId:"lblFaseacce_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",flex:1},{xtype:"checkbox",itemId:"faseacce_estado",name:"_faseacce_estado",checked:true,width:13}
		
	]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[
		{xtype:"comp_cbo",itemId:"cargusur_id",name:"cargusur_id",valueField:"cargusur_id",displayField:"cargusur_nombre",allowBlank:false,editable:true,fieldLabel:"Cargo",labelWidth:65,width:250},
		
	]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_cbo",itemId:"faseacce_type",name:"faseacce_type",valueField:"tabgen_id",displayField:"tabgen_nombre",allowBlank:false,editable:true,fieldLabel:"Ambito",labelWidth:65,width:250}]},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_cbo",itemId:"fase_next",name:"fase_next",valueField:"fase_id",displayField:"fase_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{fase_nombre}&nbsp;</div></tpl>",fieldLabel:"Fase (*)",labelWidth:65,width:250}]},
	{xtype:"comp_txtarea",itemId:"faseacce_observ",name:"faseacce_observ",fieldLabel:"Comentario"}
]}],
__ak:"",setAK:function(pcAK){this.__ak=pcAK;},getAK:function(){return this.__ak;}
});