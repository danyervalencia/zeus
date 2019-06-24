Ext.define("Siace.view.log.Fichas_DetA",{extend:"Siace.view.WindowSearch",alias:"widget.log_fichdea",layout:{type:"vbox"},title:"Agregr Detalle de Alta",width:660,items:[
{xtype:"panel",itemId:"panLF",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:60},layout:"vbox",items:[{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"fich_documento",fieldLabel:"Registro",labelWidth:60,width:170},{xtype:"comp_datofecha",name:"fich_fecha",fieldLabel:"Fecha",labelWidth:35,width:160},{xtype:"comp_dato",name:"tipfich_nombre",fieldLabel:"Tipo",labelWidth:30}]},{xtype:"comp_dato",name:"tablex_documento",fieldLabel:"Referencia",width:180},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec.Func."},{xtype:"comp_dato",name:"pers_nombre",fieldLabel:"Proveedor"}]}
]}]},
{xtype:"panel",itemId:"panBTUA",margin:"0 0 0 0",width:"100%",items:[{xtype:"form",bodyPadding:"0",border:false,items:[{xtype:"hiddenfield",itemId:"menu_id",name:"menu_id"},{xtype:"hiddenfield",itemId:"fich_key",name:"fich_key"},{xtype:"hiddenfield",itemId:"name",itemId:"tablex"},
	{xtype:"comp_grid",itemId:"grdLSD",height:300,witdh:"100%",columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},
		{dataIndex:"saldet_cantid",text:"Cantidad",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),width:85},{dataIndex:"saldet_preuni",text:"P.U.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.0000"),width:95},{dataIndex:"espedet_codigo",text:"Clasificador",width:95},{dataIndex:"subcta_codigo",text:"Contable",width:100},{dataIndex:"sal_documento",text:"Alta",width:80},{dataIndex:"ing_documento",text:"Ingreso",width:105}
	]}
]}]}
]});