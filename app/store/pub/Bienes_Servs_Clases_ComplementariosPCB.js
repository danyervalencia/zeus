Ext.define("Siace.store.pub.Bienes_Servs_Clases_ComplementariosPCB",{extend:"Ext.data.Store",model:"Siace.model.pub.Bien_Serv_Clase_ComplementarioPCB",pageSize:500,proxy:{type:"general",url:"php/public_bienes_servs_clases_complementarios_json_records.php"}});