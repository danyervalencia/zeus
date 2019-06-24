Ext.define("Siace.view.log.PlanillasESC",{extend:"Siace.view.WinS",alias:"widget.log_planesc",title:"&nbsp;Búsqueda de documentos ::.",width:750,items:[
{xtype:"comp_grid",itemId:"grdLC",height:400,selType:"checkboxmodel",selModel:{mode:"MULTI",injectCheckbox:0},columns:[
	{xtype:"rownumberer",width:30},{dataIndex:"comp_documento",text:"Documento",width:120},{dataIndex:"comp_fecha",text:"Fecha",align:"center",width:80,renderer:fext_FD()},
	{dataIndex:"secfunc_code",text:"SecFunc",align:"center",width:60},{dataIndex:"fuefin_code",text:"Rb",align:"center",width:40},{dataIndex:"pers_nombre",text:"Proveedor",width:270},{dataIndex:"comp_monto",text:"Importe",align:"right",renderer:fext_FN(2),width:95}
 ],
 dockedItems:[
	{xtype:"comp_tooltop",style:"background-color:#FFFFFF;",defaults:{labelWidth:75},layout:"vbox",items:[{xtype:"hiddenfield",itemId:"tiporden_id"},{xtype:"hiddenfield",itemId:"fuefin_id"},{xtype:"hiddenfield",itemId:"pers_key",value:""},{xtype:"comp_dato",itemId:"tiporden_nombre",fieldLabel:"Tipo Servicio"},{xtype:"comp_dato",itemId:"fuefin_codename",fieldLabel:"Rubro"},{xtype:"comp_dato",itemId:"pers_nombre",fieldLabel:"Proveedor"}]},	
	{xtype:"comp_toolbtn",style:"background-color:#FFFFFF;",items:[{xtype:"displayfield",flex:1},{xtype:"comp_curr",itemId:"monto",disabled:true,fieldCls:"txt00006",fieldLabel:"Total Importe de Documento",labelWidth:170,value:0,width:270},{xtype:"displayfield",width:6}]}
]}],
__yi:true,setYI:function(pc){this.__yi=pc;},getYI:function(){return this.__yi;},
});