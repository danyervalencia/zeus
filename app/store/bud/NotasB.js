Ext.define("Siace.store.bud.NotasB",{extend:"Ext.data.Store",model:"Siace.model.bud.NotaB",pageSize:500,proxy:{type:"general",url:"php/budget_notas_json_records.php"}});