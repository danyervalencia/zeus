Ext.define("Siace.store.pub.LocalesB",{extend:"Ext.data.Store",model:"Siace.model.pub.LocalB",pageSize:500,proxy:{type:"general",url:"php/public_locales_json_records.php"}});