Ext.define("Siace.controller.rrhh.TrabajadoresE",{extend:"Ext.app.Controller",views:["rrhh.TrabajadoresE"],
init:function(application){this.control({
"rrhh_trabje":{beforeshow:this.rte_BS},"rrhh_trabje #btnSave":{click:this.rte_btn},"rrhh_trabje #btnUndo":{click:this.rte_btn},"rrhh_trabje #btnExit":{click:this.rte_btn},
"rrhh_trabje #btnPIS":{click:this.rte_btn},"rrhh_trabje #tipdocident_id":{change:this.rte_tdiChange},
"rrhh_trabje #indiv_dni":{blur:this.rte_idBlur,focus:this.rte_idFocus,keypress:this.rte_idKP}
});},
rte_BS:function(comp,opt){comp.down("#cntIndiv").setFieldLabel("");fext_BS(comp.down("#carg_id"),"","rrhh.CargosCbo");fext_CC("rrhh.TrabjE"+fjsLpad(comp.getTE(),2,"0")).rte(comp);},
rte_btn:function(btn,e,o){fext_CC("rrhh.TrabjEB").rte(btn);},
rte_idBlur:function(txtf,The,o){this.rte_idS(txtf.up("window"),0);},
rte_idFocus:function(txtf,The,o){this.rte_idS(txtf.up("window"),1);},
rte_idKP:function(txtf,e,o){if(e.getCharCode()==13){this.rte_idS(txtf.up("window"),13);}},
rte_idS:function(poCC,pcT){fext_fieldSearch(pcT,poCC,["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"],["php/public_individuos_json_records.php","xxIndiv_dni","textfield_search","","","","xxTipdocident_id","tipdocident_id"],1,["Siace.view.pub.IndividuosE","Nuevo Registro de Identidad ::.",["indiv_dni","tipdocident","tipdocident_id",0],"","pub.IndividuosE",poCC.getMI()]);},
rte_tdiChange:function(cbo,newV,oldV,o){this.rte_idS(cbo.up("window"),0);}
});