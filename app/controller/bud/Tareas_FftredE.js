Ext.define("Siace.controller.bud.Tareas_FftredE",{extend:"Ext.app.Controller",views:["bud.Tareas_FftredE"],
init:function(application){this.control({
"bud_tareaftee":{beforeshow:this.btf_BS},"bud_tareaftee #btnSave":{click:this.btf_btnSav},"bud_tareaftee #btnUndo":{click:this.btf_btnExt},"bud_tareaftee #btnExit":{click:this.btf_btnExt},
"bud_tareaftee #fuefin_id":{change:this.btf_ffiChg},"bud_tareaftee #tareafte_estado":{change:this.btf_tfeChg},"bud_tareaftee #tareafte_valida":{change:this.btf_tfvChg}
});},
btf_BS:function(comp,o){var _TE=comp.getTE();
	Ext.Ajax.request({method:"POST",url:"php/budget_tareas_json_records.php",params:{xxTarea_key:fext_GV(comp,"tarea_key"),xxType_record:"winBTAE"},success:function(resp,o){var _res=fext_DJ("",resp);var _md=fext_CM("bud.TareaWBTAE");
		if(_res.success&&_res.data.length==1){var _d=_res.data[0];_md.set(_d);fext_LR(comp,_md,"panBT");comp.down("#tareafte_otro").setFieldLabel("Monto "+(_d.year_id*1+1));if(_TE==13){fextpub_areasFilt({obj:comp.down("#area_key"),ak:"",uek:_d.unieje_key,TR:"TO_ADD_TAREA",nuk:"NoT",TQ:fext_GV(comp,"tarea_key"),AB:"NO",setVal:false});}}
	}});
	fextbud_fuefinFilt({pan:comp,AB:"NOT",dsb:(_TE==1?false:true),setVal:false});fextbud_espedetFilt({pan:comp,ttc:2,OB:"espedet_codename",AB:"NOT",dsb:(_TE==1?false:true),setVal:false});
	fext_CC("bud.TareaFteE0"+_TE).btfe(comp);
},
btf_btnSav:function(btn,e,o){fext_CC("bud.TareaFteES").btfe(btn);},
btf_btnExt:function(btn,e,o){btn.up("window").close();},
btf_ffiChg:function(cbo,newV,oldV,o){if(cbo.up("window").getTE()==1){fextbud_tiprecurLoad(cbo.up("window").down("#tiprecur_id"),true);}},
btf_tfeChg:function(chk,newV,oldV,o){fext_removeAddCls(chk.up("window").down("#lblTareafte_estado"),newV==true?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
btf_tfvChg:function(chk,newV,oldV,o){fext_removeAddCls(chk.up("window").down("#lblTareafte_valida"),newV==true?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});