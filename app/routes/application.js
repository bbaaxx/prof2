import Ember from 'ember';

var mainMenu = Ember.ArrayProxy.create()
  .set('content', [{
    name: 'profiles',
    items: [
      {name:'profiles portal', target:'profiles'},
      {name:'browse profiles', target:'profiles'},
      {name:'add profiles', target:'profiles.create'},
    ]
  },{
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
  }]);
var currentUser = Ember.Object.create({
  firstName: 'Eduardo',
  lastName: 'Mosqueda'
}).reopen({
  fullName: function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName','lastName'),
});
var options = Ember.Object.create({
  fluidLayout: true
});

export default Ember.Route.extend({

  model: function(){
    return Ember.Object.create({
      mainMenu: mainMenu,
      user: currentUser,
      options: options
    });
  },
  actions: {
    // TODO: I don't like this here.
    willTransition: function () {
      if ( this.controller.get('showNav') ) {
        this.controller.set('showNav', false);
      }
    }
  }


});
