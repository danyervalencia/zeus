Ext.define("Siace.store.pub.ComplementariosB",{extend:"Ext.data.Store",model:"Siace.model.pub.ComplementarioB",pageSize:500,proxy:{type:"general",url:"php/public_complementarios_json_records.php"}});