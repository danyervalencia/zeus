Ext.define('Siace.model.log.CotizacionBuenapro',{extend:'Ext.data.Model',fields:[
{name:'coti_key',type:'string'},{name:'coti_fecha',type:'date',dateFormat:'Y-m-d'},{name:'bp_monto',type:'float'},{name:'coti_documento',type:'string'},
{name:'pers_codename',type:'string'},{name:'ped_key',type:'string'},{name:'ped_fecha',type:'date',dateFormat:'Y-m-d'},{name:'ped_documento',type:'string'},{name:'ped_monto',type:'float'},
{name:'area_key',type:'string'},{name:'meta_id',type:'string'},{name:'tarea_key',type:'string'},{name:'fftr_id',type:'int'}
]});