Ext.define("Siace.store.pub.Bienes_Servs_Clases_MarcasCbo",{extend:"Ext.data.Store",model:"Siace.model.pub.Bien_Serv_Clase_MarcaCbo",proxy:{type:"general",url:"php/public_bienes_servs_clases_marcas_json_records.php"}});