Ext.define("Siace.view.bud.Tareas_AreasE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_tareaareae",layout:{type:"vbox"},width:600,items:[
{xtype:"panel",itemId:"panBT",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:65},layout:"vbox",items:[{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"actproy_codename",fieldLabel:"Act. / Proy."},{xtype:"comp_dato",name:"fina_codename",fieldLabel:"Finalidad"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."}]}
]}]},
{xtype:"panel",itemId:"panBTA",margin:"0 0 0 0",width:"100%",items:[
{xtype:"form",bodyPadding:"4 8 8 8",border:false,width:"100%",items:[{xtype:"hiddenfield",itemId:"tarea_key",name:"tarea_key"},
	{xtype:"comppub_area_nombre",name:"area_key",anchor:"100%",editable:true,labelWidth:65,submitValue:false},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_txt",itemId:"xxx",fieldLabel:"Xxxxxxx",disabled:true,labelWidth:65,maxLength:15,width:250},{xtype:"label",itemId:"lblTareaarea_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Habilitado \xa0 ",flex:1},{xtype:"checkbox",itemId:"tareaarea_estado",name:"_tareaarea_estado",checked:true,width:13}]},
	{xtype:"comp_txtarea",itemId:"tareaarea_observ",name:"tareaarea_observ",fieldLabel:"Comentario",labelWidth:65,anchor:"100%"}
]}]}
]});