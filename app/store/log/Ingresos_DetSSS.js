Ext.define("Siace.store.log.Ingresos_DetSSS",{extend:"Ext.data.Store",model:"Siace.model.log.Ingreso_DetSSS",pageSize:2000,proxy:{type:"general",url:"php/logistics_ingresos_det_json_records.php"}});