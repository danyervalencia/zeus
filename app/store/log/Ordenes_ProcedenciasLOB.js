Ext.define('Siace.store.log.Ordenes_ProcedenciasLOB',{extend:'Ext.data.Store',model:'Siace.model.log.Orden_ProcedenciaLOB',proxy:{type:'general',url:'php/logistics_ordenes_procedencias_json_records.php'}});