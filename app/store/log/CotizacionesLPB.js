Ext.define('Siace.store.log.CotizacionesLPB',{extend:'Ext.data.Store',model:'Siace.model.log.CotizacionLPB',pageSize:500,proxy:{type:'general',url:'php/logistics_cotizaciones_json_records.php'}});