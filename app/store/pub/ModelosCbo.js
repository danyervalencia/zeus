Ext.define("Siace.store.pub.ModelosCbo",{extend:"Ext.data.Store",model:"Siace.model.pub.ModeloCbo",proxy:{type:"general",url:"php/public_modelos_json_records.php"}});