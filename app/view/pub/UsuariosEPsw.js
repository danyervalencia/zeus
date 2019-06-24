Ext.define("Siace.view.pub.UsuariosEPsw",{extend:"Siace.view.WinCnf",alias:"widget.pub_usurepsw",width:300,items:[
{xtype:"form",bodyPadding:8,border:true,defaults:{labelWidth:90,anchor:"100%"},items:[
{xtype:"comp_txt",itemId:"usur_pswa",fieldLabel:"Clave Actual",inputType:"password",width:190},
{xtype:"comp_txt",itemId:"usur_pswn",id:"usur_pswn",enableKeyEvents:true,fieldLabel:"Nueva Clave",inputType:"password",vtype:"customPass",width:190},
{xtype:"comp_txt",itemId:"usur_pswc",id:"usur_pswc",enableKeyEvents:true,fieldLabel:"Confirmar Clave",inputType:"password",width:190}
]}]
});