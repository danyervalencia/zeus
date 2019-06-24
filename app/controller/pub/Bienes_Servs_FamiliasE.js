Ext.define("Siace.controller.pub.Bienes_Servs_FamiliasE",{extend:"Ext.app.Controller",views:["pub.Bienes_Servs_FamiliasE"],
init:function(application){this.control({
"pub_bsfe":{beforeshow:this.pbsfe_BS},"pub_bsfe #btnSave":{click:this.pbsfe_btnSav},"pub_bsfe #btnUndo":{click:this.pbsfe_btnExt},"pub_bsfe #btnExit":{click:this.pbsfe_btnExt},
"pub_bsfe #bsf_code":{blur:this.pbsfe_bsf_codeBlur},"pub_bsfe #bsf_estado":{change:this.pbsfe_bsf_estadoChg},"pub_bsfe #bsg_id":{change:this.pbsfe_bsg_idChg},"pub_bsfe #bst_id":{change:this.pbsfe_bst_idChg},
});},
pbsfe_BS:function(comp,opt){fextpub_bsgParam({pan:comp});fextpub_bscParam({pan:comp});fext_CC("pub.BSFE"+fjsLpad(comp.getTE(),2,"0")).pbsfe(comp);},
pbsfe_btnSav:function(btn,e,opt){fext_CC("pub.BSFES").pbsfes(btn);},
pbsfe_btnExt:function(btn,e,opt){btn.up("window").close();},
pbsfe_bsf_codeBlur:function(txtf,the,opt){if(txtf.getValue()*1>0){txtf.setValue(fjsLpad(txtf.getValue(),4,0));}},
pbsfe_bsf_estadoChng:function(chk,newV,oldV,opt){fext_removeAddCls(chk.up("window").down("#lblBs_estado"),newV?"lbl00303":"lbl00003",newV?"lbl00003":"lbl00303");},
pbsfe_bsg_idChg:function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(_w.getTE()==1||oldV!=undefined){fextpub_bscLoad({pan:_w});}},
pbsfe_bst_idChg: function(cbo,newV,oldV,opt){var _w=cbo.up("window");if(fjsIn_array(_w.getTE(),[1,11])||oldV!=undefined){fextpub_bsgLoad({pan:_w});}},
});