Ext.define("Siace.controller.tre.EgreE03",{extend:"Ext.app.Controller",
tee:function(poC){poC.setIconCls("icon_Query_90");poC.setTitle("Consulta Cromprobante de Pago ::.");var _frm=poC.down("form");var _cboCB=poC.down("#cuebanc_key");fext_Dsb(poC,"",["egre_nro","tablex_doc","tablex_nro"]);
	_frm.load({method:"POST",url:"php/treasury_egresos_json_records.php",waitMsg:"Loading...",params:{xxEgre_key:poC.getCK(),ssNO_YEAR:"NoT",ssNO_USK:poC.getNUK(),xxType_record:"frm",xxMenu_id:poC.getMI(),vs:fext_JE(fextpub_sessVar())},
		success:function(frm,act){
			try{var _res=fext_DJ(act);var _d=_res.data[0];var _md=fext_CM("tre.EgresoE");_md.set(_d);_frm.loadRecord(_md);
				fext_SV(poC,"egre_nro",fjsLpad(_d.egre_nro,6,0));fext_SV(poC,"egre_fecha",fjsDateDDMMAAAA(_d.egre_fecha));fext_SV(poC,"tablex_nro",fjsLpad(_d.tablex_nro,6,"0"));
			    if(_d.tipdocident_id==1){fext_SV(poC,"indiv_key",_d.pers_key);fext_SV(poC,"indiv_dni",_d.pers_ruc);fext_SV(poC,"indiv_apenom",_d.pers_nombre);}else{fext_SV(poC,"pers_key",_d.pers_key);fext_SV(poC,"pers_ruc",_d.pers_ruc);fext_SV(poC,"pers_nombre",_d.pers_nombre);}
			    _cboCB.getStore().load({params:{xxType_record:"cboComprob",xxOrder_by:"cuebanc_nrobanco",xxAdd_blank:"YES"},callback:function(r,oper,succ){_cboCB.setValue(_d.cuebanc_key);}});_me.tee_tablexS(poC);
			}catch(x){fext_MsgC(x.Message);}
		}
	});
	fext_Dsb(poC,"",["tipdocident_id","egre_monto","cuebanc_key","cheq_nro","cheq_nrob","egre_observ","egre_otros","btnSave","btnUndo"]);poC.down("#btnExit").enable();
}
});