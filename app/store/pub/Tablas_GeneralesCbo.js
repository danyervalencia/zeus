Ext.define('Siace.store.pub.Tablas_GeneralesCbo',{extend:'Ext.data.Store',model:'Siace.model.pub.Tabla_GeneralCbo',proxy:{type:'general',url:'php/public_tablas_generales_json_records.php'}});