Ext.define("Siace.view.bud.MetasS",{extend:"Siace.view.WindowSearch",alias:"widget.bud_metas",width:600,items:[{xtype:"form",bodyPadding:0,frame:false,items:[
{xtype:"container",layout:"hbox",margin:"0 0 5 0",items:[{xtype:"hiddenfield",itemId:"year",value:""},{xtype:"comppub_year_code"},{xtype:"comp_txttop",itemId:"secfunc_code",enableKeyEvents:true,fieldLabel:"&nbsp;S.F.",maxLength:7,width:60},{xtype:"comp_txttop",itemId:"secfunc_nombre",enableKeyEvents:true,fieldLabel:"&nbsp;Descripción",maxLength:30,width:220}]},
{xtype:"comp_grid",itemId:"grdBM",height:320,columns:[{dataIndex:"secfunc_code",text:"S.F.",width:50},{dataIndex:"secfunc_nombre",text:"Descripción",width:1000}]},{xtype:"comp_pag",itemId:"pagBM"}
]}]});