Ext.define('Siace.store.pub.Personas_ActividadesPPB',{extend:'Ext.data.Store',model:'Siace.model.pub.Persona_ActividadPPB',pageSize:500,proxy:{type:'general',url:'php/public_personas_actividades_json_records.php'}});