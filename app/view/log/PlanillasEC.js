Ext.define("Siace.view.log.PlanillasEC",{extend:"Siace.view.WinE",alias:"widget.log_plane",requires:["Siace.view.comp.log.Tiporden_name","Siace.view.comp.pub.PersS"],width:600,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",defaults:{labelWidth:65},layout:"vbox",width:"100%",items:[{xtype:"comppub_year_code",hidden:true},
		{xtype:"fieldcontainer",fieldLabel:"Documento",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comppub_doc_nombre",disabled:true,fieldLabel:"",margin:"0 4 0 0",width:160},
			{xtype:"comp_txttop",name:"plan_nro",align:"center",disabled:true,width:60},{xtype:"comp_date",name:"plan_fecha",disabled:true}
		]},
		{xtype:"complog_tiporden_name"},{xtype:"compbud_fuefin_codename"},{xtype:"comppub_perss"}
	]}
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tab1",title:"Documentos",height:250,items:[{xtype:"comp_grid",itemId:"grdLPP",height:250,columns:[{xtype:"rownumberer",width:30},{dataIndex:"documento",text:"Documento",sortable:false,width:130},{dataIndex:"fecha",text:"Fecha",align:"center",renderer:fext_FD(),sortable:false,width:90},{dataIndex:"fuefin_codename",text:"Rubro",sortable:false,width:80},{dataIndex:"pers_ruc",text:"RUC",sortable:false,width:124},{dataIndex:"monto",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:95}]}]},
	{xtype:"panel",itemId:"tab2",title:"Presupuesto",height:250,items:[{xtype:"comp_grid",itemId:"grdBNTF",height:250,columns:[{xtype:"rownumberer",width:30},{dataIndex:"tarea_codigo",text:"Tarea",sortable:false,width:70},{dataIndex:"fftr_code",text:"Rb-TR",width:45},{dataIndex:"espedet_codigo",text:"Clasificador",sortable:false,width:90},{dataIndex:"espedet_nombre",text:"Descripción",sortable:false,width:398},{dataIndex:"monto",text:"Importe",align:"right",renderer:fext_FN(2),sortable:false,width:95}]}]},
	{xtype:"panel",itemId:"tab3",title:"Certificado",bodyPadding:8,defaults:{labelWidth:60},height:250,width:"100%",layout:"vbox",items:[
		{xtype:"comp_txtarea",itemId:"plan_observ",name:"plan_observ",fieldLabel:"Glosa",height:120,readOnly:true,width:"100%"},
		{xtype:"comp_txt",itemId:"certif_nro",fieldLabel:"Certificado",name:"certif_nro",maxLength:10,width:180},
		{xtype:"comp_txtarea",name:"certif_observ",fieldLabel:"&nbsp",labelSeparator:"",rows:3,width:"100%"},
		{xtype:"fieldcontainer",fieldLabel:"&nbsp",labelSeparator:"",layout:"hbox",width:"100%",items:[{xtype:"comp_btn",itemId:"btnCertif",icon:"resources/icons/siaf.png",text:" Registrar Certificado ",width:140}]}
	]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
		{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Suprimir",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
		{xtype:"comp_curr",name:"plan_monto",disabled:true,fieldCls:"txt00006",value:0,width:96},{xtype:"displayfield",width:19}
	]}
]}]}]
});