Ext.define("Siace.store.log.ValesB",{extend:"Ext.data.Store",model:"Siace.model.log.ValeB",pageSize:500,proxy:{type:"general",url:"php/logistics_vales_json_records.php"}});