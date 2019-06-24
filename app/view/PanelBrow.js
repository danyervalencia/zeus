Ext.define('Siace.view.PanelBrow',{extend:'Ext.panel.Panel',__formParent:null,__menuId:'',__panelMaster:null,//layout:{type:'fit',},
setFormParent:function(pcFormParent){this.__formParent=pcFormParent;},getFormParent:function(){return this.__formParent;},
setMenuId:function(pcMenuId){this.__menuId=pcMenuId;},getMenuId:function(){return this.__menuId;},
setPanelMaster:function(pcPanelMaster){this.__panelMaster=pcPanelMaster;},getPanelMaster:function(){return this.__panelMaster;}
});