Ext.define("Siace.view.comp.Cbo",{extend:"Ext.form.field.ComboBox",alias:"widget.comp_cbo",disabledCls:"myDisabledClass",editable:false,enforceMaxLength:true,fieldCls:"cbo00001",forceSelection:true,labelClsExtra:"lbl00001",listConfig:{cls:"item00001"},minChars:1,queryMode:"local",typeAhead:true,width:100,
setValue:function(value,doSelect){if(this.store.loading){this.store.on("load",Ext.bind(this.setValue,this,arguments));return;}this.callParent(arguments);},
__valueTag:"",setValueTag:function(poComponent){this.__valueTag=poComponent;},getValueTag:function(){return this.__valueTag;},
});