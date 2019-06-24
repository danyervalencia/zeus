Ext.define("Siace.view.pub.UsuariosEPswav",{extend:"Siace.view.WinPsw",alias:"widget.pub_usurepswav",iconCls:"icon_Modify_90",title:"Cambiar Claves de Usuario ::.",width:320,items:[
{xtype:"form",bodyPadding:8,border:true,defaults:{labelWidth:100,anchor:"100%"},items:[
	{xtype:"comp_txt",itemId:"usur_psw1",name:"usur_psw1",enableKeyEvents:true,fieldLabel:"Clave de Acceso",inputType:"password",vtype:"customPass"},
	{xtype:"comp_txt",itemId:"usur_psw1c",fieldLabel:"Confirmar Clave",inputType:"password"},
	{xtype:"displayfield",value:" "},
	{xtype:"comp_txt",itemId:"usur_psw2",name:"usur_psw2",enableKeyEvents:true,fieldLabel:"Clave de Validación",inputType:"password",vtype:"customPass"},
	{xtype:"comp_txt",itemId:"usur_psw2c",fieldLabel:"Confirmar Clave",inputType:"password"}
]}]
});