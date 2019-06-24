Ext.define("Siace.view.WinS",{extend:"Ext.window.Window",alias:"widget.wins",requires:["Siace.view.toolbar.OkCancelExit"],autoScroll:true,closeAction:"hide",closable:false,iconCls:"icon_Search_90",layout:{type:"fit"},modal:true,resizable:false,dockedItems:[{xtype:"okcancelexit"}],__AD:false,__cc:null,__ci:0,__ck:"",__f:true,__TS:"",__TR:"",__TQ:"",__TRE:"",
setAD:function(pcAD){this.__AD=pcAD;},getAD:function(){return this.__AD;},
setCC:function(pcCC){this.__cc=pcCC;},getCC:function(){return this.__cc;},
setCI:function(pcCI){this.__ci=pcCI;},getCI:function(){return this.__ci;},
setCK:function(pcCK){this.__ck=pcCK;},getCK:function(){return this.__ck;},
setF:function(poF){this.__f=poF;},getF:function(){return this.__f;},
setTS:function(pcTS){this.__TS=pcTS;},getTS:function(){return this.__TS;},
setTR:function(pcTR){this.__TR=pcTR;},getTR:function(){return this.__TR;},
setTQ:function(pcTQ){this.__TQ=pcTQ;},getTQ:function(){return this.__TQ;},
setTRE:function(pcTRE){this.__TRE=pcTRE;},getTRE:function(){return this.__TRE;}
});