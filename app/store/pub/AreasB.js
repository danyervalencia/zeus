Ext.define("Siace.store.pub.AreasB",{extend:"Ext.data.Store",model:"Siace.model.pub.AreaB",pageSize:500,proxy:{type:"general",url:"php/public_areas_json_records.php"}});