Ext.define('Siace.store.tre.EgresosBEB',{extend:'Ext.data.Store',model:'Siace.model.tre.EgresoBEB',pageSize:500,proxy:{type:'general',url:'php/treasury_egresos_json_records.php'}});