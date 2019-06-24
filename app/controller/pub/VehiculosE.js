Ext.define("Siace.controller.pub.VehiculosE",{extend:"Ext.app.Controller",stores:["array.TipDocIdentVentaAB"],views:["pub.VehiculosE"],
init: function(application) {this.control({
"pub_vehe":{beforeshow:this.pve_BS,},"pub_vehe #btnSave":{click:this.pve_btnSav},"pub_vehe #btnUndo":{click:this.pve_btnExt},"pub_vehe #btnExit":{click:this.pve_btnExt},
"pub_vehe #btnPIS":{click:this.pve_btnPIS},"pub_vehe #btnVeh_pdfDel":{click:this.pve_btnVeh_pdfDel},"pub_vehe #btnVeh_pdfDow":{click:this.pve_btnVeh_pdfDow},
"pub_vehe #marc_id":{change:this.pve_marc_idChange},
"pub_vehe #ffiVeh_pdf":{change:this.pve_ffiVeh_pdfChange},
"pub_vehe #tipdocident_id":{change:this.pve_tdiChg}
});},
pve_BS:function(comp,opt){var _TE=comp.getTE();var _frm=comp.down("form");var _cboTVI=comp.down("#tipveh_id");var _cboPI=comp.down("#pais_id");var _cboMI=comp.down("#marc_id");var _cboMOI=comp.down("#mod_id");
	_cboTVI.bindStore(fext_CS("pub.Tipos_VehiculoCbo"));_cboTVI.getStore().load({params:{xxType_record:"cbo",xxAdd_blank:"YES"}});
	_cboPI.bindStore(fext_CS("pub.PaisesCbo"));_cboPI.getStore().load({params:{xxType_record:"cboA2"}});
	_cboMI.bindStore(fext_CS("pub.Bienes_Servs_Clases_MarcasCbo"));_cboMI.getStore().load({params:{xxBsc_id:149,xxType_record:"cbo",xxAdd_blank:"YES"}});
	var _strMO=fext_CS("pub.ModelosCbo");_cboMOI.bindStore(_strMO);_strMO.on("beforeload",function(str,oper,opt){var _prx=str.getProxy();_prx.setExtraParam("xxMarc_id",fext_GV(comp,"marc_id"));_prx.setExtraParam("xxType_record","cbo");_prx.setExtraParam("xxOrder_by","mod_nombre");_prx.setExtraParam("xxAdd_blank","YES");});
	fextpub_yearFilt({obj:comp.down("#year_id")});comp.down("#cntIndiv").setFieldLabel("");comp.down("#cntPers").setFieldLabel("");
	fext_CC("pub.VehE0"+_TE).pve(comp);
},
pve_btnSav:function(btn,e,o){fext_CC("pub.VehES").pve(btn);},
pve_btnExt:function(btn,e,o){btn.up("window").close();},
pve_marc_idChange:function(cbo,newV,oldV,o){var _w=cbo.up("window");if(newV==0){fext_GSR(_w,"mod_id");}else{fext_GS(_w,"mod_id").load();}},
pve_tdiChg:function(cbo,newV,oldV,o){var _w=cbo.up("window");var _TE=_w.getTE();
	if(newV==1){fext_SVI(_w,"cntPers",false);fext_SVI(_w,"cntIndiv",true);fext_Dsb(_w,"",["pers_ruc","btnPPS"]);if(fjsIn_array(_TE,[1,2])){fext_SD(_w,"",false,["indiv_dni","btnPIS"]);}fext_SV(_w,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre"]);}
	else if(newV==3){fext_SVI(_w,"cntPers",true);fext_SVI(_w,"cntIndiv",false);fext_Dsb(_w,"",["indiv_dni","btnPIS"]);if(fjsIn_array(_TE,[1,2])){fext_SD(_w,"",false,["pers_ruc","btnPPS"]);}fext_SV(_w,"","",["indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}
	else{fext_Dsb(_w,"",["pers_ruc","btnPPS","indiv_dni","btnPIS"]);if(fjsIn_array(_TE,[1,2])){fext_SV(_w,"","",["pers_key","PERS_RUC","pers_ruc","pers_nombre","indiv_key","INDIV_DNI","indiv_dni","indiv_apenom"]);}}
}
});