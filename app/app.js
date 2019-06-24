Ext.Loader.setConfig({enabled:true,paths:{"Ext.ux":"extjs/ux","Siace.util":"app/util"}});
Ext.application({name:"Siace",requires:[
"Siace.util.Alert","Siace.proxy.General","Siace.util.MD5","Siace.util.Util","Siace.util.SessionMonitor","Ext.ux.CurrencyField","Ext.ux.NumericField","Ext.ux.IFrame",
"Siace.view.PanB1","Siace.view.PanR1","Siace.view.TpnB1","Siace.view.TpnR1","Siace.view.TabB1",
"Siace.view.comp.BtnAccept","Siace.view.comp.BtnAdd","Siace.view.comp.BtnAnnular","Siace.view.comp.BtnAttach","Siace.view.comp.BtnCancel","Siace.view.comp.BtnDelete","Siace.view.comp.BtnDocuments","Siace.view.comp.BtnExcel","Siace.view.comp.BtnExit","Siace.view.comp.BtnFases","Siace.view.comp.BtnKey","Siace.view.comp.BtnModify","Siace.view.comp.BtnNew","Siace.view.comp.BtnPdf","Siace.view.comp.BtnPrinter","Siace.view.comp.BtnQuery","Siace.view.comp.BtnSave","Siace.view.comp.BtnUndo","Siace.view.comp.BtnVobo",
"Siace.view.comp.Btn_imgModify","Siace.view.comp.Btn_imgNew","Siace.view.comp.Btn_imgPdf","Siace.view.comp.Btn_imgSearch",
"Siace.view.comp.Chk","Siace.view.comp.Cbo","Siace.view.comp.CboOpc","Siace.view.comp.CboTop","Siace.view.comp.Curr","Siace.view.comp.CurrTop",
"Siace.view.comp.Date","Siace.view.comp.DateTop","Siace.view.comp.FechaIni","Siace.view.comp.FechaFin","Siace.view.comp.Dato","Siace.view.comp.DatoFecha","Siace.view.comp.DatoMonto",
"Siace.view.comp.Fct","Siace.view.comp.File","Siace.view.comp.NroTop","Siace.view.comp.Number","Siace.view.comp.Grid","Siace.view.pub.PaisDptoPrvnDstt",
"Siace.view.comp.Pag","Siace.view.comp.Time","Siace.view.comp.Txt","Siace.view.comp.TxtTop","Siace.view.comp.TxtArea","Siace.view.comp.TxtAreaTop","Siace.view.comp.ToolTop","Siace.view.comp.ToolBtn","Siace.view.comp.FrmView",
"Siace.view.comp.log.Tipped_abrev",
"Siace.view.comp.pub.Area_abrev","Siace.view.comp.pub.Area_nombre","Siace.view.comp.pub.Bst_code","Siace.view.comp.pub.Bst_codeAB","Siace.view.comp.pub.Bsg_codeAB","Siace.view.comp.pub.Bsc_codeAB","Siace.view.comp.pub.Bsf_codeAB","Siace.view.comp.pub.Doc_abrevAB","Siace.view.comp.pub.Doc_nombre","Siace.view.comp.pub.Loc_codename","Siace.view.comp.pub.Menu","Siace.view.comp.pub.Year_code","Siace.view.comp.pub.Year_codeAB",
"Siace.view.comp.bud.Espedet_codename","Siace.view.comp.bud.Fuefin_code","Siace.view.comp.bud.Fuefin_codename","Siace.view.comp.bud.Fftr_codename","Siace.view.comp.bud.Secfunc_code","Siace.view.comp.bud.Secfunc_codename","Siace.view.comp.bud.Tarea_codigo","Siace.view.comp.bud.Tarea_codename","Siace.view.comp.bud.Tipgast_code","Siace.view.comp.bud.Tipgast_name","Siace.view.comp.bud.Tiprecur_code","Siace.view.comp.bud.Tiprecur_codename","Siace.view.comp.bud.Unieje_abrev","Siace.view.comp.bud.Unieje_nombre"],
controllers:["access.Login","access.Translation","access.Menus"],splashscreen:{},
init:function(){splashscreen=Ext.getBody().mask(trnslt.msg_init,"splashscreen");splashscreen.addCls("splashscreen");Ext.DomHelper.insertFirst(Ext.query(".x-mask-msg")[0],{cls:"x-splash-icon"});},
launch: function(){Ext.tip.QuickTipManager.init();
	var task=new Ext.util.DelayedTask(function(){splashscreen.fadeOut({duration:1000,remove:true});
		splashscreen.next().fadeOut({duration:1000,remove:true,listeners:{afteranimate:function(el,startTime,opt){Ext.Ajax.request({params:{xx0005:"OK"},url:"php/json_session_check.php",success:function(resp,opt){var _res=fext_DJ("",resp);if(_res.success){fext_CW("access.MainViewport");fjsUserSession(_res.data[0]);}else{Ext.widget("access_login");}},failure:function(resp,opt){Ext.widget("access_login");}});}}});
	});task.delay(2000);
}});

Ext.apply(Ext.form.field.VTypes,{
	contenedorPlaca:function(val,field){return /^([A-Z]{4})\-([0-9]{7})$/.test(val);},
	contenedorPlacaText:"Formato de Placa vehicular debe ser [A-Z]-[0-9]",contenedorPlacaMask:/[A-Z0-9\-]/,
	customPass:function(val,field){return /(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/.test(val);},
	customPassText:"Clave NO válida. Longitud debe ser entre 8 y 15 caracteres. Clave debe contener por lo menos: una letra minúscula, una letra mayuscula, un caracter especial y un número",

	daterange:function(val,field){var date=field.parseDate(val);if(!date){return false;}
		if(field.startDateField&&(!this.dateRangeMax||(date.getTime()!=this.dateRangeMax.getTime()))){var start=(field.up('form')==null?field.up('panel').down('#'+field.startDateField):field.up('form').down('#'+field.startDateField));start.setMaxValue(date);start.validate();this.dateRangeMax=date;}
		else if(field.endDateField&&(!this.dateRangeMin||(date.getTime()!=this.dateRangeMin.getTime()))){var end=(field.up('form')==null?field.up('panel').down('#'+field.endDateField):field.up('form').down('#'+field.endDateField));end.setMinValue(date);end.validate();this.dateRangeMin=date;}
		return true;
	},
	daterangeText:"Start date must be less than end date",

	IPAddress:function(val,field){return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(val);},
	IPAddressText:"Debe ser una dirección IP numérica",IPAddressMask:/[\d\.]/i,

	onlyNumeric:function(val,field){return /^([0-9])/.test(val);},
	onlyNumericText:"Solo se permiten números",onlyNumericMask:/[0-9]/,

	vehiculoPlaca:function(val,field){return /^([A-Z0-9]{1,5})\-([A-Z0-9]{1,5})$/.test(val);},
	vehiculoPlacaText:"Formato de Placa vehicular debe ser [A-Z o 0-9]-[A-Z o 0-9]",vehiculoPlacaMask:/[A-Z0-9\-]/,
});
