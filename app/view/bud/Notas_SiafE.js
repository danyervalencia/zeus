Ext.define("Siace.view.bud.Notas_SiafE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_notasiafe",width:650,items:[
{xtype:"form",border:true,bodyPadding:"4 8 8 8",defaults:{width:"100%"},items:[{xtype:"hiddenfield",itemId:"nota_key",name:"nota_key"},
	{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:68},padding:"0 0 4 0",ui:"footer",width:"100%",items:[{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"nota_documento",fieldLabel:"Documento",labelWidth:68},{xtype:"comp_dato",flex:1},{xtype:"comp_datofecha",name:"nota_fecha",fieldLabel:"Fecha",labelWidth:40,width:120}]},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"}]},
	{xtype:"comp_txt",itemId:"siaf_nro",name:"siaf_nro",fieldLabel:"Nota SIAF",labelWidth:63,margin:"0 0 5 0",maxLength:10,vtype:"onlyNumeric",width:180},
	{xtype:"comp_txtarea",name:"notasiaf_observ",fieldLabel:"Comentario",labelWidth:63,anchor:"100%",rows:8}
]}]
});