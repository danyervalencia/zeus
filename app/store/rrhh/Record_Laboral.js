Ext.define('Siace.store.rrhh.Redord_Laboral',{extend:'Ext.data.Store',model:'Siace.model.rrhh.Record_Laboral',pageSize:500,proxy:{type:'general',url:'php/rrhh_record_laboral_json_records.php'}});