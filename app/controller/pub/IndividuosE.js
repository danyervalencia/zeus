Ext.define("Siace.controller.pub.IndividuosE",{extend:"Ext.app.Controller",stores:["array.TipSex","array.TipEstaCiv"],views:["pub.IndividuosE"],
init:function(application){this.control({
"pub_indive":{beforeshow:this.pie_BS},"pub_indive #btnSave":{click:this.pie_btnSav},"pub_indive #btnUndo":{click:this.pie_btnExt},"pub_indive #btnExit":{click:this.pie_btnExt},
"pub_indive #btnIndiv_fotoDelete":{click:this.pie_btnFotoDel},"pub_indive #btnIndiv_pdfDelete":{click:this.pie_btnPdfDel},"pub_indive #btnIndiv_pdfDownload":{click:this.pie_btnPdfDow},
"pub_indive #tipdocident_id":{change:this.pie_tdiiChg},
"pub_indive #ffiIndiv_foto":{change:this.pie_ffiFotoChg},"pub_indive #ffiIndiv_pdf":{change:this.pie_ffiPdfChg}
});},
pie_BS:function(comp,opt){comp.down("#cntPdpd").setStores(true);fext_CC("pub.PaisDptoPrvnDstt");fext_CC("pub.IndivE0"+comp.getTE()).pie(comp);},
pie_btnSav:function(btn,e,o){fext_CC("pub.IndivES").pie(btn);},
pie_btnExt:function(btn,e,opt){btn.up("window").close();},
pie_btnFotoDel:function(btn,e,opt){var _w=btn.up("window");_w.down("#imgIndiv_foto").setSrc("");_w.down("#ffiIndiv_foto").reset();_w.down("#indiv_foto").setValue("");btn.setDisabled(true);btn.setTooltip("");},
pie_btnPdfDel:function(btn,e,opt){var _w=btn.up("window");_w.down("#ffiIndiv_pdf").reset();fext_SV(_w,"indiv_pdf","");_w.down("#ffiIndiv_pdf").show();btn.hide();fext_SD(_w,"btnIndiv_pdfDownload",true);},
pie_btnPdfDow:function(btn,e,opt){var _w=btn.up("window");var _file=_w.down("#ffiIndiv_pdf").fileInputEl.dom.files[0];var _src="php/resources/download_file.php?xxTable=public_individuos&xxField=pdf&xxFile_name="+_w.getCK()+"_"+fext_GV(_w,"indiv_pdf");fext_FileDownload(_file,_src);},
pie_ffiFotoChg:function(filf,val,opt){var _r=fext_FileReader(filf,/image/,"[IMAGEN]",102400,"100 Kb","","");
	if(_r!==""){var _pict=this.getPie_imgIndiv_foto();_r.onload=function(e){_pict.setSrc( e.target.result );};var _btn=filf.up("form").down("#btnIndiv_fotoDelete");_btn.enable();_btn.setTooltip(" Quitar foto ");}
},
pie_ffiPdfChg:function(filf,val,opt){var _w=filf.up("window");fext_FileReader(filf,/pdf/,"[PDF]",1048576,"1MB",_w.down("#btnIndiv_pdfDelete"),_w.down("#btnIndiv_pdfDownload"));},
pie_tdiiChg:function(cbo,newV,oldV,opt){_pi=cbo.getStore().findRecord("tipdocident_id",cbo.getValue()).data["pais_id"];
	var _cboPI=cbo.up("form").down("#pais_id");if(_pi*1>0){_cboPI.setDisabled("disabled");_cboPI.setValue(_pi);}else{_cboPI.setDisabled(false);}
}
});