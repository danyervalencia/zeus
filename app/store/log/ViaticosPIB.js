Ext.define('Siace.store.log.ViaticosPIB',{extend:'Ext.data.Store',model:'Siace.model.log.ViaticoPIB',pageSize:500,proxy:{type:'general',url:'php/logistics_viaticos_json_records.php'}});