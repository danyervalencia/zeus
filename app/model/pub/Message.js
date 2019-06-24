Ext.define('Siace.model.pub.Message',{extend:'Ext.data.Model',fields:[
{name:'mess_id',type:'int'},{name:'mess_key',type:'string'},{name:'mess_flga',type:'string'},
{name:'tipmess_id',type:'int'},{name:'mess_fecha',type:'date',dateFormat:'Y-m-d'},{name:'mess_title',type:'string'},
{name:'usur01',type:'int'},{name:'usur02',type:'int'},{name:'mess_texto',type:'string'},{name:'mess_estado',type:'int'},
{name:'usur_login',type:'string'},{name:'indiv_key',type:'string'},{name:'indiv_dni',type:'string'},{name:'indiv_apenom',type:'string'},
]});