Ext.define("Siace.view.log.IngresosR",{extend:"Siace.view.PanR",alias:"widget.log_ingr",requires:["Siace.view.comp.siaf.ProysnipS","Siace.view.comp.pub.PersS"],items:[
{xtype:"panr1",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cbo",itemId:"rep_id",valueField:"rep_code",displayField:"rep_nombre",fieldLabel:"Reporte",flex:1,labelWidth:70,margin:"4 4 5 0"},{xtype:"comppub_year_code",disabled:true,fieldLabel:"",margin:"4 0"}]},
	{xtype:"comp_fct",fieldLabel:"Periodo",items:[{xtype:"comp_fechaini",fieldLabel:""},{xtype:"comp_fechafin",fieldLabel:""},{xtype:"displayfield",flex:1},{xtype:"compbud_tipgast_name"}]},
	{xtype:"compsiaf_proysnips"},{xtype:"comppub_area_nombre"},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fuefin_codename"},{xtype:"compbud_tiprecur_codename"},{xtype:"compbud_espedet_codename"},{xtype:"comppub_perss"},
	{xtype:"comp_fct",fieldLabel:"Bien/Serv.",items:[{xtype:"comppub_bst_codeab",fieldLabel:"",value:0},{xtype:"comppub_bsg_codeab",disabled:true,fieldLabel:""},{xtype:"comppub_bsc_codeab",disabled:true,fieldLabel:""},{xtype:"comppub_bsf_codeab",disabled:true,fieldLabel:""},{xtype:"comp_txt",itemId:"bs_code",name:"bs_code",maxLength:4,vtype:"onlyNumeric",width:50}]}
],__compSPSS:"",setCompSPSS:function(poC){this.__compSPSS=poC;},getCompSPSS:function(){return this.__compSPSS;},__compPPS:null,setCompPPS:function(poC){this.__compPPS=poC;},getCompPPS:function(){return this.__compPPS;},
dockedItems:[{xtype:"comp_toolbtn",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]},
{xtype:"tpnr1",items:[]}
]});