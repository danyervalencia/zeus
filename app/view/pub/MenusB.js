Ext.define("Siace.view.pub.MenusB",{extend:"Siace.view.PanB",alias:"widget.pub_menub",layout:"hbox",items:[
{xtype:"panb1",title:"Módulo de Menus del Sistema ::.",width:"35%",items:[{xtype:"comp_grid",itemId:"grdPM",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"menu_nombre",text:"Panel",sortable:false,width:150},{dataIndex:"submenu_nombre",text:"[Carpeta] Módulo",sortable:false,width:250}]}],
 dockedItems:[{xtype:"comp_cboopc"},{xtype:"comp_tooltop",items:[{xtype:"comp_cbotop",itemId:"menu_parent",editable:true,fieldLabel:"&nbsp;Menu",width:180}]},{xtype:"comp_pag",itemId:"pagSE"}]
},
{xtype:"panel",itemId:"panO",border:true,header:true,height:"100%",layout:{type:"fit"},margin:"0 4 0 4",title:"Opciones",width:"25%",items:[
	{xtype:"comp_grid",itemId:"grdO",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"opc_type",align:"center",text:"T",width:30},{dataIndex:"opc_nombre",text:"Descripción",flex:1}]}
],
dockedItems:[
	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:50},layout:"vbox",items:[{xtype:"comp_dato",name:"menu_nombre",fieldLabel:"Panel"},{xtype:"comp_dato",name:"menuc_nombre",fieldLabel:"Carpeta"},{xtype:"comp_dato",name:"submenu_nombre",fieldLabel:"Módulo"}]}]},{xtype:"comp_pag",itemId:"pagO",hidden:true}
]},
{xtype:"panel",itemId:"panU",border:true,bodyBorder:false,collapsible:false,floatable:true,header:true,height:"100%",layout:{type:"fit"},split:false,style:"background-color:#FFFFFF;",title:"Usuarios",width:"40%",items:[
	{xtype:"comp_grid",itemId:"grdU",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.rcol;}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"usuracce_id",text:"Ficha",width:60},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",width:230},{dataIndex:"area_nombre",text:"U. Organica",width:350},{dataIndex:"cargusur_nombre",text:"Cargo",width:150}]}
],
dockedItems:[{xtype:"comppub_menu",value:1151},{xtype:"comp_cboopc"},
 	{xtype:"form",border:false,items:[{xtype:"comp_tooltop",defaults:{labelWidth:50},layout:"vbox",items:[{xtype:"comp_dato",name:"menu_nombre",fieldLabel:"Panel"},{xtype:"comp_dato",name:"menuc_nombre",fieldLabel:"Carpeta"},{xtype:"comp_dato",name:"submenu_nombre",fieldLabel:"Módulo"}]}]},
 	{xtype:"comp_toolbtn",items:[{xtype:"comp_btn",itemId:"btnH",disabled:true,icon:"resources/icons/btnVobo.png",text:"Habilitar"},{xtype:"comp_btn",itemId:"btnD",disabled:true,icon:"resources/icons/btnReject.png",text:"Inhabilitar"},{xtype:"comp_btnPrinter"}]},{xtype:"comp_pag",itemId:"pagU"}
]}

]
});