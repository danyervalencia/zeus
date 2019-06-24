Ext.define("Siace.view.pub.UsuariosB",{extend:"Siace.view.PanB",alias:"widget.pub_usurb",items:[
{xtype:"panb1",title:"Módulo de Usuarios ::.",width:"45%",items:[
	{xtype:"comp_grid",itemId:"grdPU",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.datausur_estado==0?"mx-letra-rojo":"mx-letra-negro";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"usur_login",text:"Login",width:120},{dataIndex:"indiv_apenom",text:"Apellidos y Nombres",flex:1},{dataIndex:"indiv_dni",text:"Doc. Identidad",tooltip:"Número Documento de Identidad",width:100}]}
 ],
 dockedItems:[{xtype:"comp_cboopc"},
 	{xtype:"comp_tooltop",items:[{xtype:"comp_txttop",itemId:"usur_login",fieldLabel:"&nbsp;Login",maxLength:15,width:100},{xtype:"comp_txttop",itemId:"indiv_appaterno",fieldLabel:"&nbsp;Ap. Paterno",maxLength:30,width:120},{xtype:"comp_txttop",itemId:"indiv_apmaterno",fieldLabel:"&nbsp;Ap. Materno",maxLength:30,width:120},{xtype:"comp_txttop",itemId:"indiv_nombres",fieldLabel:"&nbsp;Nombres",maxLength:30,width:120}]},
	{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnDelete"},{xtype:"comp_btnKey",disabled:true,text:"Cambiar Clave"}]},{xtype:"comp_pag",itemId:"pagPU"}
]},
{xtype:"tpnb1",items:[
	{xtype:"tabb1",itemId:"tabPUA",hidden:true,title:"Accesos",items:[{xtype:"comp_grid",itemId:"grdPUA",viewConfig:{getRowClass:function(r,rowI,rowP,str){return r.data.usuracce_estado==0?"mx-letra-rojo":"mx-letra-negro";}},columns:[{xtype:"rownumberer",width:30},{dataIndex:"usuracce_id",text:"Ficha",width:60},{dataIndex:"unieje_code",text:"Ejecutora",width:60},{dataIndex:"area_nombre",text:"U. Organica",width:350},{dataIndex:"cargusur_nombre",text:"Cargo",width:130},{dataIndex:"tireq_abrev03",text:"Req.",width:60},{dataIndex:"tivia_abrev03",text:"Viatico",width:60}]}],
	 dockedItems:[{xtype:"comppub_menu",value:1102},{xtype:"comp_cboopc"},
	 	{xtype:"form",border:false,height:110,items:[{xtype:"comp_tooltop",layout:"hbox",items:[
	 		{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:70},flex:1,padding:"0 0 0 0",ui:"footer",items:[
				{xtype:"comp_dato",name:"usur_login",fieldLabel:"Login"},{xtype:"comp_dato",name:"indiv_apenom",fieldLabel:"Ap. Nombres"},{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"indiv_dni",fieldLabel:"D.N.I.",labelWidth:70,width:220},{xtype:"comp_datofecha",name:"indiv_fechanac",fieldLabel:"Fec. Nac.",labelWidth:55}]},{xtype:"comp_dato",name:"paisdpto_nombre",fieldLabel:"Lug. Nac.",labelWidth:70,width:220},
				{xtype:"container",layout:"hbox",items:[{xtype:"comp_dato",name:"tipsex_nombre",fieldLabel:"Sexo",labelWidth:70,width:220},{xtype:"comp_dato",name:"tipestaciv_nombre",fieldLabel:"E. Civil",labelWidth:55}]},{xtype:"comp_dato",name:"indivdomi_domicilio",fieldLabel:"Dirección"},{xtype:"comp_dato",fieldLabel:"Complementario"}
			]},{xtype:"displayfield",width:10},
			{xtype:"container",layout:"vbox",height:110,width:100,items:[{xtype:"image",itemId:"indiv_foto",border:1,flex:1,margin:"2 0 3 0",width:"100%",style:{borderColor:"#BDBDBD",borderStyle:"solid",background:"center",position:"relative"}}]}
		]}]},
		{xtype:"comp_toolbtn",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnModify"},{xtype:"comp_btnQuery"},{xtype:"comp_btn",itemId:"btnTarea",disabled:true,icon:"resources/icons/btnAccess.png",text:"Tareas"},{xtype:"comp_btn",itemId:"btnMenu",disabled:true,icon:"resources/icons/btnMenu.png",text:"Menú"},{xtype:"comp_btn",itemId:"btnConstancy",icon:"resources/icons/btnPrinter.png",disabled:true,text:"Constancia"}]},{xtype:"comp_pag",itemId:"pagPUA",disabled:true}
	]}
]}]
});