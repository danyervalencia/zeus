Ext.define("Siace.controller.log.PedBCT3D",{extend:"Ext.app.Controller",
lpb:function(r){if(r.data.coti_file1!==""){var _src="php/resources/download_file.php?xxSchema_table=logistics.cotizaciones&xxTable_field=coti_key&xxRecord_key="+r.data.coti_key+"&xxSystem=LP&xxTable=logistics_cotizaciones&xxField=file1&xxRecord_id=coti_id&xxRecord_field=coti_file1";fext_FileDown(undefined,_src);}}
});