Ext.define("Siace.controller.bud.LiqR",{extend:"Ext.app.Controller",
blr_chg:function(obj,newV){var _p=obj.up("#pan");var _ii=fext_oii(obj).substr(0,3);
	if(fjsIn_array(_ii,["pro","yea"])){var _pc=fext_GV(_p,"proy_code");var _yi=fext_GV(_p,"year_id")*1;
		if(_pc==""||_yi<=0){fext_GSR(_p,"meta_id");fext_SV(_p,"meta_id","");fext_Dsb(_p,"meta_id");}else{fextbud_metasLoad({pan:_p,psc:_pc});fext_SD(_p,"meta_id",false);}
	}
}
});