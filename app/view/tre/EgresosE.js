Ext.define("Siace.view.tre.EgresosE",{extend:"Siace.view.WindowEdit",requires:["Siace.view.comp.pub.PersS","Siace.view.comp.pub.IndivS"],alias:"widget.tre_egree",width:630,items:[
{xtype:"form",bodyPadding:6,border:true,defaults:{labelWidth:65},layout:{type:"vbox"},width:"100%",items:[{xtype:"comppub_year_code",hidden:true,submitValue:false},
	{xtype:"fieldcontainer",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"comppub_doc_nombre",store:"array.DocPago",disabled:true,labelWidth:65,margin:"0 4 0 0",value:402,width:230},{xtype:"comp_txttop",itemId:"egre_nro",align:"center",width:60},{xtype:"comp_date",itemId:"egre_fecha",allowBlank:false,disabled:true}]},
	{xtype:"fieldcontainer",fieldLabel:"Procedencia",labelClsExtra:"lbl00001",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"tablex_key",name:"tablex_key"},{xtype:"hiddenfield",itemId:"TABLEX_NRO"},
		{xtype:"comp_cbotop",itemId:"tablex_doc",name:"tablex_doc",store:"array.DocPagoProc",valueField:"doc_id",displayField:"doc_nombre",width:160},
		{xtype:"comp_txttop",itemId:"tablex_nro",align:"center",maxLength:6,submitValue:false,vtype:"onlyNumeric",width:60},
		{xtype:"comp_dato",itemId:"tablex_fecha",margin:"1 0 0 4",width:85},{xtype:"comp_dato",itemId:"tablex_monto",margin:"1 0 0 4",width:100},{xtype:"comp_dato",itemId:"expe_nro",fieldLabel:"SIAF",labelWidth:35,margin:"1 0 0 4"}
	]},
	{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fuefin_codename",disabled:true},
	{xtype:"container",layout:{type:"hbox"},items:[
		{xtype:"comp_cbo",itemId:"tipdocident_id",name:"tipdocident_id",store:"array.TipDocIdentVenta",valueField:"tipdocident_id",displayField:"tipdocident_abrev",fieldLabel:"Asignado a",labelWidth:65,listConfig:{cls:"item00001",minWidth:55,},margin:"0 4 5 0",width:125},{xtype:"comppub_perss"},{xtype:"comppub_indivs"}
	]},
	{xtype:"htmleditor",fieldLabel:"Contenido"},
	{xtype:"container",layout:{type:"hbox"},margin:"5 0 5 0",width:"100%",items:[
		{xtype:"comp_curr",itemId:"egre_monto",name:"egre_monto",fieldCls:"txt00006",fieldLabel:"Importe",labelWidth:65,maxLength:15,width:170},{xtype:"displayfield",flex:1},
		{xtype:"comp_cbo",itemId:"cuebanc_key",name:"cuebanc_key",valueField:"cuebanc_key",displayField:"cuebanc_nrobanco",fieldLabel:"Cta. Cte",labelWidth:60,margin:"0 4 0 0",width:230},
		{xtype:"comp_txttop",itemId:"cheq_nro",name:"cheq_nro",fieldCls:"txt00004",maxLength:8,vtype:"onlyNumeric",width:90},{xtype:"comp_txt",itemId:"cheq_nrob",name:"cheq_nrob",fieldCls:"txt00004",maxLength:1,vtype:"onlyNumeric",width:25}
	]},
	{xtype:"container",margin:"5 0 5 0",layout:{type:"hbox"},width:"100%",items:[
		{xtype:"comp_txtareatop",itemId:"egre_observ",name:"egre_observ",fieldLabel:"&nbsp;Concepto",rows:8,flex:1},{xtype:"displayfield",width:5},
		{xtype:"comp_txtareatop",itemId:"egre_otros",name:"egre_otros",fieldLabel:"&nbsp;Retenciones y Deducciones",rows:8,flex:1}
	]},
	{xtype:"panel",border:false,width:"100%",items:[
		{xtype:"comp_grid",itemId:"grdTE",height:100,columns:[{xtype:"rownumberer",width:30},
			{dataIndex:"egre_documento",text:"Documento",width:85},{dataIndex:"egre_fecha",text:"Fecha",align:"center",renderer:fext_FD(),width:80},
			{dataIndex:"egre_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:90},{dataIndex:"razsocial",text:"Razón Social",flex:1,editor:{xtype:"comp_txt",readOnly:true,value:""}}
		]}
	]}
]}],
__compPPS:null,__compPIS:null,__compBTFS:null,__filt:true,__filterFF:true,__NUK:'',
setCompPPS:function(poComp){this.__compPPS=poComp;},getCompPPS:function(){return this.__compPPS;},
setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;},
setCompBTFS:function(poComp){this.__compBTFS=poComp;},getCompBTFS:function(){return this.__compBTFS;},
setFilt:function(pcFilt){this.__filt=pcFilt;},getFilt:function(){return this.__filt;},
setFilterFF:function(poFilter){this.__filterFF=poFilter;},getFilterFF:function(){return this.__filterFF;},
setNUK:function(poNUK){this.__NUK=poNUK;},getNUK:function(){return this.__NUk;}
});