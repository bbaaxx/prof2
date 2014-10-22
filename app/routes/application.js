import Ember from 'ember';

var mainMenu = Ember.ArrayProxy.create().set('content', [
  {
    name: 'skills',
    items: [
      {name:'skill portal', target:'skills'},
      {name:'browse skills', target:'skills'},
      {name:'create a skill', target:'skills.create'},
    ]
  },{
    name: 'professional experience',
    items: [
      {name:'professional experience portal', target:'positions'},
      {name:'browse professional experience', target:'positions'},
      {name:'add professional experience', target:'positions.create'},

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
