Ext.define("Siace.controller.access.Menus",{extend:"Ext.app.Controller",stores:["Menus"],views:["access.MenuAccordion","access.MenuItem"],
init:function(application){
this.control({"access_header":{render:this.ah_Render},"access_menuaccordion":{render:this.ama_Render},"access_menuitem":{itemclick:this.ami_Click}});
},
ah_Render:function(abstcomp,opt){},
ama_Render:function(abstcomp,opt){
	this.getMenusStore().load(function(rec,opt,succ){var _menuPanel=Ext.ComponentQuery.query("access_menuaccordion")[0];
		Ext.each(rec,function(root){var _menu=Ext.create("Siace.view.access.MenuItem",{title:root.get("menu_nombre"),iconCls:root.get('menu_icon')});var _submenu="";var _menu_id="";
			Ext.each(root.items().data.items,function(item){
				if(item.data.menu_par==_menu_id){_submenu.appendChild({className:(item.get("menu_leaf")==1?item.get("menu_xtype"):""),controll:item.get('menu_controller'),id:item.data.menu_id,leaf:true,text:item.data.submenu_nombre});}
				else{_submenu=_menu.getRootNode().appendChild({className:(item.data.menu_leaf==1?item.data.menu_xtype:""),controll:item.data.menu_controller,iconCls:item.data.menu_css,id:item.data.menu_id,leaf:(item.data.menu_leaf==1?true:false),text:item.data.submenu_nombre}); _menu_id=item.data.menu_id;}
			});
			_menuPanel.add(_menu);
		});
	});
},
ami_Click:function(view,rec,item,index,event,opt){if(!rec.raw.leaf){return false;}
	if(fjsIn_array(rec.data.id,[1132,1133])){fext_CC("pub.UsuariosEPsw");var _w=fext_CW("pub.UsuariosEPsw");_w.setMI(rec.data.id);_w.show();}
	else{var _mainPanel=view.up("viewport").down("access_mainpanel");var _newTab=_mainPanel.items.findBy(function(tabb){return tabb.__mi==rec.data.id;});
		if(!_newTab){Ext.util.Format.thousandSeparator=",";Ext.util.Format.decimalSeparator=".";Ext.util.Format.currencySign="";Siace.app.getController(rec.raw.controll);_newTab=_mainPanel.add({xtype:rec.raw.className,closable:true,title:rec.get("text")});_newTab.setMI(rec.data.id);}
		_mainPanel.setActiveTab(_newTab);
	}
}
});
