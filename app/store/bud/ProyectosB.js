Ext.define("Siace.store.bud.ProyectosB",{extend:"Ext.data.Store",model:"Siace.model.bud.ProyectoB",pageSize:500,proxy:{type:"general",url:"php/budget_proyectos_json_records.php"}});