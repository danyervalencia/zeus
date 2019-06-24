Ext.define('Siace.view.FormBrowse',{extend:'Ext.form.Panel',closeAction:'destroy',layout:{type:'fit'},__formParent:null,__panelMaster:null,
setFormParent:function(pcFormParent){this.__formParent=pcFormParent;},getFormParent:function(){return this.__formParent;},
setPanelMaster:function(pcPanelMaster){this.__panelMaster=pcPanelMaster;},getPanelMaster:function(){return this.__panelMaster;}
});