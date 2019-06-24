Ext.define("Siace.view.WindowEdit",{extend:"Ext.window.Window",alias:"widget.windowform",requires:["Siace.view.toolbar.SaveUndoExit"],closable:false,frame:true,layout:{type:"fit"},modal:true,resizable:false,dockedItems:[{xtype:"saveundoexit"}],__cc:null,__ci:0,__ck:"",__cs:null,__mi:"",__TE:"",__TQ:"",__TRE:"",
setCC:function(pcCC){this.__cc=pcCC;},getCC:function(){return this.__cc;},//component call
setCI:function(pcCI){this.__ci=pcCI;},getCI:function(){return this.__ci;},//call Id
setCK:function(pcCK){this.__ck=pcCK;},getCK:function(){return this.__ck;},//call key
setCS:function(pcCS){this.__cs=pcCS;},getCS:function(){return this.__cs;},//call store
setMI:function(pcMI){this.__mi=pcMI;},getMI:function(){return this.__mi;},
setTE:function(pcTE){this.__TE=pcTE;},getTE:function(){return this.__TE;},
setTQ:function(pcTQ){this.__TQ=pcTQ;},getTQ:function(){return this.__TQ;},
setTRE:function(pcTRE){this.__TRE=pcTRE;},getTRE:function(){return this.__TRE;}//Type Return
});