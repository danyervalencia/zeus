Ext.define("Siace.view.log.Neas_DetSAE",{extend:"Siace.view.WindowSearch",alias:"widget.log_neadetsae",title:"Búsqueda de Bienes Donados",width:800,items:[{xtype:"panel",items:[
{xtype:"container",layout:"hbox",margin:"0 0 4 2",items:[
	{xtype:"comppub_doc_nombre",editable:true,fieldLabel:"&nbsp;Documento",labelAlign:"top",margin:"0 4 0 0",value:0,width:120},{xtype:"comp_nrotop",itemId:"tablex_serie"},,{xtype:"comp_nrotop",itemId:"tablex_nro",width:120}
]},
{xtype:"comp_grid",itemId:"grd",height:320,columns:[{xtype:"rownumberer",width:30},{dataIndex:"bs_codigo",text:"Código",width:105},{dataIndex:"bs_nombre",text:"Descripción",width:300},{dataIndex:"unimed_nombre",text:"U.M.",width:100},{dataIndex:"tablex_cantid",text:"Cantidad",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000"),width:90},{dataIndex:"tablex_preuni",text:"P.U.",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.000000"),width:90},{dataIndex:"tablex_pretot",text:"Importe",align:"right",renderer:Ext.util.Format.numberRenderer("000,000,000.00"),width:90},{dataIndex:"tablex_documento",text:"Documento",width:80},{dataIndex:"tablex_item",text:"Item",width:35},{dataIndex:"espedet_codigo",text:"Clasificador",width:95}]},
{xtype:"comp_pag",itemId:"pag"},
]}]
});