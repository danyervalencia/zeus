Ext.define("Siace.controller.log.PedEGTF",{extend:"Ext.app.Controller",
lpe:function(poC,poP){var _str=fext_GS(poC,"grdLPTF");
	var _found=_str.findBy(function(r,id){var _d=rec.data;
		if(fext_GV(poC,"meta_id")*1<=0||fext_IE(poC,"tarea_key")||fext_IE(poC,"fftr_id")){}
		else if(poP["tareafte_id"]!=""){if(_d.tareafte_id==poP["tareafte_id"]){r.set("pedtareafte_monto",fjsRound(_d.pedtareafte_monto*1 + poP["pretot"]*1,2));r.commit();return true;}}
		//else if(poP["tarea_key"]!=""){if(_d.tarea_key==poP["tarea_key"]&&_d.fuefin_id==poP["fuefin_id"]&&_d.tiprecur_id==poP["tiprecur_id"]&&_d.espedet_id==poP["espedet_id"]){rec.set("pedtareafte_monto",fjsRound(_d.pedtareafte_monto*1 + poP["pretot"]*1,2));rec.commit();return true;}}
		else{if(poP["espedet_id"]*1>0&&_d.espedet_id==poP["espedet_id"]){r.set("pedtareafte_monto",fjsRound(r.data.pedtareafte_monto*1+ poP["pretot"]*1,2));r.commit();return true;}}
	});
	if(_found==-1){_str.add({tareafte_id:poP["tareafte_id"],tarea_key:poP["tarea_key"],fuefin_id:poP["fuefin_id"],tiprecur_id:poP["tiprecur_id"],espedet_id:poP["espedet_id"],pedtareafte_monto:poP["pretot"],tarea_codigo:poP["tarea_codigo"],fftr_codigo:poP["fftr_codigo"],espedet_codigo:poP["espedet_codigo"],espedet_nombre:poP["espedet_nombre"]});}
}
});