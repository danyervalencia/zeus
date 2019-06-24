Ext.define("Siace.view.WinOk",{extend:"Ext.window.Window",alias:"widget.winok",closable:false,layout:{type:"fit"},modal:true,resizable:false,buttons:{buttonAlign:"left",items:[{xtype:"comp_btnNew"},{xtype:"comp_btnPrinter",disabled:true},{xtype:"comp_btnExit",disabled:false}]},__cc:null,__cb:null,__ck:"",__cs:null,__mi:"",__TE:"",
setCC:function(pcCC){this.__cc=pcCC;},getCC:function(){return this.__cc;},
setCB:function(pcCB){this.__cb=pcCB;},getCB:function(){return this.__cb;},
setCK:function(pcCK){this.__ck=pcCK;},getCK:function(){return this.__ck;},
setCS:function(pcCS){this.__cs=pcCS;},getCS:function(){return this.__cs;},//call store
setMI:function(pcMI){this.__mi=pcMI;},getMI:function(){return this.__mi;},
setTE:function(pcTE){this.__TE=pcTE;},getTE:function(){return this.__TE;}
});