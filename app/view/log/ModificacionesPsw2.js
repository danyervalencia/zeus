Ext.define("Siace.view.log.ModificacionesPsw2",{extend:"Siace.view.WinPsw",alias:"widget.log_modifpsw2",iconCls:"icon_key",title:"VoBo Ajuste Requerimiento ::.",width:400,items:[
{xtype:"form",bodyPadding:10,defaults:{anchor:"100%",labelWidth:60},frame:false,items:[
	{xtype:"displayfield",itemId:"subtitle",fieldCls:"df00105",value:""},
	{xtype:"comp_txt",itemId:"usur_psw2",id:"txtUsur_psw2",enableKeyEvents:true,fieldLabel:"Clave",allowBlank:false,inputType:"password",minLength:8,maxLength:15},
	{xtype:"comp_txtarea",itemId:"observ",fieldLabel:"Comentario"},{xtype:"displayfield",itemId:"warning",fieldCls:"df00302"}
]}],
__w:"",__ft:"07",
setW:function(pcW){this.__w=pcW;},getW:function(){return this.__w;},
setFT:function(pcFT){this.__ft=pcFT;},getFT:function(){return this.__ft;},
});