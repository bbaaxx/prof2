import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    newActivity: function() {
      this.get('model.activities')
        .pushObject(this.store.createRecord('position-activity'));
    }
  }

});
