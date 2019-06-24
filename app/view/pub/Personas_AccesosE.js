Ext.define("Siace.view.pub.Personas_AccesosE",{extend:"Siace.view.WindowEdit",alias:"widget.pub_persaccee",width:450,items:[
{xtype:"form",bodyPadding:8,border:true,width:"100%",defaults:{labelWidth:65},items:[{xtype:"hiddenfield",itemId:"pers_key",name:"pers_key"},
	{xtype:"displayfield",itemId:"pers_ruc",fieldLabel:"Registro",fieldCls:"df00104",labelClsExtra:"lbl00101",margin:"-5 0 0 0",submitValue:false,width:"100%"},
	{xtype:"displayfield",itemId:"pers_nombre",fieldLabel:"Rz. Social",fieldCls:"df00104",labelClsExtra:"lbl00101",margin:"-5 0 2 0",submitValue:false,width:"100%"},
	{xtype:"comp_date",itemId:"persacce_fecha",name:"persacce_fecha",fieldLabel:"Fecha",allowBlank:false,disabled:true,width:175},
	{xtype:"comp_txt",itemId:"clav_id",name:"clav_id",fieldLabel:"Código",maxLength:10,vtype:"onlyNumeric",width:175},
	{xtype:"container",layout:"hbox",width:"100%",items:[{xtype:"hiddenfield",itemId:"indiv_key",name:"indiv_key"},{xtype:"hiddenfield",itemId:"INDIV_DNI",name:"INDIV_DNI"},
		{xtype:"comp_txt",itemId:"indiv_dni",name:"indiv_dni",enableKeyEvents:true,fieldLabel:"Recibe",labelWidth:65,margin:"0 4 4 0",maxLength:15,width:150},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"indiv_apenom",name:"indiv_apenom",fieldCls:"df00101"}
	]},
	{xtype:"comp_txtarea",itemId:"persacce_observ",name:"persacce_observ",fieldLabel:"Comentario",labelWidth:65,anchor:"100%"}
]}],
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;}, getCompPIS:function(){return this.__compPIS;}
});