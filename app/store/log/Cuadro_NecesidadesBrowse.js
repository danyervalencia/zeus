Ext.define('Siace.store.log.Cuadro_NecesidadesBrowse',{extend:'Ext.data.Store',model:'Siace.model.log.Cuadro_NecesidadBrowse',pageSize:500,proxy:{type:'general',url:'php/logistics_cuadro_necesidades_json_records.php'}});