import Ember from 'ember';

var mainMenu = Ember.ArrayProxy.create().set('content', [
  {
    name: 'skills',
    items: [
      {name:'skill portal', target:'skills'},
      {name:'browse skills', target:'skills'},
      {name:'find skills', target:'skills'},
    ]
  },{
    name: 'things',
    items: [
      {name:'some thing', target:'index'},
      {name:'another thing', target:'index'},
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
