import Ember from 'ember';

var mainMenu = Ember.ArrayProxy.create().set('content', [
  {
    name: 'skills',
    items: [
      {name:'skill portal', target:'skills'},
      {name:'browse skills', target:'skills'},
      {name:'add skills', target:'skills.create'},
    ]
  },{
    name: 'positions',
    items: [
      {name:'positions portal', target:'positions'},
      {name:'browse positions', target:'positions'},
      {name:'add positions', target:'positions.create'},

    ]
  }
]);

export default Ember.Route.extend({

  setupController: function (controller,model) {
    this._super(controller,model);
    controller.set('showNav', false);
    controller.set('mainMenu', mainMenu);
  },

  actions: {
    willTransition: function () {
      if ( this.controller.get('showNav') ) {
        this.controller.set('showNav', false);
      }
    }
  }


});
