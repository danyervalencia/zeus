Ext.define("Siace.view.log.OrdenesR",{extend:"Siace.view.PanR",alias:"widget.log_ordenr",requires:["Siace.view.comp.CboRep","Siace.view.comp.bud.ProyS","Siace.view.comp.pub.PersS"],items:[
{xtype:"panr1",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cborep"},{xtype:"comppub_year_code",fieldLabel:"",margin:"4 0"}]},
	{xtype:"comp_fct",fieldLabel:"Periodo",items:[{xtype:"comp_fechaini",fieldLabel:""},{xtype:"comp_fechafin",fieldLabel:""},{xtype:"displayfield",flex:1},{xtype:"comppub_doc_nombre",store:"array.DocOrdenAB",labelWidth:70,value:0,width:200}]},
	{xtype:"compbud_proys"},{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fuefin_codename"},{xtype:"compbud_tiprecur_codename"},{xtype:"compbud_espedet_codename"},{xtype:"comppub_perss"},

	{xtype:"comp_fct",fieldLabel:"Bien/Serv.",items:[{xtype:"comppub_bst_codeab",fieldLabel:"",value:0},{xtype:"comppub_bsg_codeab",disabled:true,fieldLabel:""},{xtype:"comppub_bsc_codeab",disabled:true,fieldLabel:""},{xtype:"comppub_bsf_codeab",disabled:true,fieldLabel:""},{xtype:"comp_txt",itemId:"bs_code",name:"bs_code",maxLength:4,vtype:"onlyNumeric",width:50}]}
],__compBPS:"",setCompBPS:function(poComp){this.__compBPS=poComp;},getCompBPS:function(){return this.__compBPS;},__compPPS:null,setCompPPS:function(poC){this.__compPPS=poC;},getCompPPS:function(){return this.__compPPS;},
dockedItems:[{xtype:"comp_toolbtn",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]
},
{xtype:"tpnr1",items:[]}
]});