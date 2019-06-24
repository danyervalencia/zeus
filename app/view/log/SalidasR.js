Ext.define("Siace.view.log.SalidasR",{extend:"Siace.view.PanR",alias:"widget.log_salr",requires:["Siace.view.PanR1","Siace.view.TpnR1","Siace.view.comp.siaf.ProysnipS","Siace.view.comp.rrhh.TrabjS"],items:[
{xtype:"panr1",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cbo",itemId:"rep_id",valueField:"rep_code",displayField:"rep_nombre",fieldLabel:"Reporte",flex:1,labelWidth:70,margin:"4 4 5 0"},{xtype:"comppub_year_code",disabled:true,fieldLabel:"",margin:"4 0"}]},
	{xtype:"comp_fct",fieldLabel:"Periodo",items:[{xtype:"comp_fechaini",fieldLabel:""},{xtype:"comp_fechafin",fieldLabel:""},{xtype:"displayfield",flex:1}]},
	{xtype:"compsiaf_proysnips"},{xtype:"comppub_area_nombre"},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},{xtype:"compbud_fuefin_codename"},{xtype:"compbud_tiprecur_codename"},{xtype:"compbud_espedet_codename"},{xtype:"comprrhh_trabjs"},
	{xtype:"comp_fct",fieldLabel:"Código Bien",items:[{xtype:"comppub_bst_code",fieldLabel:"",hidden:true},{xtype:"comppub_bsg_codeab",fieldLabel:""},{xtype:"comppub_bsc_codeab",fieldLabel:""},{xtype:"comppub_bsf_codeab",fieldLabel:""},{xtype:"comp_txt",itemId:"bs_code",disabled:true,maxLength:4,vtype:"onlyNumeric",width:50}]}
],__compSPSS:"",setCompSPSS:function(poC){this.__compSPSS=poC;},getCompSPSS:function(){return this.__compSPSS;},__compRTS:null,setCompRTS:function(poComp){this.__compRTS=poComp;},getCompRTS:function(){return this.__compRTS;},
dockedItems:[{xtype:"comp_toolbtn",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]},
{xtype:"tpnr1",items:[]}
]});