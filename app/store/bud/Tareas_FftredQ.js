Ext.define("Siace.store.bud.Tareas_FftredQ",{extend:"Ext.data.Store",model:"Siace.model.bud.Tarea_FftredQ",pageSize:500,proxy:{type:"general",url:"php/budget_tareas_fftred_json_reports.php"}});