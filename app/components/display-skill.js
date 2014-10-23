import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // TODO : Improve deletion by taking this code elsewhere
    // and adding security when permissions are available
    deleteSkill: function(){
      this.get('skill').destroyRecord();
    },
  }
});
