Ext.define("Siace.view.pub.PersonasS",{extend:"Siace.view.WindowSearch",alias:"widget.pub_perss",width:550,items:[{xtype:"panel",layout:{type:"fit"},width:"100%",items:[
{xtype:"comp_grid",itemId:"grdPP",height:320,columns:[{dataIndex:"pers_ruc",text:"&nbsp;Registro",width:100},{dataIndex:"pers_nombre",text:"&nbsp;Razón Social",flex:1}]}],
dockedItems:[{xtype:"panel",width:"100%",items:[{xtype:"comp_tooltop",items:[{xtype:"comp_txttop",itemId:"pers_ruc",fieldLabel:"&nbsp;Registro",maxLength:15,width:100},{xtype:"comp_txttop",itemId:"pers_nombre",fieldLabel:"&nbsp;Razón Social",maxLength:40,width:220}]}]},{xtype:"comp_pag",itemId:"pagPP"}]
}]});