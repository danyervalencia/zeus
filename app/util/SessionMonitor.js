Ext.define("Siace.util.SessionMonitor",{singleton:true,interval:1000*10,lastActive:null,maxInactive:1000*60*240,remaining:0,ui:Ext.getBody(),
window:Ext.create("Ext.window.Window",{bodyPadding:5,closable:false,closeAction:"hide",modal:true,resizable:false,title:"!Advertencia¡ Sesión inactiva",width:325,items:[
	{xtype:"container",frame:true,html:trnslt.usessmon_msg01+"</br></br>"+trnslt.usessmon_msg02+"</br></br>"},{xtype:"label",text:""}
],
buttons:[{text:"Continuar Trabajando",handler:function(){Ext.TaskManager.stop(Siace.util.SessionMonitor.countDownTask);Siace.util.SessionMonitor.window.hide();Siace.util.SessionMonitor.start();Ext.Ajax.request({url:"php/sessionAlive.php"});}},{text:"Cerrar Sesión",action:"logout",handler:function(){Ext.TaskManager.stop(Siace.util.SessionMonitor.countDownTask);Siace.util.SessionMonitor.window.hide(); var btn=Ext.ComponentQuery.query("button#btnLogout")[0];btn.fireEvent("click",btn);}}]
}),
constructor:function(config){var me=this;this.sessionTask={run:me.monitorUI,interval:me.interval,scope:me};this.countDownTask={run:me.countDown,interval:1000,scope:me};},
captureActivity:function(eventObj,el,eventOptions){this.lastActive=new Date();},
monitorUI:function(){var now=new Date(); var inactive=(now-this.lastActive);if(inactive>=this.maxInactive){this.stop();this.window.show();this.remaining=60;Ext.TaskManager.start(this.countDownTask);}},
start:function(){this.lastActive=new Date(); this.ui=Ext.getBody(); this.ui.on("mousemove",this.captureActivity,this);this.ui.on("keydown",this.captureActivity,this);Ext.TaskManager.start(this.sessionTask);},
stop:function(){Ext.TaskManager.stop(this.sessionTask); this.ui.un("mousemove",this.captureActivity,this); this.ui.un("keydown",this.captureActivity,this);},
countDown:function(){this.window.down("label").update(trnslt.usessmon_msg03+this.remaining+trnslt.usessmon_msg04+((this.remaining==1)?".":"s."));
	--this.remaining; if(this.remaining<0){var btn=Ext.ComponentQuery.query("button#btnLogout")[0]; btn.fireEvent("click",btn);}
}
});