Ext.define("Siace.store.pub.Bienes_Servs_ClasesB",{extend:"Ext.data.Store",model:"Siace.model.pub.Bien_Serv_ClaseB",pageSize:500,proxy:{type:"general",url:"php/public_bienes_servs_clases_json_records.php"}});