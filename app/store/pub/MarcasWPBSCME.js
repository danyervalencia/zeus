Ext.define('Siace.store.pub.MarcasWPBSCME',{extend:'Ext.data.Store',model:'Siace.model.pub.MarcaWPBSCME',proxy:{type:'general',url:'php/public_marcas_json_records.php'}});