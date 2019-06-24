Ext.define("Siace.view.rrhh.TrabajadoresS",{extend:"Siace.view.WindowSearch",alias:"widget.rrhh_trabjs",width:460,items:[{xtype:"form",bodyPadding:0,frame:false,items:[
{xtype:"container",layout:"hbox",margin:"0 0 5 0",items:[
	{xtype:"comp_cbotop",itemId:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipdocident_abrev}&nbsp;</div></tpl>",fieldLabel:"&nbsp;T.D.I.",maxLength:4,minChars:1,width:70},
	{xtype:"comp_txttop",itemId:"indiv_dni",fieldLabel:"&nbsp;Número Doc. Ident.",maxLength:15,width:120},{xtype:"comp_txttop",itemId:"indiv_apenom",fieldLabel:"&nbsp;Apellidos y Nombres",maxLength:15,width:220}
]},
{xtype:"comp_grid",itemId:"grdRT",height:320,columns:[{dataIndex:"tipdocident_abrev",text:"D.I.",tooltip:"Documento de Identidad",width:60},{dataIndex:"indiv_dni",text:"Número",tooltip:"Número Documento de Identidad",width:100},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",width:300},{dataIndex:"carg_nombre",text:"Cargo",width:150}]},{xtype:"comp_pag",itemId:"pagRT"}
]}]});