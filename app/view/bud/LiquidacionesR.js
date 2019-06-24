Ext.define("Siace.view.bud.LiquidacionesR",{extend:"Siace.view.PanR",alias:"widget.bud_liqr",requires:["Siace.view.comp.CboRep","Siace.view.comp.pub.Year_id","Siace.view.comp.bud.ProyS","Siace.view.comp.pub.PersS"],items:[
{xtype:"panr1",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cborep",margin:"4 0 5 0"}]},{xtype:"compbud_proys"},{xtype:"comppub_year_id",width:170},
	{xtype:"comp_fct",fieldLabel:"Periodo",items:[{xtype:"comp_fechaini",fieldLabel:""},{xtype:"comp_fechafin",fieldLabel:""},{xtype:"displayfield",flex:1}]},
	{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename"},{xtype:"compbud_fuefin_codename"},{xtype:"compbud_espedet_codename"},{xtype:"comppub_perss"},
	{xtype:"comp_fct",fieldLabel:"Bien/Serv.",items:[{xtype:"comppub_bst_codeab",fieldLabel:"",value:0},{xtype:"comppub_bsg_codeab",disabled:true,fieldLabel:""},{xtype:"comppub_bsc_codeab",disabled:true,fieldLabel:""},{xtype:"comppub_bsf_codeab",disabled:true,fieldLabel:""},{xtype:"comp_txt",itemId:"bs_code",name:"bs_code",maxLength:4,vtype:"onlyNumeric",width:50}]}
],__compSPSS:"",setCompSPSS:function(poC){this.__compSPSS=poC;},getCompSPSS:function(){return this.__compSPSS;},__compPPS:null,setCompPPS:function(poC){this.__compPPS=poC;},getCompPPS:function(){return this.__compPPS;},
dockedItems:[{xtype:"comp_toolbtn",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]
},
{xtype:"tpnr1",items:[]}
]});