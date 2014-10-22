import Ember from 'ember';

export default Ember.ObjectController.extend({
  showNav: false,
  mainMenu: null,

  actions: {
    toggleNav: function () {
      this.toggleProperty('showNav');
    }
  }

});
