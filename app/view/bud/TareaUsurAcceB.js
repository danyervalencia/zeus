Ext.define("Siace.view.bud.TareaUsurAcceB",{extend:"Siace.view.WindowBrowse",alias:"widget.bud_tareausuracceb",icon:"resources/icons/btnAccess.png",layout:{type:"vbox"},width:700,items:[
{xtype:"panel",itemId:"panPUA",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"hbox"},width:"100%",items:[{xtype:"hiddenfield",itemId:"area_key",name:"area_key"},
	{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:65},flex:1,padding:"0 0 0 0",ui:"footer",items:[{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"usur_login",fieldLabel:"Login",labelWidth:65,width:370},{xtype:"comp_dato",name:"indiv_dni",fieldLabel:"D.N.I.",labelWidth:40}]},{xtype:"comp_dato",name:"indiv_apenom",fieldLabel:"Usuario"},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"usuracce_id",fieldLabel:"Ficha",labelWidth:65,width:370},{xtype:"comp_datofecha",name:"usuracce_fecha",fieldLabel:"Fecha",labelWidth:40}]},
		{xtype:"comp_dato",name:"unieje_codename",fieldLabel:"Ejecutora"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"cargusur_nombre",fieldLabel:"Cargo",labelWidth:65,width:370}]},{xtype:"comp_dato",fieldLabel:"Complementario"}
	]},
	{xtype:"container",height:"100%",layout:"vbox",width:100,items:[{xtype:"image",itemId:"indiv_foto",border:1,flex:1,width:"100%",src:"attach/sin_foto.jpg",style:{borderColor:"#BDBDBD",borderStyle:"solid",background:"center",position:"relative"}}]}
]}]},
{xtype:"comp_grid",itemId:"grdBTUA",height:234,width:"100%",viewConfig:{getRowClass:function(rec,rowI,rowP,str){return (rec.data.tareausuracce_estado=="1"?"mx-letra-negro":"mx-letra-rojo");}},
 columns:[{xtype:"rownumberer",width:30},{dataIndex:"year_id",text:"Año",align:"center",width:40},{dataIndex:"tarea_codigo",text:"Tarea",align:"center",width:70},{dataIndex:"tipgast_code",text:"",width:25},{dataIndex:"tarea_nombre",text:"Descripción",width:300},{dataIndex:"",text:"R",sortable:false,tooltip:"Requerimiento",width:25},{dataIndex:"",text:"C",sortable:false,tooltip:"Caja Chica",width:25},{dataIndex:"secfunc_nombre",text:"Secuencia Funcional",sortable:false,width:1000}]
},
{xtype:"comp_pag",itemId:"pagBTUA",width:"100%"},
{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_cbo",itemId:"opc_id",valueField:"opc_id",disabled:true,hidden:true},{xtype:"comp_btnAdd",disabled:false},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btnDelete"},{xtype:"comp_btnExit",disabled:false}]}
]});