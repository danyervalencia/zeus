Ext.define('Siace.store.log.Cotizaciones_DetPBSB',{extend:'Ext.data.Store',model:'Siace.model.log.Cotizacion_DetPBSB',pageSize:500,proxy:{type:'general',url:'php/logistics_cotizaciones_det_json_records.php'}});