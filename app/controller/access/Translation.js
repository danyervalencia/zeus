Ext.define('Siace.controller.access.Translation', {
    extend: 'Ext.app.Controller',
    views: [
        'access.Translation',
    ],
    refs: [
        {
            ref: 'translation', selector: 'access_translation',
        }
    ],

    init: function(application) {
        this.control({
            'access_translation menuitem': {
                click: this.t_menuItemClick,
            },

            'access_translation': {
                beforerender: this.t_buttonSplitBeforeRender,
            }
        });
    },

    t_menuItemClick: function(item, e, options) {
        var _menu = this.getTranslation();
        _menu.setIconCls(item.iconCls);
        _menu.setText(item.text);
        localStorage.setItem('user-lang', item.iconCls.substr(5));

        window.location.reload();
    },

    t_buttonSplitBeforeRender: function(abstractcomponent, options) {
        var _lang = ( localStorage ? (localStorage.getItem('user-lang') || 'es') : 'es' );
        abstractcomponent.iconCls = 'icon_' + _lang;

        if ( _lang == 'en' ) {
            abstractcomponent.text = 'English';
        } else if ( _lang == 'es' ) {
            abstractcomponent.text = 'Español';
        } else {
            abstractcomponent.text = 'Português';
        }
    }
});