Ext.define('Siace.store.log.Pedidos_WebLPB',{extend:'Ext.data.Store',model:'Siace.model.log.Pedido_WebLPB',pageSize:500,proxy:{type:'general',url:'php/logistics_pedidos_web_json_records.php'}});