Ext.define('Siace.view.log.Buena_ProOK',{extend:'Siace.view.WindowOk',alias:'widget.log_bpok',width:250,items:[
{xtype:'form',border:false,layout:'vbox',items:[
{xtype:'container',layout:'vbox',margin:'15 0 5 0',width:'100%',items:[
	{xtype:'label',itemId:'doc_nombre',width:'100%',style:{color:'#990000',fontFamily:'Arial Narrow',fontSize:'14px',fontWeight:'bold',textAlign:'center'}},
	{xtype:'label',text:fjsRepeat('=',35),width:'100%',style:{color:'#990000',fontFamily:'Arial Narrow',fontSize:'11px',fontWeight:'bold',textAlign:'center'}},
	{xtype:'label',itemId:'modif_documento',margin:'15 0 20 0',text:'',width:'100%',style:{color:'#990000',fontFamily:'Arial Narrow',fontSize:'15px',fontWeight:'bold',textAlign:'center'}}
]}]}]
});