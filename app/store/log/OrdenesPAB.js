Ext.define('Siace.store.log.OrdenesPAB',{extend:'Ext.data.Store',model:'Siace.model.log.OrdenPAB',pageSize:500,proxy:{type:'general',url:'php/logistics_ordenes_json_records.php'}});