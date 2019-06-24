Ext.define("Siace.controller.log.Fases_AccesosE",{extend:"Ext.app.Controller",stores:["array.DocFase"],views:["log.Fases_AccesosE"],
init:function(application){this.control({
"log_faseaccee":{beforeshow:this.lfae_BS},"log_faseaccee #btnSave":{click:this.lfae_btnSav},"log_faseaccee #btnUndo":{click:this.lfae_btnExt},"log_faseaccee #btnExit":{click:this.lfae_btnExt},
"log_faseaccee #doc_id":{change:this.lfae_diChg},
"log_faseaccee #faseacce_estado":{change:this.lfae_faeChg},"log_faseaccee #faseacce_vobo":{change:this.lfae_favChg}
});},
lfae_BS:function(comp,opt){fextpub_areasFilt({obj:comp.down("#area_key"),ak:comp.getAK(),nuk:"NoT",TR:"cbo",dsb:true,val:comp.getAK()});fext_BS(comp,"fase_id","log.FasesCbo");fext_BS(comp,"fase_next","log.FasesCbo");
	fext_CC("log.FaseAcceE"+(fjsLpad(comp.getTE(),2,"0"))).lfa(comp);
},
lfae_btnSav:function(btn,e,opt){fext_CC("log.FaseAcceES").lfae(btn);},
lfae_diChg: function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==1){_w.down("#fase_id").getStore().load({params:{xxDoc_id:newV,xxFase_esvobo:1,xxType_record:"cbo"}});_w.down("#fase_next").getStore().load({params:{xxDoc_id:newV,xxFase_esvobo:1,xxType_record:"cbo",xxAdd_blank:"YES"}});}},
lfae_btnExt:function(btn,e,opt){btn.up("window").close();},
lfae_faeChg: function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblFaseacce_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
lfae_favChg:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblFaseacce_vobo"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");}
});