Ext.define("Siace.controller.log.PedBT2",{extend:"Ext.app.Controller",
lpb_sc:function(mod,r){if(r.length==1){var _t=mod.view.up("#tabLC");var _fg=r[0].data.coti_flga==98?true:"";fext_SDO(_t,"btnQuery","",3,_fg);fext_SDO(_t,"btnPrinter","",8,_fg);fext_SDO(_t,"btnCuadro","",5023,_fg);}}
});