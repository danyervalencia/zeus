Ext.define("Siace.store.log.Pedidos_ProcedenciasE",{extend:"Ext.data.Store",model:"Siace.model.log.Planilla_ProcedenciaE",pageSize:500,proxy:{type:"general",url:"php/logistics_planillas_procedencias_json_records.php"}});