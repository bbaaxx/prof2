import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    savePosition: function(){
      this.get('model').save();
      this.transitionToRoute('positions');
    }
  }
});
