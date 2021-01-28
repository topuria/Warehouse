Ext.define('SL.view.Main', {
  extend: 'Ext.panel.Panel',
  layout: 'border',
  controller: {
    xclass: 'SL.view.MainController',
  },
  viewModel: {
    xclass: 'SL.view.MainViewModel'
  },
  items: [{
    xtype: 'panel',
    reference: 'header',
    height: 70,
    bodyPadding: 10,
    region: 'north',
    layout: {
      type: 'hbox',
      align: 'stretch'
    },
    items: [{
      xtype: 'label',
      flex: 1,
      html: '<h1><strong>საწყობი</strong></h1>'
    }]
  }, {
    xtype: 'panel',
    width: 200,
    title: 'აირჩიე',
    split: true,
    collapsible: true,
    region: 'west',
    layout: {
      type: 'vbox',
      align: 'stretch',
    },
    items: [{
      xtype: 'treelist',
      flex: 1,
      bind: '{navItems}',
      listeners: {
        selectionchange: 'onMenuSelect'
      }
    }]
  }, {
    xtype: 'tabpanel',
    reference: 'mainTabPanel',
    region: 'center',
    items: []
  }]
});
