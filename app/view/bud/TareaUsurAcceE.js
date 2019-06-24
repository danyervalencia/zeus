Ext.define("Siace.view.bud.TareaUsurAcceE",{extend:"Siace.view.WindowEdit",alias:"widget.bud_tareausuraccee",layout:{type:"vbox"},width:600,items:[
{xtype:"panel",itemId:"panPUA",width:"100%",items:[{xtype:"form",border:false,bodyPadding:"4 4 4 6",defaults:{width:"100%"},layout:{type:"vbox"},width:"100%",items:[
	{xtype:"comp_tooltop",defaults:{labelWidth:70},layout:"vbox",items:[{xtype:"comp_dato",name:"indiv_apenom",fieldLabel:"Ap. Nombres"},{xtype:"comp_dato",name:"unieje_codename",fieldLabel:"Ejecutora"},{xtype:"comp_dato",name:"area_nombre",fieldLabel:"U. Orgánica"},{xtype:"comp_dato",name:"cargusur_nombre",fieldLabel:"Cargo"}]}
]}]},
{xtype:"panel",itemId:"panBTUA",margin:"0 0 0 0",width:"100%",items:[
{xtype:"form",bodyPadding:"4 8 8 8",border:false,defaults:{labelWidth:65},witdh:"100%",items:[{xtype:"hiddenfield",itemId:"usuracce_key",name:"usuracce_key"},{xtype:"hiddenfield",itemId:"area_key"},
	{xtype:"comppub_year_code",name:"year_id",fieldLabel:"Año Trabajo",labelAlign:"left",margin:"0 0 5 0",width:140},
	{xtype:"comp_cbo",itemId:"tarea_key",name:"tarea_key",valueField:"tarea_key",displayField:"tarea_codename",tpl:"<tpl for='.'><div class='x-boundlist-item'>{tarea_codename}&nbsp;</div></tpl>",anchor:"100%",editable:true,fieldLabel:"Tarea Func.",submitValue:false},
	{xtype:"container",layout:"hbox",margin:"0 0 5 0",width:"100%",items:[{xtype:"comp_date",itemId:"tareausuracce_fechaini",name:"tareausuracce_fechaini",endDateField:"tareausuracce_fechafin",fieldLabel:"Periodo",labelWidth:65,margin:"0 4 0 0",vtype:"daterange",width:165},{xtype:"comp_date",itemId:"tareausuracce_fechafin",name:"tareausuracce_fechafin",startDateField:"tareausuracce_fechaini",vtype:"daterange"},
		{xtype:"label",itemId:"lblTareausuracce_estado",cls:"lbl00003",padding:"5 0 0 0",text:"Estado Activo \xa0 ",flex:1},{xtype:"checkbox",itemId:"tareausuracce_estado",name:"_tareausuracce_estado",checked:true,width:13}
	]},{xtype:"comp_txtarea",itemId:"tareausuracce_observ",name:"tareausuracce_observ",anchor:"100%",fieldLabel:"Comentario",rows:3},
	{xtype:"comp_grid",itemId:"grdDocumentos",height:194,width:"100%",plugins:[Ext.create("Ext.grid.plugin.CellEditing",{clicksToEdit:1})],viewConfig:{getRowClass:function(rec,rowI,rowP,str){return rec.data.tareausuraccedoc_estado==1?"mx-letra-negro":"mx-letra-rojo";}},
	 columns:[{xtype:"rownumberer",width:30},{dataIndex:"doc_nombre",text:"Documento",flex:1},
		{xtype:"checkcolumn",header:"Editar",dataIndex:"tareausuraccedoc_update",stopSelection:false,width:55},{xtype:"checkcolumn",header:"Eliminar",dataIndex:"tareausuraccedoc_delete",width:55},{xtype:"checkcolumn",header:"VoBo",dataIndex:"tareausuraccedoc_vobo",width:55},{xtype:"checkcolumn",header:"Otros",dataIndex:"tareausuraccedoc_other",width:55},
		{xtype:"actioncolumn",itemId:"acDocumentos",align:"center",width:35,items:[{tooltip:"<b>Habilitar </b> documento",getClass:function(val,metd,rec){if(rec.data.tareausuraccedoc_estado==1){return "x-hide-display";}else{return "icon_Vobo_80";}}},{tooltip:"<b>Deshabilitar </b> documento",getClass:function(val,metd,rec){if(rec.data.tareausuraccedoc_estado==1){return "icon_Reject_80";}else{return "x-hide-display";}}}]}
	]}
]}]}
]});