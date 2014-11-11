import Ember from 'ember';

export default Ember.ObjectController.extend({
  showNav: false,

  actions: {
    toggleNav: function () {
      this.toggleProperty('showNav');
    }
  }

});
