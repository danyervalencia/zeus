Ext.define('Siace.store.pub.Bienes_Servs_Familias',{extend:'Ext.data.Store',model:'Siace.model.pub.Bien_Serv_Familia',proxy:{type:'general',url:'php/public_bienes_servs_familias_json_records.php'}});