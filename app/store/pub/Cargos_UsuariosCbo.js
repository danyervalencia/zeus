Ext.define("Siace.store.pub.Cargos_UsuariosCbo",{extend:"Ext.data.Store",model:"Siace.model.pub.Cargo_UsuarioCbo",proxy:{type:"general",url:"php/public_cargos_usuarios_json_records.php"}});