Ext.define("Siace.store.siaf.Expedientes_MetasSEB",{extend:"Ext.data.Store",model:"Siace.model.siaf.Expediente_MetaSEB",pageSize:500,proxy:{type:"general",url:"php/siaf_expedientes_metas_json_records.php"}});