Ext.define('Siace.store.log.Modificaciones_Tareas_FftredLMB',{extend:'Ext.data.Store',model:'Siace.model.log.Modificacion_Tarea_FftredLMB',pageSize:500,proxy:{type:'general',url:'php/logistics_modificaciones_tareas_fftred_json_records.php'}});