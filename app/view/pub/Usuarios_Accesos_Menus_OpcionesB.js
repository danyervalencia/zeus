Ext.define("Siace.view.pub.Usuarios_Accesos_Menus_OpcionesB",{extend:"Siace.view.WindowBrowse",alias:"widget.pub_usuaraccemenuopcb",closable:true,icon:"resources/icons/btnMenu.png",layout:{type:"vbox"},width:830,items:[
{xtype:"panel",itemId:"panPUA",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"hbox"},width:"100%",items:[
	{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:65},flex:1,padding:"0 0 0 0",ui:"footer",items:[{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"usur_login",fieldLabel:"Login",labelWidth:65,width:370},{xtype:"comp_dato",name:"indiv_dni",fieldLabel:"D.N.I.",labelWidth:40}]},{xtype:"comp_dato",name:"indiv_apenom",fieldLabel:"Usuario"},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"usuracce_id",fieldLabel:"Ficha",labelWidth:65,width:370},{xtype:"comp_datofecha",name:"usuracce_fecha",fieldLabel:"Fecha",labelWidth:40}]},
		{xtype:"comp_dato",name:"unieje_codename",fieldLabel:"Ejecutora"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},
		{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"cargusur_nombre",fieldLabel:"Cargo",labelWidth:65,width:370}]},{xtype:"comp_dato",fieldLabel:"Complementario"}
	]},
	{xtype:"container",height:"100%",layout:"vbox",width:100,items:[{xtype:"image",itemId:"indiv_foto",border:1,flex:1,width:"100%",src:"attach/sin_foto.jpg",style:{borderColor:"#BDBDBD",borderStyle:"solid",background:"center",position:"relative"}}]}
]}]},
{xtype:"container",layout:"hbox",width:"100%",items:[
	{xtype:"comp_grid",itemId:"grdSubmenus",height:400,margin:"0 20 0 0",width:530,plugins:[Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1})],viewConfig:{getRowClass:function(rec,rowI,rowP,str){return (rec.data.usuraccemenuopc_estado==1?"mx-letra-negro":"mx-letra-rojo");}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"menu_nombre",sortable:false,text:"Menu",width:150},{dataIndex:"submenu_nombre",sortable:false,text:"SubMenu",flex:1},
		{xtype:"actioncolumn",itemId:"acSubmenus",align:"center",width:25,items:[{tooltip:"<b>Activar </b> submenu",getClass:function(val,md,rec){if(rec.data.usuraccemenuopc_estado==1){return "x-hide-display";}else{return "icon_Vobo_80";}}},{tooltip:"<b>Inhabilitar </b> submenu",getClass:function(val,md,rec){if(rec.data.usuraccemenuopc_estado==1){return "icon_Reject_80";}else{return "x-hide-display";}}}]}
	]},
	{xtype:"comp_grid",itemId:"grdOpciones",height:400,flex:1,viewConfig:{getRowClass:function(rec,rowI,rowP,str){return (rec.data.usuraccemenuopc_estado==1?"mx-letra-negro":"mx-letra-rojo");}},
	 columns:[{dataIndex:"opc_type",text:"Tipo",width:30},{dataIndex:"opc_nombre",text:"Descripcion",flex:1},
		{xtype:"actioncolumn",itemId:"acOpciones",align:"center",width:25,items:[{tooltip:"<b>Activar</b> opción",getClass:function(val,md,rec){if(rec.data.usuraccemenuopc_estado==0&&rec.data.submenu_estado==1){return "icon_Vobo_80";}else{return "x-hide-display";}}},{tooltip:"<b>Inhbilitar Vobo</b> opción",getClass:function(val,md,rec){if(rec.data.usuraccemenuopc_estado==1&&rec.data.submenu_estado==1){return "icon_Reject_80";}else{return "x-hide-display";}}}]}
	]}
]}
]});