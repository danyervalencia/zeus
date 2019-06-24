Ext.define("Siace.view.pub.VehiculosE",{extend:"Siace.view.WinE",alias:"widget.pub_vehe",requires:["Siace.view.comp.pub.PersS","Siace.view.comp.pub.IndivS"],width:560,items:[{xtype:"form",border:true,items:[{xtype:"tabpanel",activeTab:0,frame:false,plain:true,width:"100%",items:[
{xtype:"panel",title:"Datos de Vehículo",bodyPadding:8,layout:"anchor",defaults:{anchor:"100%",labelWidth:70},items:[{xtype:"hiddenfield",itemId:"veh_key",name:"veh_key"},
	{xtype:"comp_cbo",itemId:"tipveh_id",name:"tipveh_id",valueField:"tipveh_id",displayField:"tipveh_nombre",allowBlank:false,fieldLabel:"Tipo Vehículo",editable:true,tpl:"<tpl for='.'><div class='x-boundlist-item'>{tipveh_nombre}&nbsp;</div></tpl>"},
	{xtype:"fieldcontainer",fieldLabel:"Placa",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"veh_pdf",name:"veh_pdf"},
		{xtype:"comp_cbotop",itemId:"pais_id",name:"pais_id",valueField:"pais_id",allowBlank:false,displayField:"pais_abrev02",editable:true,listConfig:{cls:"item00001",minWidth:60},width:60},
		{xtype:"comp_txttop",itemId:"veh_serie",name:"veh_serie",maxLength:5,width:60},{xtype:"comp_txttop",itemId:"veh_nro",name:"veh_nro",maxLength:5,width:60},
		{xtype:"comp_file",itemId:"ffiVeh_pdf",name:"ffiVeh_pdf"},{xtype:"comp_btn_imgpdf",itemId:"btnVeh_pdfDel",hidden:true,iconCls:"icon_Delete_90"},{xtype:"comp_btn_imgpdf",itemId:"btnVeh_pdfDow",disabled:true}
	]},
	{xtype:"container",layout:{type:"hbox"},items:[{xtype:"comp_cbo",itemId:"tipdocident_id",name:"tipdocident_id",store:"array.TipDocIdentVentaAB",valueField:"tipdocident_id",displayField:"tipdocident_abrev",fieldLabel:"Propietario",labelWidth:70,listConfig:{cls:"item00001",minWidth:60},margin:"0 4 5 0",width:135},,{xtype:"comppub_perss"},{xtype:"comppub_indivs"}]},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"comp_cbo",itemId:"tipvehcat_id",name:"tipvehcat_id",fieldLabel:"Categoría",labelWidth:70,flex:1},
		{xtype:"comp_cbo",itemId:"year_id",name:"year_id",valueField:"year_id",displayField:"year_code",fieldLabel:"Año Fab.",editable:true,labelWidth:70,padding:"0 0 5 30",tpl:"<tpl for='.'><div class='x-boundlist-item'>{year_code}&nbsp;</div></tpl>",width:210},
	]},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"comp_cbo",itemId:"marc_id",name:"marc_id",valueField:"marc_id",displayField:"marc_nombre",fieldLabel:"Marca",editable:false,flex:1,labelWidth:70,tpl:"<tpl for='.'><div class='x-boundlist-item'>{marc_nombre}&nbsp;</div></tpl>"},
		{xtype:"comp_txt",itemId:"veh_chasis",name:"veh_chasis",fieldLabel:"Serie/Chasis",labelWidth:70,padding:"0 0 5 30",maxLength:20,width:210},
	]},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"comp_cbo",itemId:"mod_id",name:"mod_id",valueField:"mod_id",displayField:"mod_nombre",fieldLabel:"Modelo",flex:1,labelWidth:70,tpl:"<tpl for='.'><div class='x-boundlist-item'>{mod_nombre}&nbsp;</div></tpl>"},
		{xtype:"comp_txt",itemId:"veh_motor",name:"veh_motor",fieldLabel:"N° Motor",labelWidth:70,padding:"0 0 5 30",maxLength:20,width:210},
	]},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"comp_cbo",itemId:"bsf_id",name:"bsf_id",valueField:"bsf_id",displayField:"bsf_nombre",editable:true,fieldLabel:"Carroceria",flex:1,labelWidth:70,tpl:"<tpl for='.'><div class='x-boundlist-item'>{bsf_nombre}&nbsp;</div></tpl>"},
		{xtype:"comp_cbo",itemId:"tipvehcomb_id",name:"tipvehcomb_id",fieldLabel:"Combustible",labelWidth:70,padding:"0 0 5 30",width:210},
	]},
	{xtype:"container",layout:"hbox",width:"100%",items:[
		{xtype:"comp_txt",itemId:"veh_color",name:"veh_color",fieldLabel:"Color",labelWidth:70,maxLength:40,width:288},
		{xtype:"comp_cbo",itemId:"tipvehtransm_id",name:"tipvehtransm_id",fieldLabel:"Transmisión",editable:true,labelWidth:70,padding:"0 0 0 30",width:210},
	]}
]},
{xtype:"panel",title:"Datos Complementarios",bodyPadding:8,layout:"anchor",defaults:{anchor:"100%",labelWidth:70},items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",fieldLabel:"Forma",disabled:true,labelWidth:70,maxLength:10,width:120},{xtype:"comp_txt",fieldLabel:"Cilindros",disabled:true,labelWidth:60,maxLength:2,padding:"0 0 5 20",width:130},]},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",fieldLabel:"Ejes",disabled:true,labelWidth:70,maxLength:10,width:120},{xtype:"comp_txt",fieldLabel:"Cilindrada",disabled:true,labelWidth:60,maxLength:2,padding:"0 0 5 20",width:130}]},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",fieldLabel:"Asientos",disabled:true,labelWidth:70,maxLength:10,width:120},{xtype:"comp_txt",fieldLabel:"P.Bruto",disabled:true,labelWidth:60,maxLength:2,padding:"0 0 5 20",width:130}]},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",fieldLabel:"Pasajeros",disabled:true,labelWidth:70,maxLength:10,width:120},{xtype:"comp_txt",fieldLabel:"P.Neto",disabled:true,labelWidth:60,maxLength:2,padding:"0 0 5 20",width:130},]},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_txt",fieldLabel:"Ruedas",disabled:true,labelWidth:70,maxLength:10,width:120},{xtype:"comp_txt",itemId:"veh_cutil",name:"veh_cutil",fieldLabel:"CargaUtil",disabled:false,labelWidth:60,maxLength:4,padding:"0 0 5 20",width:130},]},
	{xtype:"comp_txtarea",itemId:"veh_observ",name:"veh_observ",fieldLabel:"Comentario",width:"100%"}
]}]}]}],
__compPPS:null,setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;},
});