Ext.define("Siace.view.rrhh.TrabajadoresE",{extend:"Siace.view.WinE",alias:"widget.rrhh_trabje",requires:["Siace.view.comp.pub.IndivS"],width:600,items:[{xtype:"form",bodyPadding:8,border:true,defaults:{labelWidth:65,width:"100%"},layout:{type:"vbox"},items:[
	{xtype:"container",layout:{type:"hbox"},items:[{xtype:"comp_cbo",itemId:"tipdocident_id",name:"tipdocident_id",valueField:"tipdocident_id",displayField:"tipdocident_abrev",fieldLabel:"Trabajador",labelWidth:65,listConfig:{cls:"item00001",minWidth:55},margin:"0 4 5 0",width:125},{xtype:"comppub_indivs"}]},
	{xtype:"comp_cbo",itemId:"tipplan_id",name:"tipplan_id",valueField:"tipplan_id",displayField:"tipplan_nombre",editable:true,fieldLabel:"Tipo Plan."},
	{xtype:"comppub_area_nombre",name:"area_key",editable:true},{xtype:"comp_cbo",itemId:"carg_id",name:"carg_id",valueField:"carg_id",displayField:"carg_nombre",allowBlank:false,editable:true,fieldLabel:"Cargo"},
	{xtype:"container",layout:"hbox",items:[{xtype:"comp_date",itemId:"trabj_fechaini",name:"trabj_fechaini",endDateField:"trabj_fechafin",fieldLabel:"Periodo",labelWidth:65,margin:"0 4 5 0",vtype:"daterange",width:165},{xtype:"comp_date",itemId:"trabj_fechafin",name:"trabj_fechafin",startDateField:"trabj_fechaini",vtype:"daterange"}]},
	{xtype:"comp_txtarea",itemId:"trabj_observ",name:"trabj_observ",fieldLabel:"Comentario",rows:6}
]}],
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__compPIS;}
});