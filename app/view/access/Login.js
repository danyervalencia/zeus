Ext.define('Siace.view.access.Login',{extend:'Ext.window.Window',alias:'widget.access_login',autoShow:true,closable:false,closeAction:'hide',height:190,iconCls:'icon_Key',layout:{type:'fit'},resizable:false,title: 'Acceso al Sistema ::.',width:270,items:[
{xtype:'form',bodyPadding:10,frame:false,defaults:{anchor:'100%',labelWidth:65,msgTarget:'title'},items:[{xtype:'hiddenfield',itemId:'USUR_LOGIN'},
{xtype:'comp_cbo',itemId:'year_id',store:'array.Years',valueField:'year_id',displayField:'year_nro',fieldLabel:'Año Trabajo',listConfig:{cls:'item00001',minWidth:60},tpl:'<tpl for="."><div class="x-boundlist-item">{year_code}&nbsp;</div></tpl>',width:60},
{xtype:'comp_txt',itemId:'usur_login',fieldLabel:'Login',allowBlank:false,enableKeyEvents:true,minLength:3,maxLength:15},
{xtype:'comp_cbo',itemId:'area_key',valueField:'usuracce_key',displayField:'uniejearea_abrev',fieldLabel:'U. Orgánica',disabled:true,tpl:'<tpl for="."><div class="x-boundlist-item">{uniejearea_abrev}&nbsp;</div></tpl>',width:70},
{xtype:'comp_txt',itemId:'usur_psw1',name:'usur_psw1',id:'usur_psw1',fieldLabel:'Clave',allowBlank:false,enableKeyEvents:true,inputType:'password',minLength:3,maxLength:15}
],
dockedItems:[{xtype:'toolbar',dock:'bottom',items:[{xtype:'access_translation',disabled:true},{xtype:'tbfill'},{xtype:'comp_btnCancel'},{xtype:'comp_btnAccept',iconCls:'icon_Key',text:'Ingresar',formBind:true}]}]
}]});