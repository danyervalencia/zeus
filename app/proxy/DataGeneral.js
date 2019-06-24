Ext.define('Siace.proxy.DataGeneral', { extend: 'Ext.data.proxy.Ajax', alias: 'proxy.datageneralproxy', type: 'ajax', // #2
   	reader: { type: 'json', messageProperty: 'msg', root: 'data' },
    writer: { type: 'json', writeAllFields: true, encode: true, allowSingle: false, root: 'data' },
    actionMethods: { create: "POST",  read: "POST", update: "POST",  destroy: "POST" },

    api: { read: 'php/dataGeneral/list.php', create: 'php/staticData/actor/create.php', update: 'php/staticData/update.php', destroy: 'php/staticData/delete.php' },

    listeners: {
        exception: function(proxy, response, operation){
            Ext.MessageBox.show({ title: 'REMOTE EXCEPTION', msg: operation.getError(), icon: Ext.MessageBox.ERROR, buttons: Ext.Msg.OK });
        }
    }
});