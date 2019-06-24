Ext.define("Siace.view.log.ValorizacionesE",{extend:"Siace.view.WindowEdit",alias:"widget.log_valrze",width:700,items:[{xtype:"form",bodyPadding:8,border:true,layout:{type:"vbox"},items:[
{xtype:"panel",border:false,layout:{type:"hbox"},width:"100%",items:[
	{xtype:"panel",border:false,defaults:{labelWidth:65},layout:{type:"vbox"},width:600,items:[{xtype:"comppub_year_code",hidden:true,name:"year_id"},
	    {xtype:"fieldcontainer",fieldLabel:"Valorización",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_txttop",itemId:"valrz_nro",align:"center",disabled:true,width:50},{xtype:"comp_date",itemId:"valrz_fecha",allowBlank:false,disabled:true}]},
	    {xtype:"fieldcontainer",fieldLabel:"Referencia",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comp_cbotop",itemId:"tablex_key",valueField:"tablex_key",displayField:"tablex_documento",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tablex_documento}&nbsp;</div></tpl>",fieldCls:"cbo00004",width:150},{xtype:"comp_datofecha",name:"tablex_fecha",fieldLabel:"",margin:"1 25 0 4",width:100},{xtype:"comp_dato",name:"expe_nro",fieldLabel:"SIAF",labelWidth:35,margin:"1 0 0 4"}]},
		{xtype:"comp_tooltop",defaults:{labelWidth:65},margin:"-4 0 0 -4",layout:"vbox",items:[{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Organica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func"},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."},{xtype:"comp_dato",name:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",name:"tiprecur_codename",fieldLabel:"T. Recurso"}]},
	]},{xtype:"displayfield",flex:1},
]},
{xtype:"tabpanel",activeTab:0,plain:true,width:"100%",items:[
	{xtype:"panel",itemId:"tab01",title:"Vales de Combustible",height:220,items:[{xtype:"comp_grid",itemId:"grdLVD",height:220,columns:[{xtype:"rownumberer",width:30},{dataIndex:"tablex_documento",text:"Vale",sortable:false,width:65},{dataIndex:"tablex_fecha",text:"Fecha",align:"center",renderer:Ext.util.Format.dateRenderer("d/m/Y"),width:80},{dataIndex:"motval_nombre",text:"Motivo",sortable:false,width:160},{dataIndex:"veh_placa",text:"Placa",sortable:false,width:85},{dataIndex:"tipveh_nombre",text:"Tipo Vehículo",sortable:false,width:138},{dataIndex:"valrzdet_pretot",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),sortable:false,width:90},{dataIndex:"indiv_apenom",text:"Condutor",sortable:false,width:300}]}]},
	{xtype:"panel",itemId:"tab02",title:"Complementarios",bodyPadding:8,height:200,width:"100%",layout:"vbox",items:[{xtype:"comp_txtarea",itemId:"val_observ",name:"valrz_observ",fieldLabel:"Glosa",labelWidth:65,width:"100%",height:120}]}
]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"container",layout:"hbox",width:"100%",margin:"3 0 0 0",items:[
		{xtype:"button",itemId:"btnAdd",text:"Agregar",disabled:true,iconCls:"icon_Add",margin:"0 5",padding:"2 6 2 8"},{xtype:"button",itemId:"btnSuppress",text:"Eliminar",disabled:true,iconCls:"icon_Suppress",padding:"2 6 2 8"},{xtype:"displayfield",flex:1},
		{xtype:"comp_curr",itemId:"valrz_monto",disabled:true,fieldLabel:"Importe",labelWidth:65,margin:"0 19 0 0",value:0,width:160}
	]}
]}
]}]});