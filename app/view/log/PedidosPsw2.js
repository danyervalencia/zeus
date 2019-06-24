Ext.define("Siace.view.log.PedidosPsw2",{extend:"Siace.view.WinPsw",alias:"widget.log_pedpsw2",iconCls:"icon_key",title:"Registro de Validación ::.",width:400,items:[
{xtype:"form",bodyPadding:4,defaults:{anchor:"100%",labelWidth:60},frame:false,items:[{xtype:"hiddenfield",itemId:"ped_key"},{xtype:"displayfield",itemId:"subtitle",fieldCls:"df00105",value:""},
	{xtype:"comp_txt",itemId:"usur_psw2",id:"txtUsur_psw2",enableKeyEvents:true,fieldLabel:"Clave",allowBlank:false,inputType:"password",minLength:8,maxLength:15},
	{xtype:"comp_cbo",itemId:"categ_id",valueField:"tabgen_id",displayField:"tabgen_nombre",disabled:true,tpl:"<tpl for='.'><div class='x-boundlist-item'>{tabgen_nombre}&nbsp;</div></tpl>",fieldLabel:"Categoría",hidden:true,listConfig:{cls:"item00001",minWidth:"100%"}},
	{xtype:"comp_curr",itemId:"certif_nro",anchor:"",disabled:true,fieldLabel:"Certificado",hidden:true,maxLength:8,numberDecimal:0,width:150},
	{xtype:"comp_cbo",itemId:"usuracce_key",valueField:"usuracce_key",displayField:"indiv_apenom",disabled:true,tpl:"<tpl for='.'><div class='x-boundlist-item'>{indiv_apenom}&nbsp;</div></tpl>",fieldLabel:"Cotizador",hidden:true,listConfig:{cls:"item00001",minWidth:"100%"}},
	{xtype:"container",itemId:"cntWeb",hidden:true,layout:"hbox",margin: "0 0 5 0",width:"100%",items:[{xtype:"displayfield",width:70},
		{xtype:"checkbox",itemId:"pedweb_estado",name:"pedweb_estado",checked:false,disabled:true,width:13},{xtype:"label",itemId:"lblPedweb_estado",cls:"lbl00301",padding:"4 0 0 0",text:"\xa0 Publicar en Página Web",width:140},{xtype:"displayfield",flex:1},
		{xtype:"comp_curr",itemId:"pedweb_dias",fieldLabel:"Nro.días",labelWidth:55,disabled:true,maxLength:3,numberDecimal:0,width:105},
	]},
	{xtype:"comp_txtarea",itemId:"observ",fieldLabel:"Comentario"},{xtype:"displayfield",itemId:"warning",fieldCls:"df00302"}
]}],
_w:"",setW:function(pcW){this._w=pcW;},getW:function(){return this._w;},_ft:"07",setFT:function(pcFT){this._ft=pcFT;},getFT:function(){return this._ft;}
});