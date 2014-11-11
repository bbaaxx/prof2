import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('skill');
  },
  actions: {
    deleteSkill: function(skill){
      return skill.destroyRecord();
    },
  }
});
