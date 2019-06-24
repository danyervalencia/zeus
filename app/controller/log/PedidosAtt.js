Ext.define("Siace.controller.log.PedidosAtt",{extend:"Ext.app.Controller",views:["log.PedidosAtt"],
init:function(application){this.control({"log_pedatt":{beforeshow:this.lpa_BS},"log_pedatt #btnF1":{click:this.lpa_btn},"log_pedatt #btnF2":{click:this.lpa_btn}});},
lpa_BS:function(comp,o){var _frm=comp.down("form");
	_frm.load({method:"POST",url:"php/logistics_pedidos_ettr_json_records.php",waitMsg:"Loading...",params:{xxPed_key:comp.getCK(),xxType_record:"attachments",vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){try{var _md=fext_CM("log.Pedido_EttrAttach");var _res=fext_DJ(act);if(_res.data[0]){_md.set(_res.data[0]);_frm.loadRecord(_md);if(_md.data.pedettr_file1!=""){_frm.down("#btnF1").enable();_frm.down("#btnF1").setTooltip(" Interno ");}if(_md.data.pedettr_file2!==""){_frm.down("#btnF2").enable();_frm.down("#btnF2").setTooltip(" Proveedor ");}}}catch(x){fext_MsgC(x.Message);}
	}});
},
lpa_btn:function(btn,e,o){var _w=btn.up("window");var _TE=fext_btnTE(btn).substr(1);var _src="php/resources/download_file.php?xxTable=logistics_pedidos_ettr&xxField=file"+_TE+"&xxFile_name="+fext_GV(_w,"pedettr_key")+"_"+fext_GV(_w,"pedettr_file"+_TE);fext_FileDown(undefined,_src);}
});