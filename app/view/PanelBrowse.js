Ext.define("Siace.view.PanelBrowse",{extend:"Ext.panel.Panel",layout:{type:"fit"},__formParent:null,__mi:"",__panelMaster:null,
setFormParent:function(pcFormParent){this.__formParent=pcFormParent;},getFormParent:function(){return this.__formParent;},
setMI:function(pcMI){this.__mi=pcMI;},getMI:function(){return this.__mi;},
setPanelMaster:function(pcPanelMaster){this.__panelMaster=pcPanelMaster;},getPanelMaster:function(){return this.__panelMaster;}
});