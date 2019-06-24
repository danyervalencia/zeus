Ext.define("Siace.controller.pub.PaisDptoPrvnDstt",{extend: "Ext.app.Controller",views:["pub.PaisDptoPrvnDstt"],
init:function(application){this.control({
"pub_paisdptoprvndstt":{loaddata:this.ppdpd_LoadData},"pub_paisdptoprvndstt #dpto_id":{blur:this.ppdpd_dpto_idBlur,focus:this.ppdpd_dpto_idFocus},"pub_paisdptoprvndstt #pais_id":{blur:this.ppdpd_pais_idBlur,change:this.ppdpd_pais_idChange,focus:this.ppdpd_pais_idFocus},"pub_paisdptoprvndstt #prvn_id":{blur:this.ppdpd_prvn_idBlur,focus:this.ppdpd_prvn_idFocus}
});},
ppdpd_LoadData:function(poC,pbDsb,pnPI,pnDI,pnPRI,pnDSI){
poC.down("#pais_id").setValue(pnPI*1); poC.down("#pais_id").setDisabled(pbDsb);var _cboDI=poC.down("#dpto_id");
_cboDI.getStore().load({params:{xxPais_id:pnPI,xxType_record:"cbo",xxAdd_blank:"YES"},
callback:function(rec,oper,succ){
	if(_cboDI.getStore().getCount()>1){_cboDI.setDisabled(pbDsb);_cboDI.setValue(pnDI*1);}else{_cboDI.disable();_cboDI.setValue("");}
	if(pnDI*1>0){var _cboPI=poC.down("#prvn_id");
		_cboPI.getStore().load({params:{xxDpto_id:pnDI,xxType_record:"cbo",xxAdd_blank:"YES"},
		callback:function(rec,oper,succ){
			if(rec.length>0){_cboPI.setDisabled(pbDsb);_cboPI.setValue(pnPRI*1);}else{_cboPI.disable();_cboPI.setValue("");}
			if(pnPRI*1>0){var _cboDS=poC.down("#dstt_id");
				_cboDS.getStore().load({params:{xxPrvn_id:pnPRI,xxType_record:"cbo",xxAdd_blank:"YES"},
				callback:function(rec,oper,succ){
					if(rec.length>0){_cboDS.setDisabled(pbDsb);_cboDS.setValue(pnDSI*1);}else{_cboDS.disable();_cboDS.setValue("");}
					if(pbDsb==false){poC.setChangeEnabled(true);}
				}});
			}else{if(pbDsb==false){poC.setChangeEnabled(true);}}
		}});
	}else{if(pbDsb==false){poC.setChangeEnabled(true);}}
}});
},
ppdpd_dpto_idBlur:function(cbo,The,opt){if(cbo.getValue()!=cbo.setValueTag()){this.ppdpd_dpto_idChangePrvn(cbo.up("container").up("container"),cbo.getValue());}},
ppdpd_dpto_idFocus:function(cbo,The,opt){cbo.setValueTag(cbo.getValue());},
ppdpd_dpto_idChangePrvn:function(poCont,pnDI){var _cboPI=poCont.down("#prvn_id");
if(pnDI*1>0){_cboPI.getStore().load({params:{xxDpto_id:pnDI,xxType_record:"cbo",xxAdd_blank:"YES"},
	callback:function(rec){if(rec.length>0){_cboPI.enable();_cboPI.setValue(rec[0].data.prvn_id);}else{_cboPI.disable();_cboPI.setValue("");}}});_cboPI.enable();
}else{_cboPI.getStore().removeAll();_cboPI.setValue("");_cboPI.disable();}
var _cboDS=poCont.down("#dstt_id");_cboDS.getStore().removeAll();_cboDS.setValue("");_cboDS.disable();
},
ppdpd_prvn_idBlur:function(cbo,The,opt){if(cbo.getValue()!=cbo.setValueTag()){this.ppdpd_prvn_idChangeDstt(cbo.up("container").up("container"),cbo.getValue());}},
ppdpd_prvn_idFocus:function(cbo,The,opt){cbo.setValueTag(cbo.getValue());},
ppdpd_prvn_idChangeDstt:function(poCont,pnPRI){var _cboDS=poCont.down("#dstt_id");
if(pnPRI*1>0){
	_cboDS.getStore().load({params:{xxPrvn_id:pnPRI,xxType_record:"cbo",xxAdd_blank:"YES"},
	callback:function(rec,oper,succ){if(rec.length>0){_cboDS.enable();_cboDS.setValue(rec[0].data.dstt_id);}else{_cboDS.disable();_cboDS.setValue("");}}});_cboDS.enable();
}else{_cboDS.getStore().removeAll();_cboDS.setValue("");_cboDS.disable();}},
ppdpd_pais_idBlur:function(cbo,The,opt){if(cbo.getValue()!=cbo.setValueTag()){this.ppdpd_pais_idChangeDpto(cbo.up("container").up("container"),cbo.getValue());}},
ppdpd_pais_idFocus:function(cbo,The,opt){cbo.setValueTag(cbo.getValue());},
ppdpd_pais_idChange:function(cbo,newVal,oldVal,opt){var _cnt=cbo.up("container").up("container");
if(oldVal==undefined&&_cnt.getChangeEnabled()==true){_cnt.setChangeEnabled(false);this.ppdpd_pais_idChangeDpto(_cnt,newVal);}
},
ppdpd_pais_idChangeDpto:function(poCont,pnPI){var _cboDI=poCont.down("#dpto_id");
_cboDI.getStore().load({params:{xxPais_id:pnPI,xxType_record:"cbo",xxAdd_blank:"YES"},callback:function(rec){if(rec.length>0){_cboDI.enable();_cboDI.setValue(rec[0].data.dpto_id);}else{_cboDI.disable();_cboDI.setValue("");}}});
var _cboPI=poCont.down("#prvn_id");_cboPI.getStore().removeAll();_cboPI.setValue("");_cboPI.disable();
var _cboDS=poCont.down("#dstt_id");_cboDS.getStore().removeAll();_cboDS.setValue("");_cboDS.disable();
}
});