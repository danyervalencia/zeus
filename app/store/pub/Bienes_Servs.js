Ext.define("Siace.store.pub.Bienes_Servs",{extend:"Ext.data.Store",model:"Siace.model.pub.Bien_Serv",proxy:{type:"general",url:"php/public_bienes_servs_json_records.php"}});