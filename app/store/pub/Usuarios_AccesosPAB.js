Ext.define("Siace.store.pub.Usuarios_AccesosPAB",{extend:"Ext.data.Store",model:"Siace.model.pub.Usuario_AccesoPAB",pageSize:500,proxy:{type:"general",url:"php/public_usuarios_accesos_json_records.php"}});