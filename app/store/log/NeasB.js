Ext.define("Siace.store.log.NeasB",{extend:"Ext.data.Store",model:"Siace.model.log.NeaB",pageSize:500,proxy:{type:"general",url:"php/logistics_neas_json_records.php"}});