Ext.define("Siace.store.log.DonacionesB",{extend:"Ext.data.Store",model:"Siace.model.log.DonacionB",pageSize:500,proxy:{type:"general",url:"php/logistics_donaciones_json_records.php"}});