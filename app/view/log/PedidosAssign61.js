Ext.define("Siace.view.log.PedidosAssign61",{extend:"Siace.view.WinCnf",alias:"widget.log_pedassign61",iconCls:"icon_User_add_90",layout:{type:"vbox"},width:550,items:[
{xtype:"form",itemId:"frmLP",border:false,bodyPadding:"4 4 4 6",defaults:{labelWidth:65,width:"100%"},layout:{type:"vbox"},width:"100%",items:[{xtype:"toolbar",layout:"vbox",defaults:{labelWidth:65},flex:1,padding:"0 0 0 0",ui:"footer",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_dato",name:"ped_documento",fieldLabel:"Registro",labelWidth:65,width:160},{xtype:"comp_datofecha",name:"ped_fecha",labelWidth:35,flex:1},{xtype:"comp_dato",name:"tipped_nombre",fieldCls:"df00104",fieldLabel:"Tipo",labelWidth:25,width:90}]},
	{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"secfunc_codename",fieldLabel:"Sec. Func."},{xtype:"comp_dato",name:"tarea_codename",fieldLabel:"Tarea Func."}
]}]},
{xtype:"panel",itemId:"panLPA",margin:"0 0 0 0",width:"100%",items:[
{xtype:"form",itemId:"frmLPA",bodyPadding:"4 8 8 8",border:false,defaults:{anchor:"100%",labelWidth:60},width:"100%",items:[{xtype:"hiddenfield",itemId:"usuracce_key"},{xtype:"hiddenfield",itemId:"area_key"},
	{xtype:"comp_cbo",itemId:"categ_id",valueField:"tabgen_id",displayField:"tabgen_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",editable:true,fieldLabel:"Categoría",listConfig:{cls:"item00001"}},
	{xtype:"comp_cbo",itemId:"usuracce_key",name:"usuracce_key",valueField:"usuracce_key",displayField:"indiv_apenom",tpl:"<tpl for='.'><div class='x-boundlist-item'>{indiv_apenom}&nbsp;</div></tpl>",editable:true,fieldLabel:"Cotizador",listConfig:{cls:"item00001",minWidth:"100%"}},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"panel",border:false,padding:"0 0 4 65",width:"100%",items:[
			{xtype:"comp_grid",itemId:"grdLPF",height:100,viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.pedfase_estado==1?"mx-letra-negro":"mx-letra-rojo";}},
			 columns:[{xtype:"rownumberer",width:30},{dataIndex:"indiv_apenom",text:"Cotizadores Registrados",flex:1},{dataIndex:"pedfase_feho",text:"Recibido",width:100},{xtype:"actioncolumn",itemId:"acEnv_rec",align:"center",width:25,items:[{tooltip:"<b>Deshabilitar</b> cotizador",getClass:function(val,metd,rec){if(rec.data.pedfase_estado==1){return "icon_Reject_80"; }else{return "x-hide-display";}}},{tooltip:"<b>Habilitar</b> cotizador",getClass:function(val,metd,rec){if(rec.data.pedfase_estado==0){return "icon_Vobo_80";}else{return "x-hide-display";}}}]}]}
		]}
	]}
]}]}
]});