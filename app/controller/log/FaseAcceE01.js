Ext.define("Siace.controller.log.FaseAcceE01",{extend:"Ext.app.Controller",
lfa:function(poC){poC.setIconCls("icon_New_90");poC.setTitle("Nuevo Acceso a Fase ::.");
	fextpub_cargusurFilt({obj:poC.down("#cargusur_id"),TR:"cbo",OB:"cargusur_orden",AB:"NOT",setVal:false});
	fextpub_tabgenFilt({obj:poC.down("#faseacce_type"),tgp:5030,AB:"NOT",setVal:false});
}
});