import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addIndicator: function(){
      this.sendAction();
    },
  }
});
