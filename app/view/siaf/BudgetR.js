Ext.define("Siace.view.siaf.BudgetR",{extend:"Siace.view.PanR",alias:"widget.siaf_budr",requires:["Siace.view.comp.CboRep","Siace.view.comp.pub.Year_id","Siace.view.comp.bud.ProyS"],items:[
{xtype:"panr1",items:[
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"comp_cborep",margin:"4 0 5 0"}]},{xtype:"compbud_proys"},{xtype:"comppub_year_id",width:170},
	{xtype:"comp_fct",fieldLabel:"Periodo",items:[{xtype:"comp_fechaini",fieldLabel:""},{xtype:"comp_fechafin",fieldLabel:""},{xtype:"displayfield",flex:1}]},
	{xtype:"compbud_secfunc_codename"},{xtype:"compbud_fuefin_codename"},{xtype:"compbud_espedet_codename"},
],__compSPSS:"",setCompSPSS:function(poC){this.__compSPSS=poC;},getCompSPSS:function(){return this.__compSPSS;},
dockedItems:[{xtype:"comp_toolbtn",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]
},
{xtype:"tpnr1",items:[]}
]});