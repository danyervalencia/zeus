Ext.define("Siace.view.pub.UsuariosPsw2",{extend:"Siace.view.WinPsw",alias:"widget.pub_usurpsw2",iconCls:"icon_key",title:"Clave de validación",width:400,items:[
{xtype:"form",bodyPadding:10,defaults:{anchor:"100%",labelWidth:60},frame:false,items:[{xtype:"displayfield",itemId:"subtitle",fieldCls:"df00105",value:""},	
	{xtype:"comp_txt",id:"txtUsur_psw2",itemId:"usur_psw2",fieldLabel:"Clave",allowBlank:false,enableKeyEvents:true,inputType:"password",minLength:3,maxLength:15},
	{xtype:"comp_txtarea",itemId:"observ",fieldLabel:"Comentario"},{xtype:"displayfield",itemId:"warning",fieldCls:"df00302"}
]}],
__w:"",setW:function(pcW){this.__w=pcW;},getW:function(){return this.__w;},__a:"",setA:function(pcA){this.__a=pcA;},getA:function(){return this.__a;},__ft:"07",setFT:function(pcFT){this.__ft=pcFT;},getFT:function(){return this.__ft;}
});