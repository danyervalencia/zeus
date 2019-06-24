Ext.define("Siace.view.rrhh.Registros_LaboralesR",{extend:"Siace.view.PanelBrowse",alias:"widget.rrhh_reglabr",layout:{type:"hbox"},items:[
{xtype:"panel",itemId:"panRL",defaults:{labelWidth:70},border:false,height:"100%",layout:"vbox",padding:"10 10",width:550,items:[
	{xtype:"comp_cbo",itemId:"type_record",valueField:"typrec_id",displayField:"typrec_nombre",fieldLabel:"Reporte",labelWidth:70,margin:"0 4 5 0",width:"100%"},
	{xtype:"fieldcontainer",fieldLabel:"Periodo",labelClsExtra:"lbl00001",layout:"hbox",margin:"0 0 5 0",items:[{xtype:"comp_datetop",itemId:"fechaini",endDateField:"fechafin",vtype:"daterange"},{xtype:"comp_datetop",itemId:"fechafin",startDateField:"fechaini",vtype:"daterange"}]},
	{xtype:"comppub_area_nombre",disabled:true},{xtype:"compbud_secfunc_codename",disabled:true},{xtype:"compbud_tarea_codename",disabled:true},
	{xtype:"comp_cbo",itemId:"fuefin_id",valueField:"fuefin_id",displayField:"fuefin_codename",tpl:"<tpl for='.'><div class='x-boundlist-item'>{fuefin_codename}&nbsp;</div></tpl>",fieldLabel:"Fue.Fin.",width:"100%"},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"indiv_key"},{xtype:"hiddenfield",itemId:"INDIV_DNI"},{xtype:"comp_txt",itemId:"indiv_dni",enableKeyEvents:true,fieldLabel:"Persona",labelWidth:70,margin:"0 4 5 0",maxLength:15,submitValue:false,width: 150},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"indiv_apenom",name:"indiv_apenom",fieldCls:"df00101"}]},
],
dockedItems:[{xtype:"toolbar",dock:"bottom",ui:"footer",items:[{xtype:"comp_btnPdf"},{xtype:"comp_btnExcel"}]}]
},
{xtype:"panel",border:false,height:"100%",width:5},
{xtype:"tabpanel",itemId:"tab01",flex:1,height:"100%",plain:true,items:[
]}],
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;}
});