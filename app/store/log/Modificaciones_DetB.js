Ext.define("Siace.store.log.Modificaciones_DetB",{extend:"Ext.data.Store",model:"Siace.model.log.Modificacion_DetB",pageSize:500,proxy:{type:"general",url:"php/logistics_modificaciones_det_json_records.php"}});