import Ember from 'ember';

export default Ember.View.extend({

  skill: null,
  // can be mini, normal or full
  displayMode: 'normal',

  templateName: function(){
    return 'displays/skill-'+this.get('displayMode');
  }.property('displayMode'),

});
