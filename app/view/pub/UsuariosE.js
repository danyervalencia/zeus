Ext.define("Siace.view.pub.UsuariosE",{extend:"Siace.view.WindowEdit",alias:"widget.pubusure",width:580,items:[
{xtype:"form",bodyPadding:8,border:true,defaults:{labelWidth:65},items:[{xtype:"hiddenfield",itemId:"usur_id",name:"usur_id"},
	{xtype:"fieldcontainer",fieldLabel:"Usuario",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"hiddenfield",itemId:"indiv_key",name:"indiv_key"},{xtype:"hiddenfield",itemId:"indiv_id",name:"indiv_id"},{xtype:"hiddenfield",itemId:"INDIV_DNI",name:"INDIV_DNI"},
		{xtype:"comp_txttop",itemId:"indiv_dni",name:"indiv_dni",enableKeyEvents:true,maxLength:12,width:95},{xtype:"comp_btn_imgsearch",itemId:"btnIndiv_search"},{xtype:"displayfield",itemId:"indiv_apenom",name:"indiv_apenom",fieldCls:"df00101"}
	]},
	{xtype:"comp_txt",itemId:"usur_login",name:"usur_login",fieldLabel:"Login",maxLength:15,minLength:3,width:190},
	{xtype:"comp_txt",itemId:"usur_psw1",name:"usur_psw1",enableKeyEvents:true,fieldLabel:"Clave",inputType:"password",vtype:"customPass",width:190},
	{xtype:"comp_txtarea",itemId:"usur_observ",name:"usur_observ",fieldLabel:"Comentario",anchor:"100%"}
]}],
__compPIS:null,setCompPIS:function(poComp){this.__compPIS=poComp;},getCompPIS:function(){return this.__ompPIS;}
});