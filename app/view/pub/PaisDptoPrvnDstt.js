Ext.define("Siace.view.pub.PaisDptoPrvnDstt",{extend:"Ext.container.Container",alias:"widget.pub_paisdptoprvndstt",defaults:{labelWidth:80,msgTarget:"title",width:"100%"},width:"100%",items:[
{xtype:"fieldcontainer",fieldLabel:"País",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"comp_cbo",itemId:"pais_id",name:"_pais_id",valueField:"pais_id",displayField:"pais_nombre",editable:true,minChars:1,width:"100%"}]},
{xtype:"fieldcontainer",fieldLabel:"Departamento",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"comp_cbo",itemId:"dpto_id",name:"_dpto_id",valueField:"dpto_id",displayField:"dpto_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{dpto_nombre}&nbsp;</div></tpl>",editable:true,minChars:1,width:"100%"}]},
{xtype:"fieldcontainer",fieldLabel:"Provincia",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"comp_cbo",itemId:"prvn_id",name:"_prvn_id",valueField:"prvn_id",displayField:"prvn_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{prvn_nombre}&nbsp;</div></tpl>",disabled:true,editable:true,width:"100%"}]},
{xtype:"fieldcontainer",fieldLabel:"Distrito",labelClsExtra:"lbl00001",layout:"hbox",items:[{xtype:"comp_cbo",itemId:"dstt_id",name:"_dstt_id",valueField:"dstt_id",displayField:"dstt_nombre",tpl:"<tpl for='.'><div class='x-boundlist-item'>{dstt_nombre}&nbsp;</div></tpl>",disabled:true,editable:true,width:"100%"}]}
],
__changeEnabled:true,setChangeEnabled:function(pcChgEnb){this.__changeEnabled=pcChgEnb;},getChangeEnabled:function(){return this.__changeEnabled;},
setStores:function(pbLP){
var _cboPais_id=this.down("#pais_id");_cboPais_id.bindStore(fext_CS("pub.PaisesCbo"));
var _cboDpto_id=this.down("#dpto_id");_cboDpto_id.bindStore(fext_CS("pub.DepartamentosCbo"));
var _cboPrvn_id=this.down("#prvn_id");_cboPrvn_id.bindStore(fext_CS("pub.ProvinciasCbo"));
var _cboDstt_id=this.down("#dstt_id");_cboDstt_id.bindStore(fext_CS("pub.DistritosCbo"));
if(pbLP){_cboPais_id.getStore().load({params:{xxType_record:"cbo"}});}
}});