Ext.define("Siace.controller.tre.EgresosOK",{extend:"Ext.app.Controller",views:["tre.EgresosOK"],
init:function(application){this.control({"tre_egreok":{beforeshow:this.teo_BS},"tre_egreok #btnNew":{click:this.teo_btnNew},"tre_egreok #btnPrinter":{click:this.teo_btnPrinter},"tre_egreok #btnExit":{click:this.teo_btnExit}});},
teo_BS:function(comp,opt){var _vs=fextpub_sessVar();comp.down("#btnNew").enable();
	Ext.Ajax.request({method:"POST",url:"php/treasury_egresos_json_records.php",params:{xxEgre_key:comp.getCK(),xxType_record:"save_ok",xxOrder_by:"egre_documento",ssNO_USK:"NoT",vs:fext_JE(fextpub_sessVar())},
		success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){comp.down("#doc_nombre").setText(_res.data[0].doc_nombre.toUpperCase());comp.down("#egre_documento").setText(_res.data[0].egre_documento);comp.down("#egre_document").setValue(_res.data[0].egre_document);}}
	});
},
teo_btnNew:function(btn,e,opt){var _w=btn.up("window");var _cc=_w.getCC();fext_CC("tre.EgresosE").tee_tablexS(_cc);fext_SV(_cc,"egre_nro","");fext_SV(_cc,"cuebanc_key","");fext_SV(_cc,"cheq_nro","");fext_SV(_cc,"cheq_nrob","");_w.close()},
teo_btnPrinter:function(btn,e,opt){var _vs=fextpub_sessVar();var _w=Ext.create("Ext.Window",{title:"Comprobante de Pago",width :700,height:500,iconCls:"icon_Pdf_90"});
	_w.add({xtype:"panel",layout:"fit",width:"100%",height:"100%",html:"loading PDF...",items:[{xtype:"uxiframe",src:"php/pdf/pdf_treasury_egresos_printer.php?xxEgre_key="+btn.up("window").getCK()+"&xxType_rec=printer&zzUsursess_key="+_vs["us"]+"&zzUsuracce_key="+_vs["ua"]+"&zzYear_id="+_vs["y"]+"&zzArea_key="+_vs["a"]}]});_w.show();
},
teo_btnExit:function(btn,e,opt){var _w=btn.up("window");if(_w.getCS()!==null){_w.getCS().load();}_w.getCC().close();_w.close();}
});